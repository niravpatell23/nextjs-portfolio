import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import html from "@/assets/html.png";
import css from "@/assets/css.png";
import javascript from "@/assets/javascript.png";
import reactImage from "@/assets/react.png";
import nextjs from "@/assets/nextjs.png";
import graphql from "@/assets/graphql.png";
import github from "@/assets/github.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import node from "@/assets/node.png";
import mongo from "@/assets/mongo.png";
import prisma from "@/assets/prisma.png";
import redux from "@/assets/redux.png";
import postgre from "@/assets/postgre.png";
import python from "@/assets/python.png";
import django from "@/assets/django.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Computer Engineering",
    location: "India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Bachelors in Computer Engineering",
    location: "India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Software Engineer",
    location: "Sigma Solve Inc., India",
    description:
      "Collaborated closely with designers to translate wireframes and mockups into pixel-perfect frontend designs, ensuring a consistent and seamless user experience. Developed user interfaces for web applications using React.js, JavaScript, Bootstrap, HTML, and CSS Created RESTful back-end systems with Node.js, Express, and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Masters in Computer Science",
    location: "Stevens Institute of Technology, Hoboken, NJ",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer (Frontend)",
    location: "Bright Mind Enrichment, New York, USA ",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: typescript,
    title: "TypeScript",
    style: "shadow-blue-500",
  },
  {
    id: 5,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
  },
  {
    id: 6,
    src: nextjs,
    title: "Next JS",
    style: "shadow-gray-400 ",
  },
  {
    id: 7,
    src: node,
    title: "Node JS",
    style: "shadow-green-400",
  },
  {
    id: 8,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-sky-400",
  },

  {
    id: 9,
    src: graphql,
    title: "GraphQL",
    style: "shadow-pink-400",
  },
  {
    id: 10,
    src: mongo,
    title: "Mongo DB",
    style: "shadow-green-400",
  },
  {
    id: 11,
    src: prisma,
    title: "Prisma",
    style: "shadow-gray-400",
  },
  {
    id: 12,
    src: redux,
    title: "Redux",
    style: "shadow-purple-600",
  },
  {
    id: 13,
    src: postgre,
    title: "PostgreSQL",
    style: "shadow-gray-400",
  },
  {
    id: 14,
    src: python,
    title: "Python",
    style: "shadow-yellow-500",
  },
  {
    id: 15,
    src: django,
    title: "Django",
    style: "shadow-green-400",
  },
  {
    id: 16,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
] as const;
