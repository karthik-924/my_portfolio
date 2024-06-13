import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant, staggerContainer, slideIn } from '../utils/motion';
import karthik from '../assets/karthik.jpg';
import SocialLinks from '../components/SocialLinks';


type Service = {
    index: number;
    title: string;
    icon: string;
};

const ServiceCard: React.FC<Service> = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 1, 0.75)}
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
        <div id='about'>
            <motion.section
                variants={staggerContainer(0.5, 0.7)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={"about"}>
                    &nbsp;
                </span>
                <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
                    <div className='flex-col flex'>
                        <motion.div variants={textVariant(0.5)}>
                            <p className={styles.sectionSubText}>Introduction</p>
                            <h2 className={styles.sectionHeadText}>Overview</h2>
                        </motion.div>

                        <motion.p
                            variants={fadeIn("", "", 0.7, 1)}
                            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                        >
                            I'm a passionate self-taught software developer with a solid grounding in TypeScript and JavaScript, and hands-on experience with frameworks like React, Node.js, and Express.js.
                            As a fresher, I've already made my mark through internships and diverse projects, showcasing my ability to build efficient, scalable, and user-friendly solutions.

                            My curiosity drives me to continuously learn and grow. Currently, I'm diving into the exciting worlds of competitive programming and machine learning.
                            Participating in competitive programming challenges sharpens my problem-solving skills, while my exploration of machine learning opens new avenues for innovation.
                            Additionally, I'm exploring Three.js to create immersive 3D web experiences.

                            I'm eager to bring my energy and expertise to collaborative projects and contribute to impactful solutions. Let's join forces and turn your ideas into reality!
                        </motion.p>

                    </div>
                    {/* <motion.div variants={slideIn("right", "tween", 0.5, 0.5)} className='imagecontainer bg-gradient-to-r from-[#03a9f4] to-[#f441a5] w-[500px] h-[460px] p-1 rounded-full'> */}
                    <motion.img
                        variants={slideIn("right", "tween", 0.2, 1)}
                        src={karthik}
                        alt='karthik'
                        className='w-[500px] h-[440px] z-[5] relative rounded-full border border-solid'
                    />
                    {/* </motion.div> */}
                </div>
                <motion.div variants={fadeIn("", "", 0.7, 1)} className='w-full flex justify-center p-5'>
                    <SocialLinks githuburl='https://github.com/karthik-924' linkedinurl='https://www.linkedin.com/in/karthik-emmadi-251699233/' instagramurl='https://www.instagram.com/karthik.924/' />
                </motion.div>
                <div className='mt-20 flex flex-wrap gap-10'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

export default About;
