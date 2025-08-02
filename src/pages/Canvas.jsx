import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbAlarm, TbFlame, TbCirclePlus, TbCopy, TbSmartHome } from "react-icons/tb"

const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='relative flex flex-col items-center justify-center pb-3 bg-lime-300/90 shadow-2xl shadow-neutral-300/60 rounded-[43px] space-y-2.5 overflow-hidden'>
        <div className='absolute -bottom-2.5 w-full h-full rounded-[43px] border-b-[2px] border-x-[1px] blur-[2px] border-x-lime-600/40 border-b-lime-600/40' />
        <div className='relative flex flex-col gap-y-6.5 w-md p-7 rounded-[43px] bg-neutral-900 shadow-xl shadow-neutral-800/20 text-neutral-200 overflow-hidden'>
          <div className='absolute w-76 h-100 top-0 -right-24 rotate-20 bg-neutral-700/60 blur-[8rem] z-10' />
          <div className='flex-between z-20'>
            <span className='text-neutral-400/80 text-[13px]'>Designer & Developer</span>
            <span className='flex items-center gap-1 text-neutral-400/80 text-[13px]'>
              <TbAlarm className='size-5 stroke-[1.5px]' />
              7:15PM
            </span>
          </div>
          <div className='flex items-center gap-3.5 z-20'>
            <div className='size-13 rounded-full overflow-hidden'>
              <img src="https://placehold.co/30x30" alt="iOS Profile" className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col gap-y-1'>
              <span className='text-neutral-300 text-xl'>Frederick Moreno</span>
              <span className='flex items-center gap-1.5 text-neutral-400/80 text-sm font-extralight'><span className='block size-1.5 bg-lime-300/90 rounded-full'></span>Available for work</span>
            </div>
          </div>
          <div className='flex gap-x-3.5 z-20'>
            <button className='relative flex items-center justify-center w-full gap-1.5 p-3.5 text-sm rounded-[14px] bg-neutral-600/80 text-neutral-200 shadow-xl shadow-neutral-900/50 overflow-hidden'>
              <div className='absolute w-full h-full border-x-[1px] border-t-[1px] border-t-neutral-400/60 border-x-neutral-500/80 rounded-[14px] blur-[0.8px]' />
              <TbCirclePlus className='size-4.5 stroke-[1.5px]' />
              Hire me
            </button>
            <button className='relative flex items-center justify-center w-full gap-1.5 p-3.5 text-sm rounded-[14px] bg-neutral-700/80 text-neutral-200 shadow-xl shadow-neutral-900/50 overflow-hidden'>
              <div className='absolute w-full h-full border-x-[1px] border-t-[1px] border-t-neutral-500/80 border-x-neutral-600 rounded-[14px] blur-[0.8px]' />
              <TbCopy className='size-4.5 stroke-[1.5px]' />
              Copy email
            </button>
          </div>
        </div>
        <span className='flex items-center gap-1 text-[13px] font-semibold text-neutral-800'>
          <TbFlame className='size-4.5 stroke-[1.9px] text-neutral-800' />
          Currently high on creativity
        </span>
      </div>
      {/* ------------------------ // PLAYGROUND ------------------------ */}
      {/* IGNORE: Back Button */}
      <div className='fixed bottom-6 right-6'>
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap right-17' content="Back to home" animation={8}>
          <Link to='/' className='flex-center size-13 rounded-[17px] button-secondary'>
            <TbSmartHome className='size-4.5 stroke-[2px]' />
          </Link>
        </Tooltip>
      </div>
    </motion.section>
  )
}

export default Canvas
