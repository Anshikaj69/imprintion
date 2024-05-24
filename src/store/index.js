import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#006769',
    texture: 'woven',
    selectedTypes: {
        polyester: false,
        nylon: false,
        woven: false,
        tube: false,
        twotone: false,
        colorful: false,
      },
      toggleType: (typeName) => {
        for (let type in state.selectedTypes) {
          state.selectedTypes[type] = false;
        }
        state.selectedTypes[typeName] = true;
      },
      material:'woven',
      materialColor: false,
      hue: 0,
      text: '',
      fontSize: 30,
      fontColor: '#000000',
      fontFamily: 'Arial',
      fontStyle: 'normal',
     gradColor: 'gradient'
})

export default state