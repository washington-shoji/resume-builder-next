import React from 'react';

import WorkExpFieldArray from './WorkExpFieldArray';
import SkillFieldArray from './SkillFieldArray';

export default function ResumeProfessionalDetails() {
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
				<h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
					Professional Details
				</h2>
				<div>
					<WorkExpFieldArray></WorkExpFieldArray>
					<SkillFieldArray></SkillFieldArray>
				</div>
			</div>
		</section>
	);
}
