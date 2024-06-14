import BallCanvas from "../components/canvas/Ball";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from "../utils/motion";
import Points from "../components/Points";


const Tech = () => {
  return (
    <div id='skills'>
      <motion.section
        variants={staggerContainer(0.25, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto flex flex-col items-center relative z-0`}
      >
        <span className='hash-span' id={"about"}>
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.2)} className=" text-center">
          <p className={`${styles.sectionSubText} `}>My skills</p>
          <h2 className={`${styles.sectionHeadText}`}>Tech.</h2>
        </motion.div>
        <div className="w-full flex flex-col">
          {technologies.map((technology: { name: string, icon: string, score: number }) => (
            <div className="w-full flex" key={technology.name}>
              <div className='w-28 h-28' >
                <BallCanvas icon={technology.icon} />
              </div>
              <div className="w-full px-10 h-full mt-5 flex flex-col gap-5">
                <div className="w-full flex justify-between">
                  <motion.h4
                    variants={textVariant(0.3)}
                    className="text-white-100 text-[20px] font-bold"
                  >{technology.name}</motion.h4>
                  <motion.h4 variants={textVariant(0.3)} className="text-white-100 text-[20px] font-bold">{technology.score * 10}%</motion.h4>
                </div>
                <Points score={technology.score} />
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Tech