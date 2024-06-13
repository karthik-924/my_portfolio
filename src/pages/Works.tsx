// import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
// import github from '../assets/github.png'
import { projects } from '../constants'
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion'

type Props = {
  index: number
  name: string
  description: string
  tags: { name: string, color: string }[]
  image: string
  source_code_link: string
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  // source_code_link,
}: Props) => {
  if (index % 2 == 0) {
    return (
      <div className='w-full relative max-w-screen flex max-lg:flex-col gap-10 justify-center items-center'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='w-full'

        >
          <img src={image} alt={name} className='w-full h-96 object-contain rounded-md' />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='w-full mt-5'

        >
          <h3 className='text-white-100 text-[20px] font-bold'>{name}</h3>
          <p className='text-secondary text-[17px] mt-3'>{description}</p>
          <div className='flex gap-2 mt-3'>
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-white-100 bg-${tag.color} px-3 py-1 rounded-md text-[14px]`}>
                {tag.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
  else {
    return (
      <div className='w-full max-w-screen flex gap-10 max-lg:flex-col justify-center items-center'>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='w-full mt-5'

        >
          <h3 className='text-white-100 text-[20px] font-bold'>{name}</h3>
          <p className='text-secondary text-[17px] mt-3'>{description}</p>
          <div className='flex gap-2 mt-3'>
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-white-100 bg-${tag.color} px-3 py-1 rounded-md text-[14px]`}>
                {tag.name}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='w-full'

        >
          <img src={image} alt={name} className='w-full h-96 object-contain rounded-md' />
        </motion.div>
      </div>
    );
  }
};

const Works = () => {
  return (
    <div id='projects'>
      <motion.section
        variants={staggerContainer(0.5, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={"projects"}>
          &nbsp;
        </span>
        <motion.div variants={textVariant(0.5)}>
          <p className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.2, 0.2)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default Works