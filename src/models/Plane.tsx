import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';

type Props = {
    position: [number, number, number],
    scale: [number, number, number],
    isRotating: boolean,
    rotation: [number, number, number]
}

const Plane: React.FC<Props> = (props) => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        if (actions && props.isRotating) {
            if (actions['Take 001']) {
                actions['Take 001'].play();
            }
        } else if (actions && actions['Take 001']) {
            actions['Take 001'].stop();
        }
    }, [actions, props.isRotating]);

    return (
        <mesh
            ref={ref}
            position={props.position}
            scale={props.scale}
            rotation={props.rotation}
        >
            <primitive object={scene} />
        </mesh>
    );
}

export default Plane;
