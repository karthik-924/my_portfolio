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
import DCMA from '../assets/projects/DCMA.png'
import merkenlaurel from '../assets/projects/Merkenlaurel.png'
import pixy from '../assets/projects/Pixy.jpg'
import srisaiPublicSchool from "../assets/education/sri-sai-public-school.png";
import narayana from "../assets/education/narayana.png";
import vbit from "../assets/education/vbit2.png";
import kreaas from '../assets/company/kreaas.png'

  
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
    {
      name: "HTML 5",
      icon: html,
      score: 9,
    },
    {
      name: "CSS 3",
      icon: css,
      score: 8,
    },
    {
      name: "JavaScript",
      icon: javascript,
      score: 9,
    },
    {
      name: "TypeScript",
      icon: typescript,
      score: 8.5,
    },
    {
      name: "React JS",
      icon: reactjs,
      score: 8.5,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      score: 8,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      score: 9,
    },
    {
      name: "Node JS",
      icon: nodejs,
      score: 7,
    },
    {
      name: "MongoDB",
      icon: mongodb,
      score: 6,
    },
    {
      name: "git",
      icon: git,
      score: 8.5,
    },
  ];
  
const experiences = [
  {
    title: "Indian Certificate of Secondary Education",
    company_name: "Sri Sai Public School",
    icon: srisaiPublicSchool,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
      "Percentage: 85%",
      "Learnt basic Java from my school.",
      "Gained initial exposure to computer programming and software development.",
      "Developed a strong interest in technology and programming.",
    ],
  },
  {
    title: "Intermediate in MPC Stream",
    company_name: "Narayana Junior College",
    icon: narayana,
    iconBg: "#E6DEDD",
    date: "2018 - 2020",
    points: [
      "Percentage: 92%",
      "Learnt basic math and science which helped me in my journey.",
      "Developed strong analytical and problem-solving skills.",
      "Studied Mathematics, Physics, and Chemistry in depth, which provided a solid foundation for engineering studies.",
    ],
  },
    {
      title: "Bachelor of Technology in Information Technology",
      company_name: "Vignana Bharathi Institute of Technology",
      icon: vbit,
      iconBg: "#383E56",
      date: "Expected 2024",
      points: [
        "CGPA: 8.3",
        "Relevant Coursework: Data Structures, Machine Learning, Database Management System, Software Engineering.",
        "Gained foundational knowledge in software development and data management.",
        "Engaged in various projects and lab work to apply theoretical knowledge in practical scenarios.",
      ],
    },
    
    
    {
      title: "Software Engineer Intern",
      company_name: "KREAAS TECHNOLOGY SOLUTIONS PVT. LTD",
      icon: kreaas, // replace with appropriate icon variable
      iconBg: "#E6DEDD",
      date: "March 2023 - June 2023",
      points: [
        "Led React.js front-end development, translating design mockups into functional and visually appealing interfaces.",
        "Ensured seamless front-end to back-end communication, significantly enhancing user experience.",
        "Proactively collaborated with cross-functional team, providing valuable insights for efficient project achievement.",
        "Worked on bug fixes and performance improvements to maintain high-quality standards.",
        "Gained hands-on experience in agile methodologies and participated in daily stand-ups and sprint planning.",
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
      source_code_link: "https://github.com/",
      demo_link: "",
    },
    {
      name: "Merkenlaurel - Anime Merchandise E-commerce Application",
      description:
        "Dynamic ecommerce platform dedicated to anime enthusiasts, offering a wide range of merchandise. Empowered users to create personalized merchandise, particularly custom shirts, to express their unique anime preferences. Ongoing project with plans to add more features and engage the anime community.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient"
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
      source_code_link: "https://github.com/",
      demo_link: "",
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
      source_code_link: "https://github.com/",
      demo_link: "",
    },
  ];
  
  
  export { services, technologies, experiences, projects };