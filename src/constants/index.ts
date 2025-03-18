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
import agile from "../assets/tech/agile.png";
import problemsolving from "../assets/tech/problems.png";
import teamwork from "../assets/tech/teamwork.png";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies = [
  // Frontend Technologies
  {
    name: "HTML 5",
    icon: html,
    proficiency: "Advanced",
  },
  {
    name: "CSS 3",
    icon: css,
    proficiency: "Advanced",
  },
  {
    name: "JavaScript",
    icon: javascript,
    proficiency: "Intermediate",
  },
  {
    name: "TypeScript",
    icon: typescript,
    proficiency: "Intermediate",
  },
  {
    name: "React JS",
    icon: reactjs,
    proficiency: "Intermediate",
  },
  {
    name: "Next JS",
    icon: nextjs,
    proficiency: "Beginner",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    proficiency: "Beginner",
  },
  {
    name: "Angular",
    icon: angular,
    proficiency: "Beginner",
  },
  {
    name: "React Native",
    icon: reactnative,
    proficiency: "Intermediate",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    proficiency: "Advanced",
  },

  // Backend Technologies
  {
    name: "Node JS",
    icon: nodejs,
    proficiency: "Intermediate",
  },
  {
    name: "Express JS",
    icon: express,
    proficiency: "Beginner",
  },
  {
    name: "RESTful APIs",
    icon: restapi,
    proficiency: "Beginner",
  },

  // Programming Languages
  {
    name: "C++",
    icon: cplus,
    proficiency: "Beginner",
  },
  {
    name: "Java",
    icon: java,
    proficiency: "Beginner",
  },
  {
    name: "Python",
    icon: python,
    proficiency: "Intermediate",
  },

  // Databases
  {
    name: "MongoDB",
    icon: mongodb,
    proficiency: "Intermediate",
  },
  {
    name: "MySQL",
    icon: mysql,
    proficiency: "Beginner",
  },
  {
    name: "Oracle DB",
    icon: oracle,
    proficiency: "Beginner",
  },
  {
    name: "Firebase",
    icon: firebase,
    proficiency: "Intermediate",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    icon: aws,
    proficiency: "Beginner",
  },
  {
    name: "Azure DevOps",
    icon: azuredevops,
    proficiency: "Beginner",
  },

  // Tools & Testing
  {
    name: "Git",
    icon: git,
    proficiency: "Intermediate",
  },
  {
    name: "Postman",
    icon: postman,
    proficiency: "Intermediate",
  },

  // Soft Skills & Agile
  {
    name: "Agile Methodologies",
    icon: agile,
    proficiency: "Intermediate",
  },
  {
    name: "Problem-Solving",
    icon: problemsolving,
    proficiency: "Intermediate",
  },
  {
    name: "Team Collaboration",
    icon: teamwork,
    proficiency: "Advanced",
  },
];


