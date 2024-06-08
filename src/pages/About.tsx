import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import Experience from './Experience';
import Tech from './Tech';
import Works from './Works';
import Contact from './Contact';
import StarCanvas from '../components/canvas/Stars';

type Service = {
    index: number;
    title: string;
    icon: string;
};

const ServiceCard: React.FC<Service> = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />
                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About: React.FC = () => {
    return (
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <motion.section
                variants={staggerContainer(0.5, 0.1)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={"about"}>
                    &nbsp;
                </span>
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>Introduction</p>
                    <h2 className={styles.sectionHeadText}>Overview</h2>
                </motion.div>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    I'm a passionate self-taught software developer with a solid grounding in TypeScript and JavaScript, and hands-on experience with frameworks like React, Node.js, and Express.js.
                    As a fresher, I've already made my mark through internships and diverse projects, showcasing my ability to build efficient, scalable, and user-friendly solutions.

                    My curiosity drives me to continuously learn and grow. Currently, I'm diving into the exciting worlds of competitive programming and machine learning.
                    Participating in competitive programming challenges sharpens my problem-solving skills, while my exploration of machine learning opens new avenues for innovation.
                    Additionally, I'm exploring Three.js to create immersive 3D web experiences.

                    I'm eager to bring my energy and expertise to collaborative projects and contribute to impactful solutions. Let's join forces and turn your ideas into reality!
                </motion.p>
                <div className='mt-20 flex flex-wrap gap-10'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </motion.section>
            <Experience />

            <Tech />
            <div className='relative z-0'>
                <Works />
                <StarCanvas />
            </div>
            <div className='relative z-0'>
                <Contact />
                <StarCanvas />
            </div>
        </div>
    );
}

export default About;
