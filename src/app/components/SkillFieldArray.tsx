import React from "react";
import { ResumeOneFormInput } from "../types/resume-data.types";
import { useFieldArray, useFormContext } from "react-hook-form";
import { skillIcons } from "../data/icons";

export default function SkillFieldArray() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ResumeOneFormInput>();

  const { fields, append, remove } = useFieldArray({
    name: "skillData",
    control,
  });

  return (
    <div className="sm:col-span-2">
      {fields?.map((field, index) => {
        return (
          <React.Fragment key={field.id}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Skill Icons
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  aria-invalid={
                    errors?.skillData?.[index]?.iconLabel ? "true" : "false"
                  }
                  {...register(`skillData.${index}.iconLabel` as const, {
                    required: true,
                  })}
                >
                  {skillIcons.map((item) => {
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
                {errors?.skillData?.[index]?.iconLabel && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span className="font-medium">Skill Icon!</span> is
                    required!.
                  </p>
                )}
              </div>

              <div className=" w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Skill label
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Time period"
                  aria-invalid={
                    errors?.skillData?.[index]?.label ? "true" : "false"
                  }
                  {...register(`skillData.${index}.label` as const, {
                    required: true,
                  })}
                />
                {errors?.skillData?.[index]?.label && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                    <span className="font-medium">Skill Label</span> is
                    required!
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
                  Remove
                </button>
              </div>
            </div>
          </React.Fragment>
        );
      })}

      <div className="sm:col-span-2 my-8">
        {fields.length <= 3 && (
          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800"
            onClick={() =>
              append({
                iconLabel: "",
                label: "",
              })
            }
          >
            Add skill
          </button>
        )}
      </div>
    </div>
  );
}
