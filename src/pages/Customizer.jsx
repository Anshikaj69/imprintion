import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { fadeAnimation } from '../config/motion';
import { CustomButton, Products, CustomText, ColorPicker, Navbar } from '../components';
import { typeList } from '../config/constants';

const Customizer = () => {
  const snap = useSnapshot(state);

  function ProductCategory({ name, isHighlighted }) {
    return (
      <div className={`flex gap-4 ${isHighlighted ? 'text-white' : 'text-stone-300'}`}>
        <div className="grow">{name}</div>
      </div>
    );
  }

  return (
    <>
      {!snap.intro && (
        <>
        <Navbar/>
        <section className="md:flex  justify-center items-center  font-medium text-white bg-teal-900 xl:py-4 xl:px-36 sm:py-3 sm:px-20 p-6 max-xl:gap-7 hidden">
            <div className="flex gap-5 w-full max-w-[1338px] max-md:flex-wrap max-md:max-w-full">
              <header className="flex-auto text-xl uppercase">All Products</header>
              <nav className="flex gap-10 justify-between items-start text-xl text-center capitalize whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <ProductCategory name="Lanyards" isHighlighted={false} />
                <ProductCategory name="Koozie" isHighlighted={true} />
                <ProductCategory name="Hoodies" isHighlighted={true} />
                <ProductCategory name="Button" isHighlighted={true} />
                <ProductCategory name="Mug" isHighlighted={true} />
                <ProductCategory name="Wristband" isHighlighted={true} />
              </nav>
            </div>
          </section>

          <div className='bg-[#34717220]  overflow-y-scroll scrollbar-none w-full h-full xl:py-4 xl:px-36 sm:py-3 sm:px-20 p-6 max-xl:gap-7'>
            <h1 className='text-[#006769] font-bold text-6xl font-sans px-4 sm:px-0 py-10 mb-5'>Your Lanyard</h1>
          <div className=' flex flex-col sm:flex-row gap-4 sm:gap-0' >
            
            <motion.div className='sm:w-[45vw] sm:h-[90vh] h-fit w-fit  relative items-center justify-center align-center'>
              {Object.entries(snap.selectedTypes).map(([type, isSelected]) => {
                if (isSelected) {
                  const item = typeList.find(t => t.name === type);
                  if (item) {
                    if (snap.materialColor !== false) {
                      console.log('inside color')
                      return (
                        <div key={item.name} className=' relative  h-fit w-fit p-3 sm:p-0 ' >
                          <img
                            src={`/${state.material}/${state.materialColor}.png`}
                            alt={item.name}
                            style={{
                              width: '500px',
                              height: '500px',
                              filter: `hue-rotate(${snap.hue}deg)`,
                              position: 'relative'
                            }}
                            className='rounded-xl '
                          />

                          <div
                            style={{
                              position: 'absolute',
                              top: '53%',
                              left: '51%',
                              width: '115px',
                              height: '60px',
                              overflow: 'hidden',
                              opacity: '0.7',
                              color: snap.fontColor,
                              fontSize: `${snap.fontSize}px`,
                              fontFamily: snap.fontFamily,
                              fontStyle: snap.fontStyle,
                              transform: `rotate(-52deg)`
                            }}
                          >
                            {snap.text}
                          </div>

                          <div
                            style={{
                              position: 'absolute',
                              top: '33%',
                              left: '68%',
                              width: '110px',
                              height: '60px',
                              overflow: 'hidden',
                              opacity: '0.7',
                              color: snap.fontColor,
                              fontSize: `${snap.fontSize - 2}px`,
                              fontFamily: snap.fontFamily,
                              fontStyle: snap.fontStyle,
                              transform: `rotate(-52deg)`
                            }}
                          >
                            {snap.text}
                          </div>
                        </div>
                      )

                    } else {
                      return (
                        <div key={item.name} className=' relative h-fit w-fit p-4 sm:p-0' >
                          <img
                            src={item.src}
                            alt={item.name}
                            style={{
                              width: '500px',
                              height: '500px',
                              filter: `hue-rotate(${snap.hue}deg)`,
                              position: 'relative'
                            }}
                            className='rounded-xl  '
                          />

                          <div
                            style={{
                              position: 'absolute',
                              top: '53%',
                              left: '51%',
                              width: '115px',
                              height: '60px',
                              overflow: 'hidden',
                              opacity: '0.7',
                              color: snap.fontColor,
                              fontSize: `${snap.fontSize}px`,
                              fontFamily: snap.fontFamily,
                              fontStyle: snap.fontStyle,
                              transform: `rotate(-52deg)`
                            }}
                          >
                            {snap.text}
                          </div>

                          <div
                            style={{
                              position: 'absolute',
                              top: '33%',
                              left: '68%',
                              width: '110px',
                              height: '60px',
                              overflow: 'hidden',
                              opacity: '0.7',
                              color: snap.fontColor,
                              fontSize: `${snap.fontSize - 2}px`,
                              fontFamily: snap.fontFamily,
                              fontStyle: snap.fontStyle,
                              transform: `rotate(-52deg)`
                            }}
                          >
                            {snap.text}
                          </div>
                        </div>
                      );
                    }
                  }
                }
                return null;
              })}



            </motion.div>
            <motion.div className='sm:w-[50vw] h-[70vh]  overflow-y-scroll scrollbar-none overflow-x-hidden mb-20'>
              <Products />
              <ColorPicker />
              <CustomText />
            </motion.div>
            </div>
          </div>
         

        
        </>
      )}
    </>
  );
};

export default Customizer;
