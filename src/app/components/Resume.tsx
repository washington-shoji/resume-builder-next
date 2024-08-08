import React, { forwardRef, ForwardedRef } from 'react';
import { ResumeOneFormInput } from '../types/resume-data.types';
import { splitStringByPipe } from '../utils/utils';
import { icons } from '../data/icons';

interface Props {
	formData: ResumeOneFormInput;
}

function Resume(props: Props, ref: ForwardedRef<HTMLDivElement>) {
	const { formData } = props;

	return (
		<div className='App-resume bg-gray-transparent ' ref={ref}>
			<div className=' p-4'>
				<div className='flex rounded-t-lg bg-blue-400 sm:px-2 w-full'>
					<div className='w-2/3 sm:text-center pl-5 mt-10 text-start mb-4'>
						<p className='font-poppins font-bold text-white text-heading sm:text-4xl text-2xl text-start'>
							{formData.personalData?.heading?.fullName ?? 'Your Name'}
						</p>
						<p className='sm:text-2xl text-heading text-start'>
							{formData.personalData?.heading?.roleTitle ?? 'Your Role'}
						</p>
					</div>
				</div>

				<div className='border-blue-400 border-l-2 border-r-2 border-b-2 rounded-b-lg  p-5'>
					<div className='flex flex-col sm:flex-row sm:mt-10'>
						<div className='flex flex-col sm:w-1/3'>
							<div className='py-3 sm:order-none order-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									My Contact
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div>
									{formData.personalData?.contact?.map((contactItem, index) => (
										<div key={index} className='flex items-center my-1'>
											<div className='w-6 text-gray-700 '>
												{icons.map((icon, index) => {
													if (icon.iconLabel === contactItem.iconLabel) {
														return (
															<icon.Icon key={index}></icon.Icon>
														);
													}
												})}
											</div>
											<div className='ml-2 truncate'>
												{contactItem.contactInfo}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className='py-3 sm:order-none order-2'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Skills
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div>
									{formData?.skillData?.map((skillItem, index) => {
										return (
											<div key={index} className='flex items-center my-1'>
												{icons.map((icon, index) => {
													if (icon.iconLabel === skillItem.iconLabel) {
														return (
															<icon.Icon
																className='w-6 text-gray-700'
																key={index}
															></icon.Icon>
														);
													}
												})}
												<div className='ml-2'>
													{skillItem.label ?? 'Your Skill'}
												</div>
											</div>
										);
									})}
								</div>
							</div>

							<div className='py-3 sm:order-none order-1'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Education Background
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div className='flex flex-col space-y-1'>
									{formData?.educationalData?.map((educationalItem, index) => {
										return (
											<div key={index}>
												<div className='flex flex-col'>
													<p className='font-semibold text-xs text-gray-700'>
														{educationalItem?.year ?? 'Graduation Year'}
													</p>
													<p className='text-sm font-medium'>
														<span className='text-blue-400'>
															{educationalItem?.educationTitle ??
																'Your Education Title'}
														</span>
														,{' '}
														{educationalItem?.institution ?? 'Your Institution'}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>

						<div className='flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10'>
							<div className='py-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									About Me
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>
								<p>
									{formData?.personalData?.heading?.summary ??
										'Your Professional Summary'}
								</p>
							</div>

							<div className='py-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Professional Experience
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								{formData?.professionalData?.map((professionalItem, index) => {
									return (
										<div key={index} className='flex flex-col'>
											<div className='flex flex-col'>
												<p className='text-lg font-bold text-gray-700'>
													{professionalItem?.company ?? 'Company Name'}
												</p>
												<p className='font-semibold text-sm text-gray-700'>
													{professionalItem?.timePeriod ?? 'Period of Work'}
												</p>
												<p className='font-semibold text-sm text-gray-700 mt-2 mb-1'>
													Key Responsibilities
												</p>
												<ul className='text-sm list-disc pl-4 space-y-1'>
													{splitStringByPipe(
														professionalItem?.responsibilities ??
															'Responsibilities'
													).map((responsibility, index) => {
														return <li key={index}>{responsibility}</li>;
													})}
												</ul>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default forwardRef<HTMLDivElement, Props>(Resume);
