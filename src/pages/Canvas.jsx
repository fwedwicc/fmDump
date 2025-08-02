import React from 'react'
import { motion } from 'framer-motion'
import { TbAlarm, TbFlame } from "react-icons/tb"

const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      <div className='flex flex-col items-center justify-center pb-3 bg-lime-300 rounded-[43px] space-y-2.5'>
        <div className='flex flex-col gap-y-6.5 w-md p-7 rounded-[43px] bg-neutral-900 text-neutral-200'>
          <div className='flex-between'>
            <span className='text-neutral-400/80 text-[13px]'>Web Desinger & Developer</span>
            <span className='flex items-center gap-1 text-neutral-400/80 text-[13px]'>
              <TbAlarm className='size-5 stroke-[1.5px]' />
              7:15PM
            </span>
          </div>
          <div className='flex items-center gap-3.5'>
            <div className='size-13 rounded-full overflow-hidden'>
              <img src="https://placehold.co/30x30" alt="iOS Profile" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col gap-y-1'>
              <span className='text-neutral-200 text-xl'>Frederick Moreno</span>
              <span className='flex items-center gap-1.5 text-neutral-400 text-sm font-extralight'><span className='block size-1.5 bg-lime-300/90 rounded-full'></span>Available for work</span>
            </div>
          </div>
          <div className='flex gap-x-3'>
            <button className='flex items-center justify-center w-full gap-1 p-3 rounded-2xl bg-neutral-600 text-neutral-200'>
              Hire me
            </button>
            <button className='flex items-center justify-center w-full gap-1 p-3 rounded-2xl bg-neutral-700 text-neutral-200'>
              Copy email
            </button>
          </div>
        </div>
        <span className='flex items-center gap-1 text-[13px] font-semibold text-neutral-800'>
          <TbFlame className='size-4.5 stroke-[1.9px] text-neutral-800' />
          Currently high on creativity
        </span>
      </div>
    </motion.section>
  )
}

export default Canvas
