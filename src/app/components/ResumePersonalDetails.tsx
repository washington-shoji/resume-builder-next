import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ResumeOneFormInput } from "../types/resume-data.types";
import { contactInfoLabels } from "../data/icons";

export default function ResumePersonalDetails() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeOneFormInput>();

  const { fields, append, remove } = useFieldArray({
    name: "personalData.contact",
    control,
  });

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Personal Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Full name"
              aria-invalid={
                errors?.personalData?.heading?.fullName ? "true" : "false"
              }
              {...register("personalData.heading.fullName", { required: true })}
            />
            {errors?.personalData?.heading?.fullName && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                <span className="font-medium">Full Name</span> is required!.
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Role title
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Role title"
              aria-invalid={
                errors?.personalData?.heading?.roleTitle ? "true" : "false"
              }
              {...register("personalData.heading.roleTitle", {
                required: true,
              })}
            />
            {errors?.personalData?.heading?.roleTitle && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                <span className="font-medium">Role Title</span> is required!.
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            {fields.map((field, index) => {
              return (
                <React.Fragment key={field.id}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Contact Icon
                      </label>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        aria-invalid={
                          errors?.personalData?.contact?.[index]?.iconLabel
                            ? "true"
                            : "false"
                        }
                        {...register(
                          `personalData.contact.${index}.iconLabel` as const,
                          { required: true }
                        )}
                      >
                        {contactInfoLabels.map((item) => {
                          return (
                            <option
                              key={item.iconLabel}
                              defaultValue={item.iconLabel}
                              value={item.iconLabel}
                            >
                              {item.iconLabel}
                            </option>
                          );
                        })}
                      </select>
                      {errors?.personalData?.contact?.[index]?.iconLabel && (
                        <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                          <span className="font-medium">Contact Icon!</span> is
                          required!.
                        </p>
                      )}
                    </div>

                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your contact info
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Contact or link"
                        aria-invalid={
                          errors?.personalData?.contact?.[index]?.contactInfo
                            ? "true"
                            : "false"
                        }
                        {...register(
                          `personalData.contact.${index}.contactInfo` as const,
                          {
                            required: true,
                          }
                        )}
                      />
                      {errors?.personalData?.contact?.[index]?.contactInfo && (
                        <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                          <span className="font-medium">Contact Info!</span> is
                          required!.
                        </p>
                      )}
                    </div>

                    <div className={fields.length === 1 ? "hidden" : "w-full"}>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Remove from form
                      </label>
                      <button
                        type="button"
                        className="w-full p-3  text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
                        disabled={fields.length === 1}
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className="sm:col-span-2">
            {fields.length <= 3 && (
              <button
                type="button"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
                onClick={() =>
                  append({
                    iconLabel: "",
                    contactInfo: "",
                  })
                }
              >
                Add a new contact
              </button>
            )}
          </div>

          <div className="sm:col-span-2 mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profile summary
            </label>
            <textarea
              rows={8}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
              aria-invalid={
                errors?.personalData?.heading?.summary ? "true" : "false"
              }
              {...register("personalData.heading.summary", { required: true })}
            ></textarea>
            {errors?.personalData?.heading?.summary && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                <span className="font-medium">Professional Summary</span> is
                required!.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
