import React, {useRef} from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'

import state from '../store'

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state)

  useFrame((state, delta)=>{

    let targetPosition = [0, 0, 2.9]

    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    easing.dampE(
      group.current.rotation,
      [state.pointer.y/3, -state.pointer.x , 0],
      0.25,
      delta
    )
  })

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig