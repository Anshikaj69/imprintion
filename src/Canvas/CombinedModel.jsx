import React from 'react';
import Lanyard from './Lanyard';
import Hook from './Hook';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture, Text } from '@react-three/drei'
import state from '../store'
import * as THREE from 'three';


const CombinedModel = () => {
  return (
    <group dispose={null}>
      <Lanyard />
      <Hook />
      <Attach/>
      <Text position={[-0.33, -0.4, 0.06]}
      scale={[0.2, 0.2, 0.2 ]}
      rotation={[THREE.MathUtils.degToRad(9), THREE.MathUtils.degToRad(12), THREE.MathUtils.degToRad(135)]}
      >Anshika</Text>
    </group>
  );
}

export default CombinedModel;

const Attach = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/hook.glb');
  
    const [hookColor, hookDisplacement, hookNormal, hookRoughness] = useTexture([
      '/metal/metal_color.jpg',
      '/metal/metal_displacement.jpg',
      '/metal/metal_normal.jpg',
      '/metal/metal_roughness.jpg'
    ]);
  
    return (
        <mesh
          castShadow
          geometry={nodes.Cube019.geometry}
          dispose={null}
          scale={[22, 22, 50]}
          position={[0.02,-1.22,0]}
          rotation={[THREE.MathUtils.degToRad(-30), THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(12)]}

        >
          <meshStandardMaterial
            map={hookColor}
            normalMap={hookNormal}
            roughnessMap={hookRoughness}
            displacementScale={0}
            metalness={1}
            roughness={0.5}
          />
        </mesh>
      
    );
  }
