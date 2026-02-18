import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/icons/redux.svg";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/icons/nodejs.svg";
import mongodb from "../assets/icons/mongodb.svg";
import git from "../assets/icons/git.svg";
import express from "../assets/tech/express.svg";
import DCMA from "../assets/projects/DCMA.png";
import merkenlaurel from "../assets/projects/Merkenlaurel.png";
import pixy from "../assets/projects/Pixy.jpg";
import srisaiPublicSchool from "../assets/education/sri-sai-public-school.png";
import narayana from "../assets/education/narayana.png";
import vbit from "../assets/education/vbit2.png";
import restapi from "../assets/tech/restapi.png";
import kreaas from "../assets/company/kreaas.png";
import nextjs from "../assets/tech/nextjs.svg";
import angular from "../assets/tech/angular.svg";
import cplus from "../assets/tech/c.svg";
import reactnative from "../assets/tech/reactnative.svg";
import firebase from "../assets/tech/firebase.svg";
import java from "../assets/tech/java.svg";
import python from "../assets/tech/python.svg";
import mysql from "../assets/tech/mysql.svg";
import oracle from "../assets/tech/oracle.svg";
import aws from "../assets/tech/aws.png";
import azuredevops from "../assets/tech/azuredevops.svg";
import accenture from "../assets/company/accenture.png";
import postman from "../assets/tech/postman.svg";
import firestore from "../assets/firestore.jpg";
import cicd from "../assets/cicd.png";
import spanner from "../assets/spanner.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Backend Developer (Node.js)",
    icon: backend,
  },
  {
    title: "MEAN Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
];

const technologies = [
  // Frontend
  { name: "HTML5", icon: html, proficiency: "Advanced" },
  { name: "CSS3", icon: css, proficiency: "Advanced" },
  { name: "JavaScript", icon: javascript, proficiency: "Advanced" },
  { name: "TypeScript", icon: typescript, proficiency: "Intermediate" },
  { name: "React.js", icon: reactjs, proficiency: "Intermediate" },
  { name: "Next.js", icon: nextjs, proficiency: "Intermediate" },
  { name: "Redux Toolkit", icon: redux, proficiency: "Intermediate" },
  { name: "Angular", icon: angular, proficiency: "Intermediate" },
  { name: "React Native", icon: reactnative, proficiency: "Intermediate" },
  { name: "Tailwind CSS", icon: tailwind, proficiency: "Advanced" },

  // Backend
  { name: "Node.js", icon: nodejs, proficiency: "Intermediate" },
  { name: "Express.js", icon: express, proficiency: "Intermediate" },
  { name: "REST APIs", icon: restapi, proficiency: "Advanced" },

  // Databases
  { name: "MongoDB", icon: mongodb, proficiency: "Intermediate" },
  { name: "MySQL", icon: mysql, proficiency: "Intermediate" },
  { name: "Oracle DB", icon: oracle, proficiency: "Beginner" },
  { name: "Firebase", icon: firebase, proficiency: "Intermediate" },
  { name: "Firestore", icon: firestore, proficiency: "Intermediate" },
  { name: "Spanner SQL", icon: spanner, proficiency: "Intermediate" },

  // DevOps / Cloud
  { name: "Azure DevOps", icon: azuredevops, proficiency: "Intermediate" },
  { name: "CI/CD Pipelines", icon: cicd, proficiency: "Intermediate" },
  { name: "AWS", icon: aws, proficiency: "Beginner" },

  // Tools
  { name: "Git", icon: git, proficiency: "Intermediate" },
  { name: "Postman", icon: postman, proficiency: "Intermediate" },

  // Programming Languages
  { name: "Python", icon: python, proficiency: "Intermediate" },
  { name: "Java", icon: java, proficiency: "Beginner" },
  { name: "C++", icon: cplus, proficiency: "Beginner" },
];

