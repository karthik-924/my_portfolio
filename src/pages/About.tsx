import React, { useEffect, useState } from 'react';
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
            variants={fadeIn("right", "spring", index * 1, 0.25)}
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
    const [isMobile, setIsMobile] = useState(false);
    const mobileAndTabletCheck = (): boolean => {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
        return check;
    };
    useEffect(() => {
        setIsMobile(mobileAndTabletCheck());
    }, []);

    return (
        <div id='about'>
            <motion.section
                variants={staggerContainer(0.5, 0.7)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto max-xl:justify-center max-xl:items-center flex flex-col relative z-0`}
            >
                <span className='hash-span' id={"about"}>
                    &nbsp;
                </span>
                <div className='xl:mt-12 flex max-lg:flex-col-reverse flex-row gap-10 items-center overflow-hidden'>
                    <div className='flex-col flex '>
                        <motion.div className='max-sm:flex max-sm:flex-col' variants={textVariant(0.5)}>
                            <p className={styles.sectionSubText}>Introduction</p>
                            <h2 className={styles.sectionHeadText}>Overview</h2>
                        </motion.div>

                        <motion.p
                            variants={fadeIn("", "", 0.7, 1)}
                            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
                        >
                            I’m a Full Stack Developer with strong backend experience in Node.js and Express, and frontend development using Angular, React, and Next.js. I’ve worked on building REST APIs, integrating enterprise systems, fixing production issues, and optimizing database queries to improve reliability and performance.
                            <br />
                            Currently, I work at Accenture where most of my work involves backend development, production debugging, CI/CD support using Azure DevOps, and dependency upgrades for vulnerability remediation. I enjoy solving real-world engineering problems, improving system stability, and building scalable features that impact users directly.
                            <br />
                            Outside of work, I actively build personal projects and explore areas like competitive programming and cloud technologies. I’m always interested in opportunities where I can contribute to challenging systems and grow as a software engineer.
                        </motion.p>

                    </div>
                    {/* <motion.div variants={slideIn("right", "tween", 0.5, 0.5)} className='imagecontainer bg-gradient-to-r from-[#03a9f4] to-[#f441a5] w-[500px] h-[460px] p-1 rounded-full'> */}
                    <motion.img
                        variants={slideIn("right", "tween", 0.2, 1)}
                        src={karthik}
                        alt='karthik'
                        className='w-[500px] max-xl:w-[450px] max-xl:h-[450px] max-lg:w-[400px] max-lg:h-[400px] max-sm:w-[300px] max-sm:h-[300px] max-[350px]:w-[250px] max-[350px]:h-[250px] h-[440px] z-[5] relative rounded-full border border-solid'
                    />
                    {/* </motion.div> */}
                </div>
                <div className={`flex max-sm:flex-col max-sm:mt-5 justify-center items-center ${isMobile ? "hidden" : ""}`}>
                    <motion.h2 variants={fadeIn("", "", 0.7, 1)} className={`text-white font-black lg:text-[50px] sm:text-[45px] xs:text-[35px] text-[25px] start-0`}>Connect with me</motion.h2>
                    <motion.div variants={fadeIn("", "", 0.7, 1)} className='w-full flex max-sm:justify-center max-sm:items-center ml-auto'>

                        <SocialLinks githuburl='https://github.com/karthik-924' linkedinurl='https://www.linkedin.com/in/karthik-emmadi-251699233/' instagramurl='https://www.instagram.com/karthik.924/' />
                    </motion.div>
                </div>
                <div className='mt-20 w-full flex flex-wrap gap-5'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
            </motion.section>
        </div>
    );
}

export default About;
