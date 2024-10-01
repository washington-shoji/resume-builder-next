"use client";

import React, { useEffect, useState } from "react";
import ResumeOne from "@/app/components/resome-one/ResumeOne";
import AccordionWrapper from "@/app/components/AccordionWrapper";
import { ResumeOneFormInput } from "@/app/types/resume-data.types";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import ResumePersonalDetails from "@/app/components/ResumePersonalDetails";
import ResumeProfessionalDetails from "@/app/components/ResumeProfessionalDetails";
import ResumeEducationalDetails from "@/app/components/ResumeEducationalDetails";

export default function Builder() {
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
          fullName: "User Name",
          roleTitle: "User Role",
          summary: "User short summary",
        },
        contact: [{ iconLabel: "email", contactInfo: "user@email" }],
      },
      professionalData: [
        {
          company: "User Work Place",
          timePeriod: "2000 - Present",
          responsibilities: "User Responsibilities",
        },
      ],
      skillData: [{ iconLabel: "node", label: "User Skill" }],
      educationalData: [
        {
          year: "2000",
          educationTitle: "User Education",
          institution: "User Education Institution",
        },
      ],
    },
    mode: "onBlur",
  });
  const { handleSubmit, control } = methods;
  const formData = useWatch({
    control,
  });

  function onSubmit(formData: ResumeOneFormInput): void {
    localStorage.removeItem("form-resume-one-data");
    localStorage.setItem("form-resume-one-data", JSON.stringify(formData));
  }

  useEffect(() => {
    storeData = JSON.parse(localStorage.getItem("form-data") as string);
    console.warn("form-resume-one-data", storeData);
    if (storeData) {
      setSavedFormData(storeData);
    }
  }, []);

  return (
    <main className="flex justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="grid sm:grid-cols-2 gap-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-4 mt-16 xl:mx-32">
              <AccordionWrapper title="Personal Details">
                <ResumePersonalDetails></ResumePersonalDetails>
              </AccordionWrapper>

              <AccordionWrapper title="Professional Details">
                <ResumeProfessionalDetails></ResumeProfessionalDetails>
              </AccordionWrapper>

              <AccordionWrapper title="Education Details">
                <ResumeEducationalDetails></ResumeEducationalDetails>
              </AccordionWrapper>
            </div>
          </form>
        </FormProvider>

        <div className=" flex flex-col">
          <div>
            <ResumeOne formData={formData} />
          </div>
        </div>
      </div>
    </main>
  );
}
