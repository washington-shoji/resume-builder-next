import React from 'react';
import { ResumeOneFormInput } from '../types/resume-data.types';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { skillIcons } from '../data/icons';

export default function SkillFieldArray() {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<ResumeOneFormInput>();

	const { fields, append, remove } = useFieldArray({
		name: 'skillData',
		control,
	});

	return (
		<div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
			{fields?.map((field, index) => {
				return (
					<React.Fragment key={field.id}>
						<div className='sm:col-span-2'>
							<button
								type='button'
								className={`w-full inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800 ${
									fields.length === 1 ? 'hidden' : ''
								}`}
								disabled={fields.length === 1}
								onClick={() => remove(index)}
							>
								Remove Skill below
							</button>
						</div>

						<div className='w-full'>
							<label
								htmlFor='category'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Skill Icons
							</label>
							<select
								id='icon'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
								aria-invalid={
									errors?.skillData?.[index]?.iconLabel ? 'true' : 'false'
								}
								{...register(`skillData.${index}.iconLabel` as const, {
									required: true,
								})}
							>
								{skillIcons.map((item) => {
									return (
										<option
											key={item.iconLabel}
											defaultValue={item.iconLabel}
											value={item.iconLabel}
										>
											{item.iconLabel}
										</option>
									);
								})}
							</select>
							{errors?.skillData?.[index]?.iconLabel && (
								<p className='mt-2 text-xs text-red-600 dark:text-red-400'>
									<span className='font-medium'>Skill Icon!</span> is required!.
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
								aria-invalid={
									errors?.skillData?.[index]?.label ? 'true' : 'false'
								}
								{...register(`skillData.${index}.label` as const, {
									required: true,
								})}
							/>
							{errors?.skillData?.[index]?.label && (
								<p className='mt-2 text-xs text-red-600 dark:text-red-400'>
									<span className='font-medium'>Skill Label</span> is required!
								</p>
							)}
						</div>
					</React.Fragment>
				);
			})}

			<div className='sm:col-span-2'>
				{fields.length <= 3 && (
					<button
						type='button'
						className='w-full inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800'
						onClick={() =>
							append({
								iconLabel: '',
								label: '',
							})
						}
					>
						Add skill
					</button>
				)}
			</div>
		</div>
	);
}
