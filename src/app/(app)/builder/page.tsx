"use client";

import React, { useEffect, useRef, useState } from "react";
import ResumeOne from "@/app/components/resome-one/ResumeOne";
import AccordionWrapper from "@/app/components/AccordionWrapper";
import { ResumeOneFormInput } from "@/app/types/resume-data.types";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import ResumePersonalDetails from "@/app/components/ResumePersonalDetails";
import ResumeProfessionalDetails from "@/app/components/ResumeProfessionalDetails";
import ResumeEducationalDetails from "@/app/components/ResumeEducationalDetails";
import { FaEye, FaSave, FaTrashAlt } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

export default function Builder() {
  let storeData: ResumeOneFormInput = {};
  const componentRef = useRef<HTMLDivElement>(null);
  const [savedFormData, setSavedFormData] = useState<
    ResumeOneFormInput | undefined
  >(undefined);

  const methods = useForm<ResumeOneFormInput>({
    values: savedFormData,
    defaultValues: {
      personalData: {
        heading: {
          fullName: "Add Full Name",
          roleTitle: "Proffesional Role",
          summary:
            "Highly motivated software developer with strong experience in backend systems and web application development. Skilled in designing scalable APIs, optimizing performance, and delivering reliable solutions. Passionate about problem-solving, mentoring junior developers, and contributing to open-source projects to promote continuous learning and community collaboration.",
        },
        contact: [{ iconLabel: "email", contactInfo: "youremail@email" }],
      },
      professionalData: [
        {
          company: "Work Place or Company",
          timePeriod: "2020 - Present",
          responsibilities:
            "Skilled in designing scalable APIs, optimizing performance, and delivering reliable solutions. Passionate about problem-solving, mentoring junior developers, and contributing to open-source projects to promote continuous learning and community collaboration.",
        },
      ],
      skillData: [{ iconLabel: "node", label: "User Skill" }],
      educationalData: [
        {
          year: "2015",
          educationTitle: "Education Title",
          institution: "Educational Institution",
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

  function handleDeleteData(): void {
    if (
      window.confirm(
        "Are you sure you and to delete the Resume Data? It's irreversible!"
      )
    ) {
      localStorage.removeItem("form-data");
      window.location.reload();
    }
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    storeData = JSON.parse(localStorage.getItem("form-data") as string);
    console.warn("form-resume-one-data", storeData);
    if (storeData) {
      setSavedFormData(storeData);
    }
  }, []);

  return (
    <main className="flex justify-center min-h-screen bg-sky-50 dark:bg-gray-900">
      <div className="grid sm:grid-cols-2 gap-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-4 mt-16 xl:mx-32 p-8 shadow-md rounded-lg bg-white">
              <div>
                <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Resume builder details
                </h1>
              </div>

              <AccordionWrapper title="Personal Details">
                <ResumePersonalDetails></ResumePersonalDetails>
              </AccordionWrapper>

              <AccordionWrapper title="Professional Details">
                <ResumeProfessionalDetails></ResumeProfessionalDetails>
              </AccordionWrapper>

              <AccordionWrapper title="Education Details">
                <ResumeEducationalDetails></ResumeEducationalDetails>
              </AccordionWrapper>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 mt-4">
                  <button
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save resume data
                    <FaSave className=" text-xl ml-2" />
                  </button>

                  <button
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                    type="button"
                    onClick={handleDeleteData}
                  >
                    Delete resume data
                    <FaTrashAlt className=" text-xl ml-2" />
                  </button>
                </div>

                <button
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  type="button"
                  onClick={handlePrint}
                >
                  Preview resume
                  <FaEye className=" text-xl ml-2" />
                </button>
              </div>
            </div>
          </form>
        </FormProvider>

        <div className=" flex flex-col bg-white m-16 rounded-md shadow-md p-4">
          <ResumeOne formData={formData} ref={componentRef} />
        </div>
      </div>
    </main>
  );
}
