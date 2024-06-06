import React from "react";

import BallCanvas from "../components/canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

type Props = {}

const Tech = (props: Props) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology: {name: string, icon: string}) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech