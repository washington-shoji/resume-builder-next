import React from 'react';
import { UseFormRegister, FieldErrors, useFormContext } from 'react-hook-form';
import { ResumeOneFormInput } from '../types/resume-data.types';

export default function ResumeEducationalDetails() {
	const {
		register,
		formState: { errors },
	} = useFormContext<ResumeOneFormInput>();
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
				<h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
					Educational Details
				</h2>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<div className='sm:col-span-2'>
						<label
							htmlFor='name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Education Title
						</label>
						<input
							type='text'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Education Title'
							aria-invalid={
								errors?.educationalData?.educationTitle ? 'true' : 'false'
							}
							{...register('educationalData.educationTitle', {
								required: true,
							})}
						/>
						{errors?.educationalData?.educationTitle && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Educational Title</span> is
								required!
							</p>
						)}
					</div>
					<div className='w-full'>
						<label
							htmlFor='brand'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Institution
						</label>
						<input
							type='text'
							id='institution'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Institution'
							aria-invalid={
								errors?.educationalData?.institution ? 'true' : 'false'
							}
							{...register('educationalData.institution', { required: true })}
						/>
						{errors?.educationalData?.institution && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Educational Institution</span> is
								required!
							</p>
						)}
					</div>
					<div className='w-full'>
						<label
							htmlFor='brand'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Graduation Year
						</label>
						<input
							type='text'
							id='year'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Graduation Year'
							aria-invalid={errors?.educationalData?.year ? 'true' : 'false'}
							{...register('educationalData.year', { required: true })}
						/>
						{errors?.educationalData?.year && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Graduation Year</span> is
								required!
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
