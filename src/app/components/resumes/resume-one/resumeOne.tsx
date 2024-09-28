import React from 'react';

export default function ResumeOne() {
	return (
		<div className='relative block w-[90%] max-w-[1200px] my-20 mx-auto bg-white shadow-md'>
			<div className='h-[220px] bg-blue-500 text-white relative'>
				<div className="absolute left-[calc(350px+5%)] right-0 bottom-0 h-[120px] text-center font-['Raleway'] text-[58px] tracking-[8px] font-thin leading-[60px]">
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94%]'>
						Candidate's Name
					</div>
				</div>
			</div>

			<div className='absolute top-[60px] left-[5%] bottom-0 w-[350px] bg-blue-100 pt-[190px] px-8 pb-12'>
				<p className='uppercase text-base tracking-[4px] font-semibold leading-7 mx-auto mb-2 pb-1 border-b border-blue-500'>
					Personal Details
				</p>

				<p className='mb-2'>1 Some St</p>
				<p className='mb-2'>Suburb, State 0000</p>
				<p className='mb-2'>1234567890</p>
				<p className='mb-6'>email@email.com</p>

				<p className="pl-[60px] mb-5 cursor-pointer relative before:absolute before:top-[-4px] before:left-[10px] before:h-[35px] before:w-[35px] before:bg-center before:bg-no-repeat before:bg-cover before:bg-[url('https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png')]">
					Linked-in
				</p>

				<p className='uppercase text-base tracking-[4px] font-semibold leading-7 mt-16 mx-auto mb-2 pb-1 border-b border-blue-500'>
					Expertise
				</p>
				<p className='pl-6 mb-2.5'>HTML</p>
				<p className='pl-6 mb-2.5'>CSS (Stylus)</p>
				<p className='pl-6 mb-2.5'>JavaScript & jQuery</p>

				<p className='uppercase text-base tracking-[4px] font-semibold leading-7 mt-16 mx-auto mb-2 pb-1 border-b border-blue-500'>
					Education
				</p>
				<p className='pl-6 mb-2.5'>Lorem Ipsum is simply dummy text</p>
				<p className='pl-6 mb-2.5'>Lorem Ipsum is simply dummy text</p>
				<p className='pl-6 mb-2.5'>Lorem Ipsum is simply dummy text</p>
			</div>

			<div className='relative ml-[calc(380px+5%)] w-[calc(95%-350px)] pt-6 pr-10 pb-12'>
				<h2 className='w-full text-center text-3xl tracking-[5px] font-semibold leading-10 text-black'>
					Software Developer
				</h2>
				<div className='w-[240px] h-[2px] bg-blue-600 my-6 mx-auto'></div>

				<div className='bg-blue-300 max-w-[580px] text-center text-base tracking-[6px] font-semibold leading-7 uppercase mb-6'>
					Profile
				</div>
				<p className='text-justify mb-12 mr-6'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>

				<div className='bg-blue-300 max-w-[580px] text-center text-base tracking-[6px] font-semibold leading-7 uppercase mb-6'>
					Experience
				</div>

				<h3 className='text-[21px] tracking-wide font-semibold leading-7 text-black mb-1'>
					Job #1
				</h3>
				<p className='text-blue-500 mb-4'>First job description</p>
				<p className='text-justify mb-8 mr-6'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>

				<h3 className='text-[21px] tracking-wide font-semibold leading-7 text-black mb-1'>
					Job #2
				</h3>
				<p className='text-blue-500 mb-4'>Second Job Description</p>
				<p className='text-justify mb-8 mr-6'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>

				<h3 className='text-[21px] tracking-wide font-semibold leading-7 text-black mb-1'>
					Job #3
				</h3>
				<p className='text-blue-500 mb-4'>Third Job Description</p>
				<p className='text-justify mr-6'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</p>
			</div>
		</div>
	);
}
