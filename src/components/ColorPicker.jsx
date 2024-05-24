import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import './style.css'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  const materialList = {
    woven: ['black', 'green', 'orange', 'pink', 'purple'],
    polyester: ['black', 'blue', 'gray', 'purple', 'red'],
    nylon: ['blue', 'gray', 'green', 'pink', 'teal'],
    colorful: ['black', 'blue', 'brown', 'green', 'purple'],
    tube: ['blue', 'purple', 'red', 'teal', 'yellow'],
    twotone: ['blue', 'green', 'pink', 'purple', 'yellow']
  };

  const handleColorChange = (event) => {
    state.materialColor = event.target.value
    console.log(state.material)
    console.log(state.materialColor)

  }

  return (

    <>
      <div className='radio-container px-5 flex gap-16 items-center py-14'>
        <div>
          <div className='flex '>
          <h1 className='text-xl font-bold mr-14'>Colors</h1>
          <div className='flex gap-2'>
          {Object.entries(materialList).map(([material, colors]) => {
            if (material == state.material) {
              return colors.map((color => (
                <>
                  <input type='radio' id={color} name='colors' value={color} className='radio-input' onChange={handleColorChange} />
                  <label htmlFor={color} className={`radio-label radio-${color}`}></label>
                </>
              )))
            }
          })}
          </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 align-middle justify-center slider-container'>
          <label className='text-l font-bold '>
            Custom Color
          </label>
          <input
              type="range"
              min="0"
              max="360"
              value={snap.hue}
              onChange={(e) => state.hue = e.target.value}
              className='custom-slider'
            />

        </div>
      </div>

    </>
  )
}

export default ColorPicker