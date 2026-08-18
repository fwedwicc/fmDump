import React from 'react'
import './styles.css'
import { TbFlareFilled } from "react-icons/tb"

const Skeleton005 = () => {
  return (
    <div className='relative'>
      <div className='absolute h-[100%] w-[95%] mt-5 -left-5 z-10' />
      <div className='absolute h-[105%] w-[110%] mt-12 -left-24 z-10' />
      <div className='relative w-[23rem] rounded-[18px] p-[2.5px] border z-50 overflow-hidden'>
        <div className='absolute h-12 w-24 top-1 left-16 z-10' />
        <span className='absolute top-4 left-4 text-[14px] heading-font z-50'>Grind fast. Live slow.</span>
        <div className='relative h-[20rem] rounded-t-[15.5px] overflow-hidden w-full'>
          <img src="https://placehold.co/30x30" alt="Waley lang" className='absolute object-cover size-full' />
        </div>
        <div className='relative space-y-12 p-4 z-50'>
          <div>
            <span className='block text-[22px] heading-font'>There's a crack in everything.</span>
            <span className='block text-[10px]'>Cracks let the light in. Just hold on, things will be okay.</span>
            <button className='mt-1.5 relative px-2.5 py-2 border rounded-full text-[10px] leading-none'>
              Got it?
            </button>
          </div>
          <div className='flex items-end justify-between'>
            <span className='leading-none block text-[11px]'>fm</span>
            <div className='flex items-center gap-1'>
              <span className='leading-none block text-[11px]'>frontend</span>
              <TbFlareFilled className='size-2' />
              <span className='leading-none block text-[11px]'>ui/ux</span>
              <TbFlareFilled className='size-2' />
              <span className='leading-none block text-[11px]'>graphics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton005
