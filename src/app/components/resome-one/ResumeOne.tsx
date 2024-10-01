import { icons } from "@/app/data/icons";
import { ResumeOneFormInput } from "@/app/types/resume-data.types";
import { splitStringByPipe } from "@/app/utils/utils";
import React, { ForwardedRef, forwardRef } from "react";

interface Props {
  formData: ResumeOneFormInput;
}

function ResumeOne(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const { formData } = props;

  return (
    <div className="relative block mx-auto bg-white" ref={ref}>
      <div className="h-[220px] bg-blue-500 text-white relative">
        <div className="absolute left-[calc(350px+5%)] right-0 bottom-0 h-[120px] text-center font-['Raleway'] text-[58px] tracking-[8px] font-thin leading-[60px]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[94%]">
            {formData.personalData?.heading?.fullName ?? "Full Name"}
          </div>
        </div>
      </div>

      <div className="absolute top-[60px] left-[5%] bottom-0 w-[350px] bg-blue-100 pt-[190px] px-8 pb-12">
        <p className="uppercase text-base tracking-[4px] font-semibold leading-7 mx-auto mb-2 pb-1 border-b border-blue-500">
          Personal Details
        </p>

        {formData.personalData?.contact?.map((contactItem, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              {icons.map((icon, index) => {
                if (icon.iconLabel === contactItem.iconLabel) {
                  return <icon.Icon key={index}></icon.Icon>;
                }
              })}
              <p>{contactItem.contactInfo}</p>
            </div>
          );
        })}

        <p className="uppercase text-base tracking-[4px] font-semibold leading-7 mt-16 mx-auto mb-2 pb-1 border-b border-blue-500">
          Expertise
        </p>

        {formData?.skillData?.map((skillItem, index) => {
          return (
            <div key={index} className="flex items-center my-1">
              {icons.map((icon, index) => {
                if (icon.iconLabel === skillItem.iconLabel) {
                  return (
                    <icon.Icon
                      className=" text-gray-700"
                      size={25}
                      key={index}
                    ></icon.Icon>
                  );
                }
              })}
              <div className="ml-2">{skillItem.label ?? "Your Skill"}</div>
            </div>
          );
        })}

        <p className="uppercase text-base tracking-[4px] font-semibold leading-7 mt-16 mx-auto mb-2 pb-1 border-b border-blue-500">
          Education
        </p>

        {formData?.educationalData?.map((educationalItem, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col">
                <p className="font-semibold text-gray-700">
                  {educationalItem?.year ?? "Graduation Year"}
                </p>
                <p className="text-sm font-medium">
                  <span className="text-blue-500">
                    {educationalItem?.educationTitle ?? "Your Education Title"}
                  </span>
                  {" - "} {educationalItem?.institution ?? "Your Institution"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative ml-[calc(380px+5%)] w-[calc(95%-350px)] pt-6 pr-10 pb-12">
        <h2 className="w-full text-center text-3xl tracking-[5px] font-semibold leading-10 text-black">
          {formData.personalData?.heading?.roleTitle ?? "Your Role"}
        </h2>
        <div className="w-[240px] h-[2px] bg-blue-600 my-6 mx-auto"></div>

        <div className="bg-blue-300 text-center text-base tracking-[6px] font-semibold leading-7 uppercase mb-6">
          Profile
        </div>
        <p className="text-justify mb-12 mr-6">
          {formData?.personalData?.heading?.summary ??
            "Your Professional Summary"}
        </p>

        <div className="bg-blue-300 text-center text-base tracking-[6px] font-semibold leading-7 uppercase mb-6">
          Professional Experience
        </div>

        {formData?.professionalData?.map((professionalItem, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-gray-700">
                  {professionalItem?.company ?? "Company Name"}
                </h3>
                <p className="font-semibold text-sm text-gray-700">
                  {professionalItem?.timePeriod ?? "Period of Work"}
                </p>
                <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                  Key Responsibilities
                </p>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  {splitStringByPipe(
                    professionalItem?.responsibilities ?? "Responsibilities"
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
  );
}

export default forwardRef<HTMLDivElement, Props>(ResumeOne);
