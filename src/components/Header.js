import Image from 'next/image'
import {
	InformationCircleIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
	return (
		<header>
			{/* Top Nav */}
			<div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
				<div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
					<Image
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>
				{/* Search */}
				<div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
					<input
						className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'
						type='text'
					/>
					<MagnifyingGlassIcon className='h-12 p-4' />
				</div>

				{/* Right */}
				<div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
					<div className='link'>
						<p>Hello User</p>
						<p className='font-extrabold md:text-sm'>Account &amp; Lists</p>
					</div>

					<div className='link'>
						<p>Returns</p>
						<p className='font-extrabold md:text-sm'>&amp; Orders</p>
					</div>

					<div className='relative link flex items-center'>
						<span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
							4
						</span>
						<ShoppingCartIcon className='h-10' />
						<p className='hidden md:inline font-extrabold md:text-sm mt-2'>
							Cart
						</p>
					</div>
				</div>
			</div>

			{/* Bottom Nav */}
			<div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
				<p className='link flex items-center'>
					<InformationCircleIcon className='h-6 mr-1' /> All
				</p>
				<p className='link'>Prime Video</p>
				<p className='link'>Amazon Business</p>
				<p className='link'>Today's Deals</p>
				<p className='link hidden lg:inline-flex'>Electronics</p>
				<p className='link hidden lg:inline-flex'>Food &amp; Grocery</p>
				<p className='link hidden lg:inline-flex'>Prime</p>
				<p className='link hidden lg:inline-flex'>Buy Again</p>
				<p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
				<p className='link hidden lg:inline-flex'>Health &amp; Personal Care</p>
			</div>
		</header>
	)
}