const education = [
  {
    title: "Indian Certificate of Secondary Education",
    company_name: "Sri Sai Public School",
    icon: srisaiPublicSchool, // replace with appropriate icon variable
    iconBg: "#383E56",
    date: "June 2017 – March 2018",
    points: [
      "Percentage: 84.67%",
      "Gained initial exposure to computer programming, learning the basics of Java.",
      "Developed a keen interest in software development and emerging technologies.",
      "Built early problem-solving abilities and a logical mindset through academic coursework.",
    ],
  },
  {
    title: "Intermediate in MPC Stream",
    company_name: "Narayana Junior College",
    icon: narayana, // replace with appropriate icon variable
    iconBg: "#E6DEDD",
    date: "June 2018 – March 2020",
    points: [
      "Percentage: 91.70%",
      "Developed strong analytical and problem-solving skills through intensive coursework in Mathematics, Physics, and Chemistry.",
      "Built a solid foundation in logical reasoning and numerical problem-solving, essential for engineering and software development.",
      "Excelled in competitive exams, securing a high percentile in technical subjects.",
    ],
  },
  {
    title: "Bachelor of Technology in Information Technology",
    company_name: "Vignana Bharathi Institute of Technology",
    icon: vbit, // replace with appropriate icon variable
    iconBg: "#383E56",
    date: "Nov 2020 – April 2024",
    points: [
      "CGPA: 8.34",
      "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Database Management System, Software Engineering.",
      "Acquired strong technical foundations in software development, cloud computing, and web technologies.",
      "Worked on various academic projects, applying theoretical knowledge to real-world applications.",
      "Participated in coding competitions and hackathons, showcasing problem-solving skills and technical expertise.",
      "Gained experience in full-stack development through coursework and hands-on projects."
    ],
  },

];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "KREAAS Technology Solutions Pvt. Ltd",
    icon: kreaas, // replace with appropriate icon variable
    iconBg: "#E6DEDD",
    date: "March 2023 – June 2023",
    points: [
      "Led front-end development using React, translating design mockups into functional and visually appealing interfaces.",
      "Achieved 100% task completion and enhanced interface responsiveness by 20% through performance optimizations.",
      "Streamlined development workflows by integrating Azure DevOps for task management, version control, and CI/CD pipelines.",
      "Mentored junior developers on React.js fundamentals, improving team efficiency and knowledge-sharing.",
      "Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data communication between frontend and backend.",
      "Worked on bug fixes and performance improvements, maintaining high-quality code standards and optimizing application speed.",
      "Gained hands-on experience with agile methodologies, actively participating in daily stand-ups, sprint planning, and retrospectives.",
    ],
  },
  {
    title: "Packaged Application Developer Associate",
    company_name: "Accenture",
    icon: accenture, // replace with appropriate icon variable
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Present",
    points: [
      "Achieved MEAN Stack Certification, scoring 85% in assessments and 95% in hands-on evaluations.",
      "Recognized as a Merit Holder, ranking among the top 5 in the cohort.",
      "Currently working as a Frontend Developer on a Leaves & Payroll Management module, focusing on Angular development.",
      "Collaborating with backend developers to enhance API efficiency and ensure seamless integration.",
      "Implementing UI/UX improvements to optimize user interaction and improve performance.",
      "Actively contributing to Agile development cycles, participating in daily stand-ups, sprint planning, and code reviews.",
    ],
  },
];


const projects = [
  {
    name: "Decentralized Management Application",
    description:
      "Team-developed project for college committee management, streamlining scheduling and reminders for faculty. Developed a robust notification system to ensure timely reminders for scheduled meetings. Seamlessly integrated frontend and backend and made the application mobile responsive.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "mantineui",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: DCMA,
    source_code_link: "https://github.com/karthik-924/Decentralized-Governance",
    demo_link: "https://decentral-govern.web.app/",
  },
  {
    name: "Merkenlaurel - Anime Merchandise E-commerce Application",
    description:
      "Dynamic ecommerce platform dedicated to anime enthusiasts, offering a wide range of merchandise. Empowered users to create personalized merchandise, particularly custom shirts, to express their unique anime preferences. Ongoing project with plans to add more features and engage the anime community.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "mantineui",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: merkenlaurel,
    source_code_link: "https://github.com/karthik-924/MerkenLaurel",
    demo_link: "https://merken-laurel.vercel.app/",
  },
  {
    name: "Pixy - AI-Powered Chatbot",
    description:
      "Leveraged React Native to create Pixy’s front-end interface, enabling cross-platform compatibility and native-like user experience on mobile devices. Integrated wake word detection using PicoVoice technology, enabling hands-free activation and query recording. Utilized Flask and Node.js servers as middleware to handle user queries, process background recording data, and interact with the OpenAI API for advanced natural language processing.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "reactnative",
        color: "pink-text-gradient",
      },
      {
        name: "openaiapi",
        color: "orange-text-gradient",
      },
    ],
    image: pixy,
    source_code_link: "https://github.com/karthik-924/Pixy",
    demo_link: "",
  },
];

export { services, technologies,education, experiences, projects };
