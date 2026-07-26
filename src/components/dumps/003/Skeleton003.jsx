import React from 'react'
import { TbAlarm, TbFlame, TbCirclePlus, TbCopy } from "react-icons/tb"
import { MemojiProfile } from '../../../assets/003'

const Skeleton003 = () => {
  return (
    <div>
      <div className='relative flex flex-col items-center justify-center pb-3 border rounded-[43px] space-y-2.5 overflow-hidden'>
        <div className='absolute -bottom-2.5 w-full h-full rounded-[43px] border-b-[2px] border-x-[1px]' />
        <div className='relative flex flex-col gap-y-6.5 w-md p-7 rounded-[43px] border overflow-hidden'>
          <div className='absolute w-76 h-100 top-0 -right-24 rotate-20 z-10' />
          <div className='flex-between z-20'>
            <span className='text-[13px]'>Designer & Developer</span>
            <span className='flex items-center gap-1 text-[13px]'>
              <TbAlarm className='size-5 stroke-[1.5px]' />
              7:15PM
            </span>
          </div>
          <div className='flex items-center gap-3.5 z-20'>
            <div className='size-13 rounded-full overflow-hidden border'>
              <img src='https://placehold.co/30x30' alt="Memoji Profile" className='object-cover border w-full h-full scale-105' />
            </div>
            <div className='flex flex-col gap-y-1'>
              <span className='text-xl'>Frederick Moreno</span>
              <span className='flex items-center gap-1.5 text-sm font-extralight'><span className='block size-1.5 border rounded-full'></span>Available for work</span>
            </div>
          </div>
          <div className='flex gap-x-3.5 z-20'>
            <button className='relative flex items-center justify-center w-full gap-1.5 p-3.5 text-sm rounded-[14px] border overflow-hidden'>
              <div className='absolute w-full h-full border-x-[1px] border-t-[1px] rounded-[14px]' />
              <TbCirclePlus className='size-4.5 stroke-[1.5px]' />
              Hire me
            </button>
            <button className='relative flex items-center justify-center w-full gap-1.5 p-3.5 text-sm rounded-[14px] border overflow-hidden'>
              <div className='absolute w-full h-full border-x-[1px] border-t-[1px] rounded-[14px]' />
              <TbCopy className='size-4.5 stroke-[1.5px]' />
              Copy email
            </button>
          </div>
        </div>
        <span className='flex items-center gap-1 text-[13px] font-semibold'>
          <TbFlame className='size-4.5 stroke-[1.9px]' />
          Currently high on creativity
        </span>
      </div>
    </div>
  )
}

export default Skeleton003
