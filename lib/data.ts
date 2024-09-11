import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import intouch from "@/public/intouch.gif";
import newapp from "@/public/newsapp.gif";
import tictactoe from "@/public/tictactoe.gif";

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
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Bachelors in Computer Engineering",
    location: "India",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Sigma Solve",
    description:
      "Collaborated closely with designers to translate wireframes and mockups into pixel-perfect frontend designs, ensuring a consistent and seamless user experience. Developed user interfaces for web applications using React.js, JavaScript, Bootstrap, HTML, and CSS Created RESTful back-end systems with Node.js, Express, and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Masters in Computer Science",
    location: "Stevens Institute of Technology, Hoboken, NJ",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "White Collar Technologies, San Jose, USA ",
    description:
      "led the development of a time-off tracker application using React.js and Express.js, integrating AWS DynamoDB for data storage. I enhanced the app's security with Microsoft Azure AD and OAuth 2.0, ensuring enterprise-level authentication. Collaborating with DevOps, we automated deployment using CircleCI, deploying the frontend on AWS S3 with CloudFront, and the backend on AWS Lambda via the Serverless Framework, reducing server costs by 30%.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;
export const experiencesData1 = [
  {
    title: "Diploma in Computer Engineering",
    location: "India",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Bachelors in Computer Engineering",
    location: "India",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Frontend Developer",
    location: "Sigma Solve Inc., India",
    description:
      "Collaborated closely with designers to translate wireframes and mockups into pixel-perfect frontend designs, ensuring a consistent and seamless user experience. Developed user interfaces for web applications using React.js, JavaScript, Bootstrap, HTML, and CSS Created RESTful back-end systems with Node.js, Express, and MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Masters in Computer Science",
    location: "Stevens Institute of Technology, Hoboken, NJ",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "Bright Mind Enrichment, New York, USA ",
    description:
      "Revamped Street Care web app with React for improved UI, reducing bounce rate and boosting user engagement. Enhanced performance with 25% faster load times and optimized data retrieval using Firebase DataStore. Integrated Firebase for secure user management, reducing login errors, and maintained a 95% design fidelity from Figma to web pages with mobile-first, responsive principles using Tailwind CSS.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "InTouch | Educational Social Media ",
    description:
      "An educational social-networking platform with a seamless connection to college Canvas accounts. The platform featured real-time group chat, dynamic user addition, and interactive components for improved usability.",
    tags: [
      "HTML",
      "CSS",
      "React.js",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Styled Components",
    ],
    imageUrl: intouch,
    demo: "https://in-touch-client.vercel.app/login",
    code: "https://github.com/niravpatell23/InTouch/tree/main",
  },
  {
    title: "News App",
    description:
      "A dynamic Live News App with real-time updates, implementing Server Side Rendering (SSR) to ensure the latest news delivery. The app is fully responsive, user-friendly, and offered Dark Mode for improved viewing.",
    tags: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "GraphQL",
    ],
    imageUrl: newapp,
    demo: "https://livenewsdaily.vercel.app/",
    code: "https://github.com/niravpatell23/nextjs-newsapp",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A fully functional Tic Tac Toe game with a unique dual-window setup, allowing players to simultaneously view the game board while strategizing their moves. This innovative design incorporates the MVC pattern, effectively separating game logic, user interface, and user interactions to enhance the overall gaming experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: tictactoe,
    demo: "https://vanilla-js-tictactoe.vercel.app/",
    code: "https://github.com/niravpatell23/vanillaJS-tictactoe",
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
