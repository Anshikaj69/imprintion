import React from 'react';
import { useSnapshot } from 'valtio';
import { useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
import * as THREE from 'three';

const Hook = () => {
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
        geometry={nodes.BezierCircle012.geometry}
        dispose={null}
        scale={[-0.17, -0.13, -0.14]}
        position={[0,-1.09,-0.1]}
        rotation={[THREE.MathUtils.degToRad(-120), THREE.MathUtils.degToRad(-15), 0]}
      >
        <meshStandardMaterial
          map={hookColor}
          displacementMap={hookDisplacement}
          normalMap={hookNormal}
          roughnessMap={hookRoughness}
          displacementScale={0.05}
          metalness={1}
          roughness={0.5}
        />
      </mesh>
    
  );
}

export default Hook;


