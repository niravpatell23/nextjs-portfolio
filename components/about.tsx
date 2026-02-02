"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into information technology began with a Diploma in
        <span className="font-medium"> Computer Engineering,</span> followed by
        a Bachelor’s degree and a Master’s degree in
        <span className="font-medium"> Computer Science</span> from{" "}
        <span className="font-medium">Stevens Institute of Technology.</span>{" "}
        This progressive academic foundation has equipped me with a strong
        balance of hands-on technical skills and in-depth theoretical knowledge,
        enabling me to work effectively within complex technology environments.
      </p>

      <p className="mb-3">
        I bring practical experience in analyzing system requirements,
        translating business needs into well-structured technical solutions, and
        supporting the design, enhancement, and optimization of software
        systems. My work involves close collaboration with cross-functional
        teams, diagnosing and resolving system issues, improving performance and
        reliability, and ensuring seamless integration across applications,
        services, and data workflows.
      </p>

      <p>
        I thrive in fast-paced IT environments that value adaptability and
        continuous learning, and I am actively seeking a full-time opportunity
        in
        <span className="font-medium"> technology</span> where I can contribute
        meaningful, scalable solutions while continuing to grow my technical
        expertise.
      </p>
    </motion.section>
  );
}
