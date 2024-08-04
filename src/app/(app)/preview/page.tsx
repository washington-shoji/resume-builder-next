'use client';

import Resume from '@/app/components/Resume';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Preview() {
	const componentRef = useRef<HTMLDivElement>(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});
	return (
		<main className='flex justify-center bg-white dark:bg-gray-900'>
			{/* <button
						className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
						type='button'
						onClick={handlePrint}
					>
						Print resume
						<svg
							className='w-5 h-5 ml-2 -mr-1'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clipRule='evenodd'
							></path>
						</svg>
					</button> */}
			<div>
				<Resume ref={componentRef}></Resume>
			</div>
		</main>
	);
}
