"use client";

import { useState } from "react";

interface Probs {
  title: string;
  children: React.ReactNode;
}

export default function AccordionWrapper(props: Probs) {
  const [open, setOpen] = useState<boolean>(false);

  function toggleOpen(): void {
    setOpen(!open);
  }

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={toggleOpen}
        >
          <span>{props.title}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={open ? "" : "hidden"}>
        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          {props.children}
        </div>
      </div>
    </div>
  );
}
