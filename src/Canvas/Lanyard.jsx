import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'
import Hook from './Hook'
import * as THREE from 'three'


const Lanyard = () => {

  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('/custom_lanyard.gltf')

  console.log(nodes)
  // const Lanyardtexture = useTexture(snap.texture)

  const [Normal, Roughness, ao, gradient] = useTexture([
  '/fabric/fabric_normal.png',
  '/fabric/fabric_roughness.png',
  '/fabric/fabric_ao.png',
  `/gradients/${state.gradColor}.jpg`
  ]);

  Normal.wrapS = Normal.wrapT = THREE.RepeatWrapping
  Roughness.wrapS = Roughness.wrapT = THREE.RepeatWrapping
  ao.wrapS = ao.wrapT = THREE.RepeatWrapping

  Normal.repeat.set(8,8)
  return (
    <mesh
      castShadow
      geometry={nodes.BezierCurve005.geometry}
      scale={[20, 20, 20]}
      position={[0, -2.8, 0]}
    >
      {state.Gradient && (
        <meshStandardMaterial
          map={gradient}
        />
      )}
      
      <meshStandardMaterial
      normalMap={Normal}
      roughnessMap={Roughness}
      aoMap={ao}
      />
    </mesh>

  )
}

export default Lanyard



