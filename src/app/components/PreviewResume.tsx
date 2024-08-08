'use client';

import Resume from '@/app/components/Resume';
import { ResumeOneFormInput } from '@/app/types/resume-data.types';
import { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { useReactToPrint } from 'react-to-print';

interface Props {
	formData: ResumeOneFormInput;
}

export default function PreviewResume(props: Props) {
	const componentRef = useRef<HTMLDivElement>(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	function onDeleteData(): void {
		if (
			window.confirm(
				"Are you sure you and to delete the Resume Data? It's irreversible!"
			)
		) {
			localStorage.removeItem('form-data');
			window.location.reload();
		}
	}

	return (
		<main className='flex flex-col gap-4 bg-white dark:bg-gray-900'>
			<div className='flex flex-col gap-2 px-4 mt-4'>
				<button
					className='w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
					type='button'
					onClick={handlePrint}
				>
					Print resume
					<FaFilePdf className=' text-xl ml-2' />
				</button>

				<button
					className='w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'
					type='button'
					onClick={onDeleteData}
				>
					Delete resume data
					<FaTrashAlt className=' text-xl ml-2' />
				</button>
			</div>

			<div>
				<Resume formData={props.formData} ref={componentRef}></Resume>
			</div>
		</main>
	);
}
