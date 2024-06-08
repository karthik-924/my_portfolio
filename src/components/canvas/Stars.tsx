import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';
import * as THREE from 'three';

const Starss: React.FC = (props) => {
  const ref = useRef<THREE.Points>(null);

  const [sphere] = useState(() => new Float32Array(random.inSphere(new Float64Array(8000), { radius: 1.2 })));
  // console.log(sphere);
  useFrame((state, delta) => {
    if (state && ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas: React.FC = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Starss />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
