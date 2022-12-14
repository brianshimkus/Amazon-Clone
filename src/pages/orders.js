import { getSession, useSession } from 'next-auth/react'
import db from '../../firebase'
import Header from '../components/Header'
import Order from '../components/Order'

export default function OrdersPage({ orders }) {
	const { data: session } = useSession()

	return (
		<div>
			<Header />
			<main className='max-w-screen-lg mx-auto p-10'>
				<h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
					Your Orders
				</h1>

				{session ? (
					<h2>{orders.length} Orders</h2>
				) : (
					<h2>Please sign in to see your orders</h2>
				)}

				<div className='mt-5 space-y-4'>
					{orders?.map(
						({ id, amount, amount_shipping, images, timestamp, items }) => (
							<Order
								key={id}
								id={id}
								amount={amount}
								amountShipping={amount_shipping}
								images={images}
								timestamp={timestamp}
								items={items}
							/>
						)
					)}
				</div>
			</main>
		</div>
	)
}

export async function getServerSideProps(context) {
	const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

	const session = await getSession(context)

	if (!session) {
		return {
			props: {},
		}
	}

	// Firebase DB
	const stripeOrders = await db
		.collection('users')
		.doc(session.user.email)
		.collection('orders')
		.orderBy('timestamp', 'desc')
		.get()

	// Stripe orders
	const orders = await Promise.all(
		stripeOrders.docs.map(async (order) => ({
			id: order.id,
			amount: order.amount,
			amount_shipping: order.amount_shipping,
			images: (
				await stripe.files.list({
					limit: 1,
					type: 'order_receipt',
					order: order.id,
				})
			).data[0].url,
			timestamp: order.created,
			items: (
				await stripe.checkout.sessions.listLineItems(order.checkout.session, {
					limit: 100,
				})
			).data,
		}))
	)

	return {
		props: {
			orders,
		},
	}
}
