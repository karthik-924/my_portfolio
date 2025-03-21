import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education, experiences } from "../constants";
import { textVariant,staggerContainer } from "../utils/motion";


type ExperienceCardProps = {
  experience: {
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: string[]
  }
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-[90%] object-fill'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

const Experience = () => {
  return (
    <div id="experience">
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={"experience"}>
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.2)}>
          <p className={`${styles.sectionSubText} text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Education.
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {education.map((educ, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={educ}
              />
            ))}
          </VerticalTimeline>
        </div>
        
      </motion.section>
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={"experience"}>
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.2)}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
        
      </motion.section>
    </div>
  );

}

export default Experience