const education = [
  {
    title: "B.Tech in Information Technology",
    company_name: "Vignana Bharathi Institute of Technology",
    icon: vbit,
    iconBg: "#383E56",
    date: "Nov 2020 – Apr 2024",
    points: [
      "CGPA: 8.34",
      "Relevant Coursework: DSA, DBMS, Operating Systems, Computer Networks, Software Engineering",
      "Participated in hackathons and competitive programming contests",
    ],
  },
  {
    title: "Intermediate (MPC)",
    company_name: "Narayana Junior College",
    icon: narayana,
    iconBg: "#E6DEDD",
    date: "Jun 2018 – Mar 2020",
    points: ["Percentage: 91.70%"],
  },
  {
    title: "ICSE",
    company_name: "Sri Sai Public School",
    icon: srisaiPublicSchool,
    iconBg: "#383E56",
    date: "Jun 2017 – Mar 2018",
    points: ["Percentage: 84.67%"],
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "KREAAS Technology Solutions Pvt. Ltd",
    icon: kreaas,
    iconBg: "#E6DEDD",
    date: "Mar 2023 – Jun 2023",
    points: [
      "Built reusable React components and implemented key UI workflows for a web application developed from scratch.",
      "Integrated REST APIs and validated responses using Postman to ensure smooth frontend-backend communication.",
      "Worked in Agile sprints using Azure DevOps for task tracking and Git-based version control.",
      "Mentored teammates by delegating tasks and guiding them on React hooks, component design, and debugging.",
    ],
  },
  {
    title: "Packaged Application Developer Associate",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Present",
    points: [
      "Ranked among the Top 5 performers in Accenture MEAN Stack training (Angular + Node.js), scoring 85% theory and 95% hands-on.",
      "Developed and maintained Node.js REST APIs supporting enterprise workflows and internal business modules.",
      "Implemented Workday integration workflows to fetch and sync real-time employee/resource data, improving data freshness.",
      "Optimized Workday integration by replacing multi-endpoint fetch logic with a single targeted endpoint call, improving API response time.",
      "Resolved production and stage issues by debugging backend services, optimizing Spanner SQL queries, and supporting Azure DevOps CI/CD deployments including dependency vulnerability remediation.",
    ],
  },
];

const projects = [
  {
    name: "Decentralized Management Application",
    description:
      "Developed a committee management web application to streamline meeting scheduling, approvals, and faculty coordination. Implemented notification reminders to reduce missed meetings and integrated Firebase for authentication and data storage. Designed a fully responsive UI to ensure smooth usability across mobile and desktop devices.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "redux", color: "orange-text-gradient" },
      { name: "mantineui", color: "green-text-gradient" },
      { name: "tailwindcss", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: DCMA,
    source_code_link: "https://github.com/karthik-924/Decentralized-Governance",
    demo_link: "https://decentral-govern.web.app/",
  },
  {
    name: "Merkenlaurel - Anime Merchandise E-commerce",
    description:
      "Built a full-stack e-commerce platform for anime merchandise with authentication, product browsing, cart management, and checkout workflow. Implemented reusable UI components using Next.js and Redux for state management. Integrated Firebase for database operations and user authentication, ensuring scalability and smooth user experience.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "redux", color: "orange-text-gradient" },
      { name: "mantineui", color: "green-text-gradient" },
      { name: "tailwindcss", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: merkenlaurel,
    source_code_link: "https://github.com/karthik-924/MerkenLaurel",
    demo_link: "https://merken-laurel.vercel.app/",
  },
  {
    name: "Pixy - AI-Powered Chatbot",
    description:
      "Developed a cross-platform AI chatbot application using React Native with voice-based interaction and wake-word activation through PicoVoice. Built Flask and Node.js backend services to handle user queries and request processing. Integrated OpenAI API to generate natural language responses and designed an efficient request/response flow for smoother interaction.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "reactnative", color: "pink-text-gradient" },
      { name: "openaiapi", color: "orange-text-gradient" },
    ],
    image: pixy,
    source_code_link: "https://github.com/karthik-924/Pixy",
    demo_link: "",
  },
];

export { services, technologies, education, experiences, projects };
