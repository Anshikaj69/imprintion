import React, { useState } from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';

const CustomText = () => {
  const snap = useSnapshot(state)
  const [fontSize, setFontSize] = useState(30);
  const [fontColor, setFontColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontStyle, setFontStyle] = useState('normal');
  const fontFamilies = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
  const fontStyles = ['normal', 'italic', 'bold', 'bold italic'];

  return (

    <div className='px-5 flex'>
      <h1 className='text-xl font-bold'>Text</h1>
    

    <div className='px-20 flex flex-col gap-8 w-full'>
      <div className=''>
      <label>
        <input type="text" value={snap.text} onChange={(e) => state.text = e.target.value} 
        className='w-[90%] mt-1 p-2 px-4 border border-gray-300 rounded-md text-gray-600'
        placeholder='Custom Text Here ... '/>
      </label>
     
      </div>

      <div className='flex gap-10'>
      <label className='font-semibold flex items-center gap-3 text-md'>
        Family:
        <select value={snap.fontFamily} onChange={(e) => state.fontFamily= e.target.value}
                className=' mt-1 p-2 border border-gray-300 rounded-md text-gray-600'
                >
          {fontFamilies.map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </label>

      <label className='font-semibold text-md flex items-center gap-3'>
        Color:
        <input type="color" value={snap.fontColor} onChange={(e) => state.fontColor = e.target.value} 
          className='w-10 h-10 mt-1 rounded-xl'
          placeholder='Font Color'
          />
      </label>
     
      </div>
    </div>
    </div>
  )
}

export default CustomText