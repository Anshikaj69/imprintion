import React, { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'
import state from '../store'
import hero from '../assets/hero.png'
import { CustomButton, Navbar, Products } from '../components'

const Home = () => {
  const snap = useSnapshot(state)
  const productsRef = useRef(null);


  const handleChooseClick = () => {
    state.intro = false;
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <AnimatePresence className='h-full w-full overflow-y-scroll'>
      {snap.intro && (
        < >
          <Navbar />
      
          <motion.section className='home bg-gradient-to-r from-[#9de4e39a] bg-opacity-60 via-[#d6c0e600] pb-20  to-[#ccf2eec6] overflow-y-scroll scrollbar-none   ' {...slideAnimation('left')}>


            <motion.div className='flex md:flex-row flex-col  gap-14 xl:gap-10 items-center h-full ' {...headContainerAnimation}>

              <div className='home-content max-w-2xl'>
                <motion.div {...headTextAnimation}>
                  <h1 className='text-4xl font-bold xl:text-6xl '>Welcome to Our<br /> Custom Lanyard Collection</h1>
                </motion.div>

                <motion.div
                  {...headContentAnimation}
                  className='flex flex-col gap-2'>
                  <p className='max-w-lg font-normal text-gray-600 text-base xl:text-lg xl:max-w-xl '>
                    Discover a wide range of high-quality, customizable lanyards.
                  </p>
                  <p className='max-w-xl font-normal text-gray-600 text-base pb-8'>
                    With our <strong> 3D customization tool</strong> , you can design the lanyard that perfectly matches your needs and preferences.</p>

                  <div className='w-full'>
                  <CustomButton
                    type='filled'
                    title='Customize'
                    handleClick={() => { state.intro = false }}
                    customStyles='w-fit px-4 py-2.5 font-bold text-sm shadow-lg shadow-gray-500 align-center sm:align-left '>
                    </CustomButton>
                    </div>
                </motion.div>
              </div>

              <motion.div
                className='flex justify-end items-end'
                {...slideAnimation('up')}>
                <img src={hero} width={600} height={600} ></img>
              </motion.div>

            </motion.div>
          </motion.section>

        </>
      )}

    </AnimatePresence>
  )
}

export default Home