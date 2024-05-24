import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import state from '../store'
import ItemCard from './ItemCard'

const Products = () => {
const snap = useSnapshot(state)

  return (
    <motion.div
    {...slideAnimation('up')}
    className='flex flex-row justify-start items-center px-5 gap-10'> 
        <h1 className='text-xl font-bold'>Types</h1>
        <ItemCard/>
    </motion.div>
  )
}

export default Products