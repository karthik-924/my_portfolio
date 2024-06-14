import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { Tilt } from "react-tilt"
import GithubButton from './GithubButton'
import DemoButton from './DemoButton'

type Props = {
  index: number
  name: string
  description: string
  tags: { name: string, color: string }[]
  image: string
  source_code_link: string
  demo_link: string
}

const ProjectCardMobile = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}: Props) => {
  return (
    <motion.div className='lg:hidden' variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <GithubButton url={source_code_link} />
          <DemoButton demolink={demo_link} />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} capitalize`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCardMobile