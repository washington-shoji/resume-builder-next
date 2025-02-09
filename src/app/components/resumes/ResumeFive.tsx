import React, { ForwardedRef, forwardRef } from "react";
import { ResumeOneFormInput } from "@/app/types/resume-data.types";

interface Props {
  formData: ResumeOneFormInput;
}

function ResumeFive(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const { formData } = props;
  return (
    <div className="relative min-w-[800px] mx-auto" ref={ref}>
      <div className="relative w-full h-full bg-white shadow-[0_0_12px_-4px_rgba(0,0,0,1)] z-20 overflow-hidden">
        <div className="relative w-full h-[310px] pb-[5px] mb-[5px] overflow-hidden">
          <div className="absolute top-[-16px] w-full h-[68px] bg-[#ff4359] transform rotate-[1deg] z-10 overflow-hidden"></div>
          <div className="absolute top-[-288px] right-[-98px] w-[497px] h-[373px] bg-[#292929] transform rotate-[22deg] shadow-[0_1px_12px_-4px_#292929] z-30 overflow-hidden"></div>

          <div className="absolute top-[55px] w-full h-[254px] pt-[13px] z-20 overflow-hidden">
            <div className="w-[699px] mx-auto flex">
              <div className="w-[220px] h-[220px] mr-[44px] rounded-full bg-cover bg-center overflow-hidden bg-[url('https://i.imgur.com/HqqH1eZ.jpg')]"></div>
              <div className="h-[201px] pt-[66px]">
                <h3 className="relative inline-block pt-[12px] pr-[40px] pb-[9px] pl-[46px] rounded-full bg-[#292929] uppercase tracking-wide text-center font-semibold text-[25px] text-[#efefef]">
                  mike maraandy
                  <span className="absolute bottom-[-16px] right-0 w-[50px] h-[17px] rounded-full bg-[#292929]"></span>
                  <span className="absolute bottom-[-16px] right-[-27px] w-[23px] h-[17px] rounded-full bg-[#292929]"></span>
                </h3>
                <p className="mt-[7px] ml-[3px] capitalize text-center font-normal text-[19px] text-[#292929]">
                  web designer
                </p>
              </div>
            </div>

            <div className="absolute top-[54px] left-[52px] w-[54px] h-[17px] rounded-full bg-[#ff4359]"></div>
            <div className="absolute top-[70px] left-[29px] w-[54px] h-[17px] rounded-full bg-[#ff4359]"></div>
            <div className="absolute top-[140px] left-[269px] w-[51px] h-[17px] rounded-full bg-[#ff4359]"></div>
            <div className="absolute top-[140px] left-[237px] w-[26px] h-[17px] rounded-full bg-[#ff4359]"></div>
            <div className="absolute top-[181px] left-[222px] w-[84px] h-[21px] rounded-full bg-[#ff4359]"></div>
          </div>
        </div>

        <div className="w-full h-auto overflow-hidden">
          <div className="w-[699px] mx-auto flex">
            <aside className="w-[242px] h-[521.7px] mr-[20px] border-r border-[#d8d8d8] overflow-hidden">
              <div className="w-full pr-[10px] mb-[10px] overflow-hidden">
                <h3 className="pb-[8px] m-0 text-center uppercase font-semibold text-[20px] text-[#292929]">
                  about me
                </h3>
                <ul className="w-full p-0 m-0 list-none h-[124px] overflow-hidden">
                  <li className="w-full mb-[10px] overflow-hidden">
                    <p className="m-0 text-[12px] leading-[19px] text-[#777]">
                      This text is a text that is of no use and is used in the
                      filling of blanks. Do not tire yourself in the readers in
                      this text is useless, did you understand or not? You seem
                      to insist on reading, so do what you want.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="w-full pr-[10px] mb-0 overflow-hidden">
                <h3 className="pb-[8px] m-0 text-center uppercase font-semibold text-[20px] text-[#292929]">
                  education
                </h3>
                <ul className="w-full p-0 m-0 list-none h-[326.7px] pr-[8px] overflow-hidden">
                  <li className="w-full mb-[10px] overflow-hidden">
                    <h3 className="p-0 m-0 text-left text-[15px] text-[#ff4359]">
                      2016
                    </h3>
                    <p className="p-0 m-0 text-left text-[13px] text-[#777]">
                      starting
                    </p>
                    <p className="p-0 m-0 text-left text-[12px] leading-[19px] text-[#777]">
                      This text is a text that is of no use and is used in the
                      filling of blanks...
                    </p>
                  </li>
                </ul>
              </div>
            </aside>

            <article className="w-[435px] h-[521.7px] overflow-hidden">
              <div className="w-full mb-[18px] overflow-hidden">
                <h3 className="pb-[10px] m-0 text-center uppercase font-semibold text-[20px] text-[#292929]">
                  skills
                </h3>
                <div className="w-full h-[74px] pr-[10px] overflow-hidden">
                  <div className="w-full mb-[15px] overflow-hidden flex">
                    <ul className="flex space-x-[10px]">
                      <li className="w-[135px] flex items-center">
                        <div className="w-[18px]">
                          <i className="fas fa-star text-[14px] text-[#ff4359]"></i>
                        </div>
                        <div className="w-[108px] pt-[3px]">
                          <p className="m-0 uppercase text-[13px] text-[#777]">
                            html5
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full mb-0 overflow-hidden">
                <h3 className="pb-[10px] m-0 text-center uppercase font-semibold text-[20px] text-[#292929]">
                  work experience
                </h3>
                <ul className="p-0 m-0 list-none h-[367px] pr-[10px] overflow-hidden">
                  <li className="w-full mb-[10px] overflow-hidden">
                    <h3 className="p-0 m-0 text-left text-[15px] text-[#ff4359]">
                      2016
                    </h3>
                    <p className="p-0 m-0 text-left text-[13px] text-[#777]">
                      starting
                    </p>
                    <p className="p-0 m-0 text-left text-[12px] leading-[19px] text-[#777]">
                      This text is a text that is of no use and is used in the
                      filling of blanks...
                    </p>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <div className="absolute bottom-[-106px] left-[55px] w-full h-[212px] bg-[#ff4359] transform rotate-[-16deg] z-10 overflow-hidden"></div>

        <div className="relative w-full h-[207px] overflow-hidden z-20">
          <div className="absolute bottom-[-98px] left-[-43px] w-[86%] h-[222px] bg-[#292929] transform rotate-[7deg] shadow-[0_0_12px_-4px_rgba(0,0,0,1)] z-10"></div>
          <div className="absolute bottom-[-193px] right-[-133px] w-[345px] h-[205px] bg-[#292929] transform rotate-[28deg] z-20"></div>
          <div className="absolute top-[91px] left-0 w-[639px] h-[115px] pt-[8px] pl-[49px] z-30">
            <h3 className="pb-[13px] m-0 uppercase font-semibold text-[20px] text-[#efefef]">
              contact me
            </h3>
            <ul className="p-0 m-0 list-none flex flex-wrap">
              <li className="w-[182px] mb-[14px] flex items-center">
                <div className="w-[20px]">
                  <i className="fas fa-map-marker-alt text-[16px] text-[#ff4359]"></i>
                </div>
                <div className="w-[156px]">
                  <p className="w-[149px] m-0 text-[13px] text-[#efefef]">
                    Your Location
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default forwardRef<HTMLDivElement, Props>(ResumeFive);
