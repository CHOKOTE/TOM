import React from 'react'
import { CircularText1,CircularText2 } from './icon'

const CircularTom = () => {
  return (
    <div className='fixed left-4 bottom-4 flex justify-center items-center overflow-hidden'>
       <div className='w-48 h-auto flex items-center justify-center relative'>

        <CircularText2 className={'animate-spin-slow text-white '}/>
           
       </div>
    </div>
  )
}

export default CircularTom