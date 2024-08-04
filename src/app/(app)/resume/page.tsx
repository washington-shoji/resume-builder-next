import React, { forwardRef, ForwardedRef } from 'react';

interface ArticleProps {
	// Define any props your component might need here
}

function Resume(props: ArticleProps, ref: ForwardedRef<HTMLDivElement>) {
	return (
		<div className='App-resume bg-gray-transparent p-4' ref={ref}>
			<div className='border-1 shadow-lg shadow-gray-700 rounded-lg'>
				<div className='flex rounded-t-lg bg-blue-400 sm:px-2 w-full'>
					<div className='w-2/3 sm:text-center pl-5 mt-10 text-start mb-4'>
						<p className='font-poppins font-bold text-white text-heading sm:text-4xl text-2xl text-start'>
							Developer's Name
						</p>
						<p className='sm:text-2xl text-heading text-start'>
							Software Engineer
						</p>
					</div>
				</div>

				<div className='p-5'>
					<div className='flex flex-col sm:flex-row sm:mt-10'>
						<div className='flex flex-col sm:w-1/3'>
							<div className='py-3 sm:order-none order-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									My Contact
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div>
									<div className='flex items-center my-1'>
										<a className='w-6 text-gray-700 hover:text-orange-600'>
											<svg
												className='h-4'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												fill='none'
												viewBox='0 0 24 24'
											>
												<path
													stroke='currentColor'
													strokeLinecap='round'
													strokeWidth='2'
													d='m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z'
												/>
											</svg>
										</a>
										<div className='ml-2 truncate'>developerge@email.com</div>
									</div>
									<div className='flex items-center my-1'>
										<a className='w-6 text-gray-700 hover:text-orange-600'>
											<svg
												className='h-4'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													fillRule='evenodd'
													d='M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z'
													clipRule='evenodd'
												/>
												<path d='M7.2 8.809H4V19.5h3.2V8.809Z' />
											</svg>
										</a>
										<div className='ml-2 truncate'>Developer LinkedIn</div>
									</div>
									<div className='flex items-center my-1'>
										<a
											className='w-6 text-gray-700 hover:text-orange-600'
											aria-label='Visit TrendyMinds YouTube'
											href=''
											target='_blank'
										>
											<svg
												className='h-4'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													fillRule='evenodd'
													d='M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z'
													clipRule='evenodd'
												/>
											</svg>
										</a>
										<div className='ml-2'>04000000</div>
									</div>
									<div className='flex items-center my-1'>
										<a
											className='w-6 text-gray-700 hover:text-orange-600'
											aria-label='Visit TrendyMinds Facebook'
											href=''
											target='_blank'
										>
											<svg
												className='h-4'
												aria-hidden='true'
												xmlns='http://www.w3.org/2000/svg'
												width='24'
												height='24'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													fillRule='evenodd'
													d='M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z'
													clipRule='evenodd'
												/>
											</svg>
										</a>
										<div>Developer's GitHub</div>
									</div>
								</div>
							</div>

							<div className='py-3 sm:order-none order-2'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Skills
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div>
									<div className='flex items-center my-1'>
										<svg
											className='w-6 text-gray-700 '
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z' />
										</svg>
										<div className='ml-2'>Tailwind CSS</div>
									</div>
									<div className='flex items-center my-1'>
										<svg
											className='w-6 text-gray-700'
											aria-hidden='true'
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z' />
											<path d='M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z' />
										</svg>
										<div className='ml-2'>React</div>
									</div>
									<div className='flex items-center my-1'>
										<svg
											className='w-6 text-gray-700 '
											viewBox='0 0 24 24'
											version='1.1'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g
												stroke='none'
												strokeWidth='1'
												fill='none'
												fillRule='evenodd'
											>
												<g
													id='Logo'
													transform='translate(0.000000, -144.000000)'
												>
													<g
														id='Android_2_fill'
														transform='translate(0.000000, 144.000000)'
													>
														<path
															d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z'
															id='MingCute'
															fillRule='nonzero'
														></path>
														<path
															d='M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z'
															fill='#09244B'
														></path>
													</g>
												</g>
											</g>
										</svg>
										<div className='ml-2'>Android</div>
									</div>
									<div className='flex items-center my-1'>
										<svg
											className='w-6 text-gray-700 '
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296'
												stroke='#1C274C'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
											<path
												d='M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297'
												stroke='#1C274C'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
											<path
												d='M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296'
												stroke='#1C274C'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
										<div className='ml-2'>Html, Css, JS</div>
									</div>
								</div>
							</div>

							<div className='py-3 sm:order-none order-1'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Education Background
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div className='flex flex-col space-y-1'>
									<div className='flex flex-col'>
										<p className='font-semibold text-xs text-gray-700'>2021</p>
										<p className='text-sm font-medium'>
											<span className='text-blue-400'>
												M.T.S (COMPUTER SCIENCE)
											</span>
											, UTS
										</p>
									</div>
									<div className='flex flex-col'>
										<p className='font-semibold text-xs text-gray-700'>2017</p>
										<p className='text-sm font-medium'>
											<span className='text-blue-400'>
												B.C.S (COMPUTER SCIENCE)
											</span>
											, UNSW
										</p>
									</div>
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
									To get a career opportunity which would help me to utilize my
									academic background to assist me to gain experience, employ my
									excellent skills, and enable me to make positive contribution.
								</p>
							</div>

							<div className='py-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Professional Experience
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div className='flex flex-col'>
									<div className='flex flex-col'>
										<p className='text-lg font-bold text-gray-700'>
											Netcracker Technology | Software Engineer
										</p>
										<p className='font-semibold text-sm text-gray-700'>
											2021 - Present
										</p>
										<p className='font-semibold text-sm text-gray-700 mt-2 mb-1'>
											Key Responsibilities
										</p>
										<ul className='text-sm list-disc pl-4 space-y-1'>
											<li>Working on customer facing product</li>
											<li>Deliverying highly efficient solutions</li>
											<li>Solving critical bugs</li>
										</ul>
									</div>

									<div className='flex flex-col mt-8'>
										<p className='text-lg font-bold text-gray-700'>
											TailwindFlex.com | Lead
										</p>
										<p className='font-semibold text-sm text-gray-700'>
											2020-2021
										</p>
										<p className='font-semibold text-sm text-gray-700 mt-2 mb-1'>
											Key Responsibilities
										</p>
										<ul className='text-sm list-disc pl-4 space-y-1'>
											<li>Developed usable components</li>
											<li>Solving complex problems</li>
											<li>Solving critical bugs</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='py-3'>
								<h2 className='text-lg font-poppins font-bold text-blue-400'>
									Projects
								</h2>
								<div className='border-2 w-20 border-blue-400 my-3'></div>

								<div className='flex flex-col'>
									<div className='flex flex-col'>
										<p className='text-lg font-semibold text-gray-700'>
											Used Books mobile app
										</p>
										<p className='font-normal text-sm text-gray-700 mb-1 pl-2'>
											A platform to sell as well as to buy used books only for
											PCCoE College due to this reuse of books will be there
											beneficial for environment also indirectly helps increase
											communication between juniors and seniors.
										</p>
									</div>
									<div className='flex flex-col'>
										<p className='text-lg font-semibold text-gray-700'>
											Parking Automation System
										</p>
										<p className='font-normal text-sm text-gray-700 mb-1 pl-2'>
											it’s a web application which helps you to book your slot
											for your car just like booking a movie ticket from home.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default forwardRef<HTMLDivElement, ArticleProps>(Resume);
