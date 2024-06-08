import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
    Decal, Float, OrbitControls, useTexture
} from '@react-three/drei'
import Loader from '../Loader'

type Props = {
    icon: string
}

const Ball = (props: Props) => {
    const [decal] = useTexture([props.icon])
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.75} />
            <directionalLight position={[0, 0, 0.5]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            dpr={[1, 2]}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false} />
                <Ball icon={icon} />
            </Suspense>
        </Canvas>
    )
}

export default BallCanvas