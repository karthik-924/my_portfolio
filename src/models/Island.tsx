import React, { useRef, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import islandScene from '../assets/3d/island.glb';
import { a } from '@react-spring/three';
import * as THREE from 'three';

interface Props {
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
  scale: [x: number, y: number, z: number];
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
  currentStage: number | null;
  setCurrentStage: Dispatch<SetStateAction<number>>;
}

const Island: React.FC<Props> = (props) => {
  const islandRef = useRef<THREE.Group>(null);
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.5;

  const handlePointerDown = useCallback((event: MouseEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    props.setIsRotating(true);
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  }, [props]);

  const handlePointerUp = useCallback((event: MouseEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    props.setIsRotating(false);
  }, [props]);

  const handlePointerMove = useCallback((event: MouseEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (props.isRotating) {
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      if (islandRef.current) {
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      }

      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }, [props, viewport.width]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (islandRef.current) {
      if (event.key === 'ArrowLeft') {
        if (!props.isRotating) props.setIsRotating(true);
        islandRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.0125;
      } else if (event.key === 'ArrowRight') {
        if (!props.isRotating) props.setIsRotating(true);
        islandRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.125;
      }
    }
  }, [props]);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      props.setIsRotating(false);
    }
  }, [props]);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl.domElement, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

  useFrame(() => {
    if (!props.isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      if (islandRef.current) {
        islandRef.current.rotation.y += rotationSpeed.current;
      }
    } else {
      if (islandRef.current) {
        const rotation = islandRef.current.rotation.y;
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            props.setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            props.setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            props.setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            props.setCurrentStage(1);
            break;
          default:
            props.setCurrentStage(0);
        }
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <mesh geometry={(nodes.polySurface944_tree_body_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface945_tree1_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface946_tree2_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface947_tree1_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface948_tree_body_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.polySurface949_tree_body_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={(nodes.pCube11_rocks1_0 as THREE.Mesh).geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
};

useGLTF.preload(islandScene);

export default Island;
