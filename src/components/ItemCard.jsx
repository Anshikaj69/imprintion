import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { AnimatePresence, motion } from 'framer-motion'
import ColorPicker from './ColorPicker'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { typeList } from '../config/constants'
import {tube , woven, colorful, nylon, polyester, twotone} from '../assets'


const ItemCard = () => {
  const snap= useSnapshot(state)

  return (
    <AnimatePresence>
    <div className='px-8 flex  w-full gap-6 overflow-x-scroll scrollbar-none'>
     
      
      {typeList.map(type => (
         
           <div className='flex-[0_0_28%]  w-[40%] rounded-md  cursor-pointer py-2 flex flex-col gap-1'
           onClick={()=>{
            state.toggleType(type.name)
            state.material= type.item
            state.materialColor= false
            console.log(state.materialColor)
             }}>
         
            <img src= {type.src} className='rounded-xl'></img>
            <h5 className='text-center font-semibold'>{type.name}</h5>
            <motion.div {...fadeAnimation}>
            </motion.div>
     
           </div>
          
      ))}
      
    </div>
    </AnimatePresence>
  )
}

export default ItemCard