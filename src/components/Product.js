import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter'

const MAX_RATING = 5
const MIN_RATING = 1

export default function Product({
	id,
	title,
	price,
	description,
	category,
	image,
}) {
	const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	)
	const [hasPrime] = useState(Math.random() < 0.5)
	return (
		<div>
			<p>{category}</p>
			<Image src={image} height={200} width={200} objectFit='contain' />
			<h4>{title}</h4>
			<div className='flex'>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className='h-5' />
					))}
			</div>

			<p className='text-xs my-2 line-clamp-2'>{description}</p>

			<div className='mb-5'>
				<Currency quantity={price} currency='USD' />
			</div>

			{hasPrime && (
				<div>
					<img src='https://links.papareact.com/fdw' alt='' />
					<p>FREE Next-day Delivery</p>
				</div>
			)}

			<button>Add to Basket</button>
		</div>
	)
}
