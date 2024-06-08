import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import skyScene from '../assets/3d/sky.glb'

type Props = {
    isRotating: boolean
}

const Sky = (props: Props) => {
    const sky = useGLTF(skyScene)
    const ref = useRef<THREE.Mesh>(null)
    useFrame((_, delta) => {
        if (props.isRotating) {
            ref.current!.rotation.y += 0.25 * delta;
        }
    })
    return (
        <mesh ref={ref}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky