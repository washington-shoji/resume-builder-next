import Image from "next/image";

export default function ResumeFour() {
  return (
    <section className="font-sans text-base leading-6">
      <div className="relative text-center h-full">
        <section className="bg-white w-[40%] float-left text-[#9099a0] md:w-full md:float-none">
          <div className="min-h-[600px]">
            <div className="flex flex-wrap">
              <div className="w-[40%] md:w-full">
                <div className="relative w-[220px] h-[220px] md:w-[200px] md:h-[200px] mx-auto mt-10">
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg"
                      alt=""
                      className="rounded-full w-[130px] h-[130px] md:w-[120px] md:h-[120px]"
                      width={130}
                      height={130}
                    ></Image>
                  </span>
                </div>
              </div>
              <div className="w-[60%] md:w-full">
                <h1 className="text-left font-['Varela Round'] text-4xl uppercase text-[#4a4e51] pt-10 pl-5 md:pt-5 md:text-3xl">
                  John <br /> Anderson
                </h1>
              </div>
            </div>

            <div className="mt-24 font-light md:mt-16">
              <div className="flex justify-start pl-5">
                <ul className="text-left font-semibold text-[#4a4e51] w-[40%]">
                  <li className="mb-2">Call</li>
                  <li className="mb-2">Mail</li>
                  <li className="mb-2">Web</li>
                  <li className="mb-2">Home</li>
                </ul>
                <ul className="text-left font-light w-[60%]">
                  <li className="mb-2">+34 123 456 789</li>
                  <li className="mb-2">j.anderson@gmail.com</li>
                  <li className="mb-2">
                    <a href="#" className="text-[#66cc99]">
                      janderson.com
                    </a>
                  </li>
                  <li className="mb-2">Los Angeles, CA</li>
                </ul>
              </div>
            </div>

            <div className="text-left font-light mt-24 mb-24 px-5 md:mt-16 md:mb-16">
              <p>
                <span className="font-normal text-[#4a4e51]">Lorem</span> ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus euismod
                congue nisi, nec consequat quam. In consectetur faucibus turpis
                eget laoreet. Sed nec imperdiet purus.
              </p>
            </div>

            <div className="flex justify-start pl-5 font-light">
              <ul className="text-left font-semibold text-[#4a4e51] w-[40%]">
                <li className="mb-2">Twitter</li>
                <li className="mb-2">Dribbble</li>
                <li className="mb-2">Codepen</li>
              </ul>
              <ul className="text-left font-light w-[60%]">
                <li className="mb-2">
                  <a href="#" className="text-[#66cc99]">
                    @janderson
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-[#66cc99]">
                    janderson
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-[#66cc99]">
                    janderson
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#3d3e42] w-[60%] float-left text-[#9099a0] font-light min-h-screen md:w-full md:float-none">
          <div className="min-h-[600px] py-16 px-16 md:py-20 md:px-10">
            <h3 className="text-left uppercase text-xl text-[#66cc99] font-normal mb-5">
              Experience
            </h3>

            <div className="mb-16">
              <div className="flex flex-wrap mb-16 md:mb-10">
                <div className="w-[30%] text-left pr-5 mb-6 md:w-full md:mb-4">
                  <div className="text-white mb-3">Company name</div>
                  <div>Nov 2012 - Present</div>
                </div>
                <div className="w-[70%] text-left pr-5 md:w-full">
                  <div className="text-white mb-3">Front End Developer</div>
                  <div className="text-[#9099a0]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a elit facilisis, adipiscing leo in, dignissim
                      magna.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mb-16 md:mb-10">
                <div className="w-[30%] text-left pr-5 mb-6 md:w-full md:mb-4">
                  <div className="text-white mb-3">Company name</div>
                  <div>Nov 2010 - Present</div>
                </div>
                <div className="w-[70%] text-left pr-5 md:w-full">
                  <div className="text-white mb-3">
                    Freelance, Web Designer / Web Developer
                  </div>
                  <div className="text-[#9099a0]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a elit facilisis, adipiscing leo in, dignissim
                      magna.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mb-16 md:mb-10">
                <div className="w-[30%] text-left pr-5 mb-6 md:w-full md:mb-4">
                  <div className="text-white mb-3">Company name</div>
                  <div>Nov 2009 - Nov 2010</div>
                </div>
                <div className="w-[70%] text-left pr-5 md:w-full">
                  <div className="text-white mb-3">Web Designer</div>
                  <div className="text-[#9099a0]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce a elit facilisis, adipiscing leo in, dignissim
                      magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mb-10">
              <div className="w-full text-left mb-6">
                <h3 className="uppercase text-xl text-[#66cc99] font-normal mb-5">
                  Skills
                </h3>
                <ul>
                  <li className="relative mb-4">
                    <span>HTML / HTML5</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[80%]"></div>
                    </div>
                  </li>
                  <li className="relative mb-4">
                    <span>CSS / CSS3 / SASS / LESS</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[90%]"></div>
                    </div>
                  </li>
                  <li className="relative mb-4">
                    <span>Javascript</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[50%]"></div>
                    </div>
                  </li>
                  <li className="relative mb-4">
                    <span>Jquery</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[60%]"></div>
                    </div>
                  </li>
                  <li className="relative mb-4">
                    <span>Wordpress</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[70%]"></div>
                    </div>
                  </li>
                  <li className="relative mb-4">
                    <span>Photoshop</span>
                    <div className="w-full h-1 bg-[#4a4e51] mt-1 relative">
                      <div className="absolute top-0 left-0 h-1 bg-[#66cc99] w-[70%]"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full text-left">
                <h3 className="uppercase text-xl text-[#66cc99] font-normal mb-5">
                  Hobbies
                </h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a elit facilisis, adipiscing leo in, dignissim magna.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="clear-both"></div>
      </div>
    </section>
  );
}
