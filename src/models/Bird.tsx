import React, { useEffect, useRef } from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

type Props = {}

const Bird = (props: Props) => {
    const { scene, animations } = useGLTF(birdScene)
    const ref = useRef(null)
    const { actions } = useAnimations(animations, ref)
    useEffect(() => {
        actions['Take 001'].play()
    }, []);
    useFrame(({clock,camera}) => {
        ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2
        
        if (ref.current.position.x > camera.position.x + 10) {
            ref.current.rotation.y = Math.PI
        } else {
            ref.current.rotation.y = 0
        }
        
        if (ref.current.rotation.y === 0) {
            ref.current.position.x += 0.01
            ref.current.position.z -= 0.01
        } else {
            ref.current.position.x -= 0.01
            ref.current.position.z += 0.01
        }
    })
    return (
        <mesh ref={ref} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird