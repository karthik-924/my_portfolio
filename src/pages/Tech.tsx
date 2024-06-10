import BallCanvas from "../components/canvas/Ball";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div id="skills" className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology: {name: string, icon: string}) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech