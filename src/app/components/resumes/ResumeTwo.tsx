import React, { ForwardedRef, forwardRef } from "react";
import { ResumeOneFormInput } from "@/app/types/resume-data.types";
import { icons } from "@/app/data/icons";
import { splitStringByPipe } from "@/app/utils/utils";

interface Props {
  formData: ResumeOneFormInput;
}

function ResumeTwo(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const { formData } = props;
  return (
    <div className="bg-[#1B1B25] text-white" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-10/12 md:mx-auto">
            <div className="text-center mt-[100px] mb-[10px]">
              <h1 className="text-4xl font-bold">
                {formData.personalData?.heading?.fullName ?? "Full Name"}
              </h1>
              <h3 className="text-2xl mt-2">
                {formData.personalData?.heading?.roleTitle ?? "Your Role"}
              </h3>
              <div className="flex justify-center gap-2 text-[#DB4D57] mt-2">
                {formData.personalData?.contact?.map((contactItem, index) => {
                  return (
                    <div key={index} className="flex items-center gap-1">
                      {icons.map((icon, index) => {
                        if (icon.iconLabel === contactItem.iconLabel) {
                          return <icon.Icon key={index}></icon.Icon>;
                        }
                      })}
                      <p>{contactItem.contactInfo}</p>
                    </div>
                  );
                })}
              </div>
              <hr className="w-[75%] mx-auto my-4 border-white" />
              <ul className="flex justify-center space-x-4">
                <li>
                  <i className="devicon-laravel-plain colored text-4xl"></i>
                </li>
                <li>
                  <i className="devicon-javascript-plain colored text-4xl"></i>
                </li>
                <li>
                  <i className="devicon-html5-plain colored text-4xl"></i>
                </li>
                <li>
                  <i className="devicon-angularjs-plain colored text-4xl"></i>
                </li>
                <li>
                  <i className="devicon-linux-plain text-4xl"></i>
                </li>
              </ul>
            </div>

            <div className="p-5">
              <h2 className="text-center text-3xl font-semibold mb-6">
                Summary
              </h2>
              <p className="text-[1.6rem] tracking-[0.2rem] leading-relaxed">
                {formData?.personalData?.heading?.summary ??
                  "Your Professional Summary"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div>
                  {formData?.skillData?.map((skillItem, index) => {
                    return (
                      <div key={index} className="flex items-center my-1">
                        {icons.map((icon, index) => {
                          if (icon.iconLabel === skillItem.iconLabel) {
                            return (
                              <icon.Icon
                                className=" text-white"
                                size={25}
                                key={index}
                              ></icon.Icon>
                            );
                          }
                        })}
                        <div className="ml-2">
                          {skillItem.label ?? "Your Skill"}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p>Development</p>
                  <p>Design</p>
                  <p>Linux Admin</p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-center text-3xl font-semibold mb-6">
                Work Experience
              </h2>

              {formData?.professionalData?.map((professionalItem, index) => {
                return (
                  <div className="mt-[50px]">
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-9/12">
                        <h3 className="text-2xl font-bold">
                          {professionalItem?.company ?? "Company Name"}
                        </h3>
                      </div>
                      <div className="w-full md:w-3/12 text-left md:text-right mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold">
                          {professionalItem?.timePeriod ?? "Period of Work"}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-[30px] mb-[50px]">
                      <p className="text-[1.6rem] tracking-[0.2rem] leading-relaxed">
                        {splitStringByPipe(
                          professionalItem?.responsibilities ??
                            "Responsibilities"
                        ).map((responsibility, index) => {
                          return <li key={index}>{responsibility}</li>;
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* <div className="mt-[50px]">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-9/12">
                    <h3 className="text-2xl font-bold">Some company</h3>
                    <h4 className="text-xl mt-1">Associate Project Manager</h4>
                    <h5 className="text-lg mt-1">Some project</h5>
                  </div>
                  <div className="w-full md:w-3/12 text-left md:text-right mt-4 md:mt-0">
                    <h3 className="text-2xl font-semibold">
                      Jan 2018 - Jun 2022
                    </h3>
                  </div>
                </div>
                <div className="mt-[30px] mb-[50px]">
                  <p className="text-[1.6rem] tracking-[0.2rem] leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Lead - UI design and development.</li>
                    <li>
                      WordPress expert - Configuration, maintenance, and custom
                      development.
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div className="p-5">
              <h2 className="text-center text-3xl font-semibold mb-6">
                Education
              </h2>

              {formData?.educationalData?.map((educationalItem, index) => {
                return (
                  <div key={index}>
                    <div className="flex flex-col">
                      <p className="font-bold text-white">
                        {educationalItem?.year ?? "Graduation Year"} {" - "}{" "}
                        <span className="text-white">
                          {educationalItem?.educationTitle ??
                            "Your Education Title"}
                        </span>
                      </p>
                      <p className=" font-medium">
                        {educationalItem?.institution ?? "Your Institution"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef<HTMLDivElement, Props>(ResumeTwo);
