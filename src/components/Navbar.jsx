import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import {
    headContentAnimation,
    headContainerAnimation,
    headTextAnimation,
    slideAnimation
  } from '../config/motion'
import logo from '../assets/logo.png'
import state from '../store'
import { useSnapshot } from 'valtio'


const Navbar = () => {

  const snap = useSnapshot(state)

  return (
    <AnimatePresence>
        <motion.header
            {...slideAnimation('down')}
            className='flex flex-row justify-between items-center w-full border-b xl:py-4 xl:px-36 sm:py-3 sm:px-20 p-6 max-xl:gap-7 top-0'>
            <div className='border-4 border-[#006769] rounded-3xl'>
              <h2 className='font-bold sm:text-xl py-1 px-4 text-[#006769]'>Imprintion</h2>
              </div>

            <nav className='flex gap-8 items-center'>
              <a className='sm:block hidden'>All products 🠻</a>
              <button className='px-3 py-2 rounded-md bg-[#006769] text-white font-bold' 
              onClick={()=>{state.intro = !snap.intro}}>Login</button>
            </nav>


          
          </motion.header >
         
    </AnimatePresence>
  )
}

export default Navbar