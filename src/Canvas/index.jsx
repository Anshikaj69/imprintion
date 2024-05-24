import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,Center  } from '@react-three/drei'
import CameraRig from './CameraRig'
import { AmbientLight } from 'three'
import Hook from './Hook'
import CombinedModel from './CombinedModel'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      <CameraRig>    
          <CombinedModel></CombinedModel>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel