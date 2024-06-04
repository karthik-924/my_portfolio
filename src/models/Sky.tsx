import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'

type Props = {
    isRotating: boolean
}

const Sky = (props: Props) => {
    const sky = useGLTF(skyScene)
    const ref = useRef(null)
    useFrame((_, delta) => {
        if (props.isRotating) {
            ref.current.rotation.y += 0.25 * delta;
        }
    })
    return (
        <mesh ref={ref}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky