import React from 'react'
import './styles.css'
import { FaApple } from "react-icons/fa"

const Skeleton001 = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-13 bg-white w-sm rounded-[38px] p-7 border'>
        <div className='flex justify-between items-center'>
          <div className='relative grid place-content-center size-12 border rounded-xl overflow-hidden'>
            <div className='absolute size-10.5 top-[1.5px] left-[1.5px] border-t-[2px] border-l-[2px] rounded-[10px] border' />
            <FaApple className="size-8" />
          </div>
          <div className='flex flex-col size-12 rounded-xl border overflow-hidden'>
            <span className='border-b w-full text-[9px] py-[3.5px] text-center'>JAN</span>
            <span className='flex flex-col text-center pt-[5px]'>
              <span className='font-semibold text-[11px] leading-none'>14</span>
              <span className='text-[9px] font-thin leading-none'>Mon</span>
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <span className='text-base font-medium'>Apple <span className='text-[11px] font-thin'>7 days ago</span></span>
          <span className='text-xl font-semibold'>Senior Design Engineer</span>
          <div className='mt-2 flex gap-2'>
            <span className='px-2 py-1.5 text-[11px] leading-none border rounded-lg font-medium'>Full-time</span>
            <span className='px-2 py-1.5 text-[11px] leading-none border rounded-lg font-medium'>Hybrid mode</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-7 mt-4'>
          <div className='flex justify-between items-end pb-3 border-b'>
            <span className='text-xl font-medium'>$480k <span className='text-xs font-thin'>/year</span></span>
            <span className='text-sm font-medium'>Bay Area, CA</span>
          </div>
          <button className='border p-[3.3px] rounded-[22px]'>
            <div className='w-full p-[1.2px] rounded-[19px] border'>
              <div className='relative w-full p-3 border rounded-[17px] text-lg'>
                <div className='absolute w-[87%] top-2 h-2 border' />
                <div className='absolute w-1 right-2 top-2 h-10 border' />
                <div className='absolute w-1 right-2 top-2 h-10 border' />
                Apply now
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Skeleton001
