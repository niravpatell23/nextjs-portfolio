"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  code,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="sm:h-[25rem]">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            width={292}
            height={292}
            quality={95}
            className="absolute hidden hover:block sm:block top-8 -right-80 w-[40rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-[20.9rem] 

       

        group-even:right-[initial] group-even:-left-80 
        group-even:group-hover:translate-x-[20.9rem]
         "
          />
        </div>
        {/* 
 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
*/}
        <div className="flex items-center justify-center  sm:mt-auto ">
          <button
            onClick={() => window.open(demo, "_blank")}
            className=" w-1/2 px-6 py-1 m-3 hover:scale-105 duration-200 cursor-pointer border-black border-2 sm:border-0 sm:hover:border-2  rounded-lg"
          >
            Demo
          </button>
          <button
            onClick={() => window.open(code, "_blank")}
            className=" w-1/2 px-6 py-1 m-3 hover:scale-105 duration-200 cursor-pointer border-black border-2 sm:border-0 sm:hover:border-2  rounded-lg"
          >
            Code
          </button>
        </div>
      </section>
    </motion.div>
  );
}
