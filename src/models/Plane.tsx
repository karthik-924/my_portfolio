import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

type Props = {
    position: number[],
    scale: number[],
    isRotating: boolean,
    rotation: number[]
}

const Plane = (props: Props) => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if (props.isRotating) {
            actions['Take 001'].play()
        } else {
            actions['Take 001'].stop()
        }
    }, [actions,props.isRotating])
  return (
      <mesh
            ref={ref}
            position={props.position}
            scale={props.scale}
            rotation={props.rotation}
      >
          <primitive object={scene} />
    </mesh>
  )
}

export default Plane