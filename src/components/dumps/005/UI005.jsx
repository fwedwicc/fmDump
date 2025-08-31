import React from 'react'
import './styles.css'
import { TbFlareFilled } from "react-icons/tb"

const UI005 = () => {
  return (
    <div className='relative'>
      <div className='absolute bg-stone-800/30 h-[100%] w-[95%] mt-5 -left-5 z-10 blur-xl' />
      <div className='absolute bg-stone-800/10 h-[105%] w-[110%] mt-12 -left-24 z-10 blur-xl' />
      <div className='relative w-[23rem] rounded-[18px] p-[2.5px] bg-stone-900 custom-shadow z-50 overflow-hidden'>
        <div className='absolute bg-stone-800/30 h-12 w-24 top-1 left-16 z-10 blur-md' />
        <span className='absolute top-4 left-4 text-[14px] text-stone-200 heading-font z-50'>Grind fast. Live slow.</span>
        <div className='relative h-[20rem] rounded-t-[15.5px] overflow-hidden w-full'>
          <img src="https://i.pinimg.com/1200x/1d/f5/35/1df5351ca6a2361c142a9e80c35ca36b.jpg" alt="Waley lang" className='absolute object-cover size-full' />
        </div>
        <div className='relative space-y-12 p-4 z-50'>
          <div>
            <span className='block text-[22px] text-stone-300/90 heading-font'>There's a crack in everything.</span>
            <span className='block text-[10px] text-stone-500'>Cracks let the light in. Just hold on, things will be okay.</span>
            <button className='mt-1.5 relative px-2.5 py-2 bg-gradient-to-b from-stone-300/10 via-stone-900 to-stone-900 border border-stone-200/20 rounded-full text-[10px] text-stone-400 leading-none'>
              Got it?
            </button>
          </div>
          <div className='flex items-end justify-between'>
            <span className='leading-none block text-[11px] text-stone-400'>fm</span>
            <div className='flex items-center gap-1'>
              <span className='leading-none block text-[11px] text-stone-400'>frontend</span>
              <TbFlareFilled className='text-stone-400 size-2' />
              <span className='leading-none block text-[11px] text-stone-400'>ui/ux</span>
              <TbFlareFilled className='text-stone-400 size-2' />
              <span className='leading-none block text-[11px] text-stone-400'>graphics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI005
