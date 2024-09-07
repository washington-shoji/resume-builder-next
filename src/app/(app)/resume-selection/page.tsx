'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';

export type Template = {
	templateId: string;
	name: string;
	image: string;
};

export default function ResumeSelection() {
	const [selected, setSelected] = useState<string | undefined>(undefined);

	function isSelected(id: string): boolean {
		return selected === id;
	}

	const templates: Template[] = [
		{
			templateId: 'tmpl-1',
			name: 'template-1',
			image:
				'https://cdn.dribbble.com/userupload/9266643/file/original-ed3b86b8c7318f5288fa72dd0fd72412.jpg?resize=1200x800&vertical=center',
		},
		{
			templateId: 'tmpl-2',
			name: 'template-2',
			image:
				'https://cdn.dribbble.com/userupload/9769018/file/original-073834e4a2c80fbbf1c3d48a6dc5089f.jpg?resize=1200x800&vertical=center',
		},
		{
			templateId: 'tmpl-3',
			name: 'template-3',
			image:
				'https://cdn.dribbble.com/userupload/5833158/file/original-5bb65ee037363a1cbe56500c0fb055c8.jpg?resize=1200x800',
		},
	];

	return (
		<main className='flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 p-4 sm:p-0'>
			<div className=' flex flex-col gap-4'>
				<div className='mr-auto place-self-center lg:col-span-7'>
					<h1 className='max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white'>
						Start by selecting a template
					</h1>
					<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
						You can select colours in the next section.
					</p>
				</div>

				<div className='flex gap-6'>
					<div className='flex flex-col gap-6'>
						<div>
							<h2 className=' text-xl font-semibold'>Templates</h2>
						</div>
						<div className=' flex flex-col sm:flex-row gap-4'>
							{templates.map((t) => {
								return (
									<div key={t.templateId}>
										{isSelected(t.templateId) && (
											<CiBookmarkCheck className=' text-blue-500 text-2xl absolute mt-1 ml-1 stroke-1' />
										)}

										<Image
											className={
												isSelected(t.templateId)
													? ' border-[3px] border-blue-500 rounded-md'
													: 'border-[3px] border-transparent rounded-md'
											}
											width={200}
											height={200}
											src={t.image}
											alt=''
											onClick={() => setSelected(t.templateId)}
										></Image>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
