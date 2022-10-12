import Image from 'next/image'

export default function Header() {
	return (
		<header>
			{/* Top Nav */}
			<div>
				<div>
					<Image
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>
			</div>

			{/* Bottom Nav */}
			<div></div>
		</header>
	)
}
