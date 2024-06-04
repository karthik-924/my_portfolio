import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

type Props = {
    currentStage: number,
}

const InfoBox = ({ text, link, btnText }: { text: string, link: string, btnText: string }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent: { [key: number]: JSX.Element } = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Karthik Emmadi</span>
        👋
        <br />
        An Aspiring Full Stack Developer
      </h1>
    ),
    2: (
        <InfoBox 
            text='Worked with many companies and picked up many skills along the way'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox 
            text='Led multiple projects to success over the years. Curious about the impact?'
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),  
    4: (
        <InfoBox 
            text='I am always looking for new opportunities. Let’s connect!'
            link='/contact'
            btnText='Let’s talk'
        />
    ),
}



const HomeInfo = (props: Props) => {
  return renderContent[props.currentStage] || null
}

export default HomeInfo