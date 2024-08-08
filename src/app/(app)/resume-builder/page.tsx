'use client';

import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';

import BuilderStepper from '@/app/components/BuilderStepper';
import ResumePersonalDetails from '@/app/components/ResumePersonalDetails';
import Preview from '../preview/page';
import ResumeProfessionalDetails from '@/app/components/ResumeProfessionalDetails';
import ResumeEducationalDetails from '@/app/components/ResumeEducationalDetails';
import { ResumeOneFormInput } from '@/app/types/resume-data.types';

export default function ResumeBuilder() {
	// TODO: There is too much business logic in this PreviewComponent
	// TODO: Needs to break into smaller pieces

	let storeData: ResumeOneFormInput = {};
	const [currentStep, setCurrentStep] = useState<number>(0);
	const [savedFormData, setSavedFormData] = useState<
		ResumeOneFormInput | undefined
	>(undefined);
	const methods = useForm<ResumeOneFormInput>({
		values: savedFormData,
		defaultValues: {
			personalData: {
				heading: {
					fullName: 'User Name',
					roleTitle: 'User Role',
					summary: 'User short summary',
				},
				contact: [{ iconLabel: 'email', contactInfo: 'user@email' }],
			},
			professionalData: [
				{
					company: 'User Work Place',
					timePeriod: '2000 - Present',
					responsibilities: 'User Responsibilities',
				},
			],
			skillData: [{ iconLabel: 'node', label: 'User Skill' }],
			educationalData: [
				{
					year: '2000',
					educationTitle: 'User Education',
					institution: 'User Education Institution',
				},
			],
		},
		mode: 'onBlur',
	});
	const { handleSubmit, control } = methods;
	const formData = useWatch({
		control,
	});

	const numberOfSteps = 3;
	const stepTitle = ['Personal', 'Professional', 'Educational'];

	function gotToNextStep(): void {
		setCurrentStep((prev) => (prev === numberOfSteps - 1 ? prev : prev + 1));
	}

	function goToPreviousStep() {
		setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
	}

	function onSubmit(formData: ResumeOneFormInput): void {
		localStorage.removeItem('form-data');
		localStorage.setItem('form-data', JSON.stringify(formData));
	}

	useEffect(() => {
		storeData = JSON.parse(localStorage.getItem('form-data') as string);
		console.warn('storeData', storeData);
		if (storeData) {
			setSavedFormData(storeData);
		}
	}, []);

	return (
		<div className=' flex flex-col'>
			<BuilderStepper
				currentStep={currentStep}
				numberOfSteps={numberOfSteps}
				stepTitle={stepTitle}
			></BuilderStepper>

			<div className=' flex justify-center mb-4'>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{/* TODO: Improve this conditional rendering logic */}
						<div className={currentStep !== 0 ? ' hidden' : ''}>
							<ResumePersonalDetails></ResumePersonalDetails>
						</div>
						<div className={currentStep !== 1 ? ' hidden' : ''}>
							<ResumeProfessionalDetails></ResumeProfessionalDetails>
						</div>
						<div className={currentStep !== 2 ? ' hidden' : ''}>
							<ResumeEducationalDetails></ResumeEducationalDetails>
						</div>

						<div className=' flex gap-4'>
							<button
								type='button'
								className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800'
								onClick={goToPreviousStep}
								disabled={currentStep === 0}
							>
								Previous step
							</button>

							{currentStep + 1 !== numberOfSteps && (
								<button
									type='button'
									className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
									onClick={gotToNextStep}
									disabled={currentStep === numberOfSteps}
								>
									Next step
								</button>
							)}

							{currentStep + 1 === numberOfSteps && (
								<button
									type='submit'
									className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
								>
									Save data
								</button>
							)}
						</div>
					</form>
				</FormProvider>

				<div className=' flex basis-1/2'>
					<Preview formData={formData}></Preview>
				</div>
			</div>
		</div>
	);
}
