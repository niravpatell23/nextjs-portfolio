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
        My journey into the world of technology began with a Diploma in
        <span className="font-medium"> Computer Engineering,</span> followed by
        a Bachelor's degree in Computer Science and a Master's in Computer
        Science from{" "}
        <span className="font-medium">Stevens Institute of Technology.</span>{" "}
        This unique educational background proved invaluable in my career as a{" "}
        <span className="font-medium">software engineer,</span> notably at Sigma
        Solve Inc., where my diploma experience, combined with my bachelor's
        education, greatly facilitated my work and contribution.
      </p>
      <p>
        I specialize in frontend development, with expertise in React, Next.js,
        Node.js, and MongoDB, complemented by my proficiency in{" "}
        <span className="font-medium">JavaScript</span> and
        <span className="font-medium"> TypeScript.</span> The constantly
        evolving tech landscape keeps me engaged, and I'm always eager to learn
        new technologies to stay at the forefront.
      </p>{" "}
      <p>
        I am actively seeking a full-time role as a{" "}
        <span className="font-medium">Software Engineer</span> to apply my
        skills and continue expanding my knowledge.
      </p>
    </motion.section>
  );
}
