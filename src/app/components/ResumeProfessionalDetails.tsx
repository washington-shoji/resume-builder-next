import React from 'react';
import { FieldErrors, useFormContext, UseFormRegister } from 'react-hook-form';
import { ResumeOneFormInput } from '../types/resume-data.types';

export default function ResumeProfessionalDetails() {
	const {
		register,
		formState: { errors },
	} = useFormContext<ResumeOneFormInput>();
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
				<h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
					Professional Details
				</h2>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<div className=' w-full'>
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
							aria-invalid={errors?.company ? 'true' : 'false'}
							{...register('company', { required: true })}
						/>
						{errors?.company && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p>
						)}
					</div>
					<div className=' w-full'>
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
							aria-invalid={errors?.timePeriod ? 'true' : 'false'}
							{...register('timePeriod', { required: true })}
						/>
						{errors?.timePeriod && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p>
						)}
					</div>

					<div className='sm:col-span-2'>
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
							aria-invalid={errors?.responsibilities ? 'true' : 'false'}
							{...register('responsibilities', { required: true })}
						></textarea>
						{errors?.responsibilities && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p>
						)}
					</div>

					{/* <div>
						<label
							htmlFor='category'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Category
						</label>
						<select
							id='category'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
						>
							<option defaultValue={'TV/Monitors'}>Select category</option>
							<option value='TV'>TV/Monitors</option>
							<option value='PC'>PC</option>
							<option value='GA'>Gaming/Console</option>
							<option value='PH'>Phones</option>
						</select>
					</div> */}

					<div className=' w-full'>
						<label
							htmlFor='name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Icons
						</label>
						<input
							type='text'
							id='icon'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Icon'
							aria-invalid={errors?.icon ? 'true' : 'false'}
							{...register('icon', { required: true })}
						/>
						{errors?.icon && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p>
						)}
					</div>
					<div className=' w-full'>
						<label
							htmlFor='brand'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Skill label
						</label>
						<input
							type='text'
							id='label'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Time period'
							aria-invalid={errors?.label ? 'true' : 'false'}
							{...register('label', { required: true })}
						/>
						{errors?.label && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Oh, snapp!</span> Some error
								message.
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
