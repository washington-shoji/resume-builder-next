import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='flex justify-center min-h-screen bg-white dark:bg-gray-900'>
			<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
						Personal Resume Builder
					</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						Build your own personal resume with beautiful templates.
					</p>
					<a
						href='/resume-selection'
						className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
					>
						Start building
						<FaLocationArrow className='w-6' />
					</a>
				</div>
				{/* TODO: Remove placeholder image */}
				<div className=' hidden lg:mt-0 lg:col-span-5 lg:flex'>
					<Image
						width={800}
						height={800}
						className=' rounded-xl'
						src='https://cdn.dribbble.com/userupload/6108903/file/original-cc720622f5296a25f36829ef10602f2d.jpg?resize=1200x800'
						alt='mockup'
					/>
				</div>
			</div>
		</main>
	);
}
