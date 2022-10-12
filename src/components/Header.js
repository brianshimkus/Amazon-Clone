import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

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
				<div className='bg-yellow-400'>
					<input type='text' />
					<MagnifyingGlassIcon className='h-12 p-4' />
				</div>
			</div>

			{/* Bottom Nav */}
			<div></div>
		</header>
	)
}
