import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import soundon from '../assets/icons/soundon.png'
import soundoff from '../assets/icons/soundoff.png'

type Props = {}

const Home = (props: Props) => {
    const audioRef = useRef(new Audio(sakura))
    audioRef.current.loop = true
    audioRef.current.volume = 0.4

    const [isRotating, setIsRotating] = useState(false)
    const [currentStage, setCurrentStage] = useState(1)
    const [isPlayingMusic, setIsPlayingMusic] = useState(false)

    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play()
        }
        else {
            console.log('pause')
            audioRef.current.pause()
        }
        return () => {
            audioRef.current.pause()
        }
    }, [isPlayingMusic])

    const adjustIslandForScreen = () => {
        let screenScale = null;
        const screenPostiton = [0, -6.5, -43]
        const rotation = [0.1, 4.7, 0]
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9]
        }
        else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPostiton, rotation]
    }
    const adjustPlaneForScreen = () => {
        let screenScale, screenPosition;
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5]
            screenPosition = [0, -1.5, 0]
        }
        else {
            screenScale = [3, 3, 3]
            screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
    }
    const [islandScale, islandPosition, rotation] = adjustIslandForScreen()
    const [planeScale, planePosition] = adjustPlaneForScreen()
    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-32 left-0 right-0 z-10 flex items-center justify-center'>
              {currentStage && <HomeInfo currentStage={currentStage}/>}
            </div>
            <Canvas className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    <directionalLight
                        position={[1, 1, 1]}
                        intensity={2}
                    />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight
                        skyColor="#b1e1ff" groundColor="#000000" intensity={1}
                    />
                    <Bird />
                    <Sky
                        isRotating={isRotating}
                    />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={rotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        currentStage={currentStage}
                        setCurrentStage={setCurrentStage}
                    />
                    <Plane
                        position={planePosition}
                        scale={planeScale}
                        isRotating={isRotating}
                        rotation={[0, 20.5, 0]}
                    />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundon : soundoff}
                    alt='sound'
                    className='object-contain w-10 h-10 cursor-pointer'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>
        </section>
    )
}

export default Home