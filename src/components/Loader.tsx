import { Html } from '@react-three/drei'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
    return (
        <Html>
            <div className='flex justify-center items-center'>
                <div className='w-20 h-20 border-4 border-blue-500 border-t-blue-500 rounded-full animate-spin'/>
            </div>
        </Html>
    )
}

export default Loader