import React from 'react';
import { FieldErrors, useFormContext, UseFormRegister } from 'react-hook-form';
import { ResumeOneFormInput } from '../types/resume-data.types';

export default function ResumePersonalDetails() {
	const {
		register,
		formState: { errors },
	} = useFormContext<ResumeOneFormInput>();

	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
				<h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
					Personal Details
				</h2>
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
					<div className='w-full'>
						<label
							htmlFor='name'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Full Name
						</label>
						<input
							type='text'
							id='fullName'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Full name'
							aria-invalid={
								errors?.personalData?.heading?.fullName ? 'true' : 'false'
							}
							{...register('personalData.heading.fullName', { required: true })}
						/>
						{errors?.personalData?.heading?.fullName && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Full Name</span> is required!.
							</p>
						)}
					</div>
					<div className='w-full'>
						<label
							htmlFor='brand'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Role title
						</label>
						<input
							type='text'
							id='roleTitle'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Role title'
							aria-invalid={
								errors?.personalData?.heading?.roleTitle ? 'true' : 'false'
							}
							{...register('personalData.heading.roleTitle', {
								required: true,
							})}
						/>
						{errors?.personalData?.heading?.roleTitle && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Role Title</span> is required!.
							</p>
						)}
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='summary'
							className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						>
							Summary
						</label>
						<textarea
							id='summary'
							rows={8}
							className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							placeholder='Your description here'
							aria-invalid={
								errors?.personalData?.heading?.summary ? 'true' : 'false'
							}
							{...register('personalData.heading.summary', { required: true })}
						></textarea>
						{errors?.personalData?.heading?.summary && (
							<p
								id='standard_error_help'
								className='mt-2 text-xs text-red-600 dark:text-red-400'
							>
								<span className='font-medium'>Professional Summary</span> is
								required!.
							</p>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
