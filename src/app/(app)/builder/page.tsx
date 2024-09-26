'use client';
import React, { useState } from 'react';
import BuilderStepper from '@/app/components/BuilderStepper';

export default function Builder() {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const numberOfSteps = 3;
	const stepTitle = ['Personal', 'Professional', 'Educational'];
	return (
		<main className='flex justify-center min-h-screen bg-white dark:bg-gray-900'>
			<div className='grid grid-cols-2 gap-6'>
				<div className=' flex flex-col'>
					<BuilderStepper
						currentStep={currentStep}
						numberOfSteps={numberOfSteps}
						stepTitle={stepTitle}
					></BuilderStepper>
				</div>
				<div className=' flex flex-col'>
					<div>Resume builder</div>
				</div>
			</div>
		</main>
	);
}
