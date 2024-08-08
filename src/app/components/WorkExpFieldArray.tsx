import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ResumeOneFormInput } from '../types/resume-data.types';

export default function WorkExpFieldArray() {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeOneFormInput>();

	const { fields, append, remove } = useFieldArray({
		name: 'professionalData',
		control,
	});
	return (
		<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
			{fields.map((field, index) => {
				return (
					<React.Fragment key={field.id}>
						<div className='sm:col-span-2'>
							<button
								type='button'
								className={`w-full inline-flex items-center px-5 py-2.5 mt-4 mb-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800 ${
									fields.length === 1 ? 'hidden' : ''
								}`}
								disabled={fields.length === 1}
								onClick={() => remove(index)}
							>
								Remove Work Experience below
							</button>

							<div className=' mb-4'>
								<label
									htmlFor='name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Company and Role Title
								</label>
								<input
									type='text'
									id='company'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='Company and Role Title'
									aria-invalid={
										errors?.professionalData?.[index]?.company
											? 'true'
											: 'false'
									}
									{...register(`professionalData.${index}.company` as const, {
										required: true,
									})}
								/>
								{errors?.professionalData?.[index]?.company && (
									<p className='mt-2 text-xs text-red-600 dark:text-red-400'>
										<span className='font-medium'>Company and Role title</span>{' '}
										is required.
									</p>
								)}
							</div>
							<div className=' mb-4'>
								<label
									htmlFor='brand'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Time period
								</label>
								<input
									type='text'
									id='timePeriod'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='Time period'
									aria-invalid={
										errors?.professionalData?.[index]?.timePeriod
											? 'true'
											: 'false'
									}
									{...register(
										`professionalData.${index}.timePeriod` as const,
										{
											required: true,
										}
									)}
								/>
								{errors?.professionalData?.[index]?.timePeriod && (
									<p className='mt-2 text-xs text-red-600 dark:text-red-400'>
										<span className='font-medium'>Employment Time Period</span>{' '}
										is required.
									</p>
								)}
							</div>

							<div className=' mb-4'>
								<label
									htmlFor='summary'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Responsibilities
								</label>
								<textarea
									id='responsibilities'
									rows={8}
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='Responsibilities'
									aria-invalid={
										errors?.professionalData?.[index]?.responsibilities
											? 'true'
											: 'false'
									}
									{...register(
										`professionalData.${index}.responsibilities` as const,
										{
											required: true,
										}
									)}
								></textarea>
								{errors?.professionalData?.[index]?.responsibilities && (
									<p className='mt-2 text-xs text-red-600 dark:text-red-400'>
										<span className='font-medium'>
											Roles and Responsibilities
										</span>{' '}
										is required!
									</p>
								)}
							</div>
						</div>
					</React.Fragment>
				);
			})}

			<div className='sm:col-span-2'>
				{fields.length <= 3 && (
					<button
						type='button'
						className=' w-full inline-flex items-center px-5 py-2.5 mt-4 mb-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800'
						onClick={() =>
							append({
								company: '',
								timePeriod: '',
								responsibilities: '',
							})
						}
					>
						Add Work Experience
					</button>
				)}
			</div>
		</div>
	);
}
