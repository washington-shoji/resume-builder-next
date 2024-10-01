import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ResumeOneFormInput } from "../types/resume-data.types";

export default function ResumeEducationalDetails() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeOneFormInput>();

  const { fields, append, remove } = useFieldArray({
    name: "educationalData",
    control,
  });

  return (
    <section className=" bg-white dark:bg-gray-900">
      <div className="mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Educational Details
        </h2>
        <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6">
          {fields.map((field, index) => {
            return (
              <React.Fragment key={field.id}>
                <div className="sm:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Education Title
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Education Title"
                        aria-invalid={
                          errors?.educationalData?.[index]?.educationTitle
                            ? "true"
                            : "false"
                        }
                        {...register(
                          `educationalData.${index}.educationTitle` as const,
                          {
                            required: true,
                          }
                        )}
                      />
                      {errors?.educationalData?.[index]?.educationTitle && (
                        <p
                          id="standard_error_help"
                          className="mt-2 text-xs text-red-600 dark:text-red-400"
                        >
                          <span className="font-medium">Educational Title</span>{" "}
                          is required!
                        </p>
                      )}
                    </div>

                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Graduation Year
                      </label>
                      <input
                        type="text"
                        id="year"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Graduation Year"
                        aria-invalid={
                          errors?.educationalData?.[index]?.year
                            ? "true"
                            : "false"
                        }
                        {...register(`educationalData.${index}.year` as const, {
                          required: true,
                        })}
                      />
                      {errors?.educationalData?.[index]?.year && (
                        <p
                          id="standard_error_help"
                          className="mt-2 text-xs text-red-600 dark:text-red-400"
                        >
                          <span className="font-medium">Graduation Year</span>{" "}
                          is required!
                        </p>
                      )}
                    </div>

                    <div className={fields.length === 1 ? "hidden" : "w-full"}>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Remove from form
                      </label>
                      <button
                        type="button"
                        className="w-full p-3  text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800 "
                        disabled={fields.length === 1}
                        onClick={() => remove(index)}
                      >
                        Remove education below
                      </button>
                    </div>
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Institution
                    </label>
                    <input
                      type="text"
                      id="institution"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Institution"
                      aria-invalid={
                        errors?.educationalData?.[index]?.institution
                          ? "true"
                          : "false"
                      }
                      {...register(
                        `educationalData.${index}.institution` as const,
                        {
                          required: true,
                        }
                      )}
                    />
                    {errors?.educationalData?.[index]?.institution && (
                      <p
                        id="standard_error_help"
                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                      >
                        <span className="font-medium">
                          Educational Institution
                        </span>{" "}
                        is required!
                      </p>
                    )}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div>
          {fields.length <= 3 && (
            <button
              type="button"
              className="w-full inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
              onClick={() =>
                append({
                  year: "",
                  educationTitle: "",
                  institution: "",
                })
              }
            >
              Add education
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
