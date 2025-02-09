import { ResumeOneFormInput } from "@/app/types/resume-data.types";
import React, { ForwardedRef, forwardRef } from "react";

interface Props {
  formData: ResumeOneFormInput;
}

function ResumeThree(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const { formData } = props;
  return (
    <section className="antialiased text-[#333332] font-serif text-[18px] font-normal leading-relaxed">
      <div className="relative h-[290px] flex items-center justify-center">
        <div className="w-[85%] text-center">
          <h1 className="font-sans text-2xl text-[rgba(0,0,0,0.75)]">
            <strong className="font-bold text-[rgba(0,0,0,0.75)]">Abbie</strong>{" "}
            Bradley
          </h1>
          <span className="block text-center text-[13.5px] leading-snug text-[rgba(0,0,0,0.75)] mt-2">
            Developer
          </span>
          <span className="block text-center text-[13.5px] leading-snug text-[rgba(0,0,0,0.75)]">
            abbie.bradley@gmail.com
          </span>
          <h2 className="text-center text-xl mt-4">
            Development and design of web applications for startups and large
            companies
          </h2>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-6">Skills</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-lg font-semibold text-gray-700 mr-4">
                + 5 years
              </span>
              <div>
                <h3 className="text-xl font-semibold">
                  Object programming &amp; frameworks
                </h3>
                <span className="text-gray-600">
                  PHP, Symfony, Laravel, Silex, …
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-lg font-semibold text-gray-700 mr-4">
                + 3 years
              </span>
              <div>
                <h3 className="text-xl font-semibold">Design integration</h3>
                <span className="text-gray-600">
                  Style and tools, JS Frameworks
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-lg font-semibold text-gray-700 mr-4">
                + 6 years
              </span>
              <div>
                <h3 className="text-xl font-semibold">Linux</h3>
                <span className="text-gray-600">
                  Scripting, Servers management and protocols, Automation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-6">Interests</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div>
                <h3 className="text-xl font-semibold">Scripting languages</h3>
                <span className="text-gray-600">PHP, JS, Bash, Python</span>
              </div>
            </div>

            <div className="flex items-start">
              <div>
                <h3 className="text-xl font-semibold">Hacking</h3>
                <span className="text-gray-600">
                  Linux, Crawlers, Bots, Network
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center mt-12 space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center">
            <span className="text-3xl font-bold mr-2">+</span>
            <h2 className="text-3xl font-bold">60</h2>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Projects</h3>
            <span className="text-gray-600">
              Adapting and creating solutions for customer's needs
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-3xl font-bold ml-2">%</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Web</h3>
            <span className="text-gray-600">
              Applications development integrating third-party services and
              mobile client(s)
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold">30</h2>
            <span className="text-3xl font-bold ml-2">%</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Technical solutions</h3>
            <span className="text-gray-600">
              Such as web services, scripts, configurations
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold">20</h2>
            <span className="text-3xl font-bold ml-2">%</span>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Leading</h3>
            <span className="text-gray-600">
              Web projects and ensure the quality of delivery
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-12">
        <ol className="border-l border-gray-300">
          <li className="mb-8 ml-6">
            <div className="absolute -left-3 mt-0.5 w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
            <p className="font-semibold text-gray-700">Experiences</p>
            <p className="mt-2 text-lg font-semibold">
              Lead Developer @Geronimo
            </p>
            <span className="block text-gray-500">Today - Apr. 2016</span>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute -left-3 mt-0.5 w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
            <p className="mt-2 text-lg font-semibold">Freelance</p>
            <span className="block text-gray-500">Apr. 2016 - Sep. 2015</span>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute -left-3 mt-0.5 w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
            <p className="font-semibold text-gray-700">Education</p>
            <p className="mt-2 text-lg font-semibold">
              DUT "Métiers du multimédia et de l'internet"
            </p>
            <span className="block text-gray-500">2015 - 2013</span>
          </li>

          <li className="mb-8 ml-6">
            <div className="absolute -left-3 mt-0.5 w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
            <p className="mt-2 text-lg font-semibold">
              Art &amp; Design studies
            </p>
            <span className="block text-gray-500">2013 - 2008</span>
          </li>
        </ol>
      </div>

      <footer className="max-w-screen-lg mx-auto mt-12 text-center">
        <span className="text-base">
          Coded by
          <a
            href="https://newtodesign.com/"
            className="text-blue-600 hover:underline"
          >
            New to design
          </a>
          Designed by
          <a
            href="https://dribbble.com/shots/4342703-Minimal-resume-freebie-for-junior-self-taught-people"
            className="text-blue-600 hover:underline"
          >
            Nicolas Meuzard
          </a>
        </span>
      </footer>
    </section>
  );
}

export default forwardRef<HTMLDivElement, Props>(ResumeThree);
