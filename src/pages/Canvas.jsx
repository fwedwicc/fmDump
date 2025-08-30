import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbCaretRightFilled, TbPlane, TbSmartHome } from "react-icons/tb"
import { IoFootstepsSharp } from "react-icons/io5"
import { LuCarTaxiFront } from "react-icons/lu"

const Canvas = () => {

  const CircleProgress = ({ percent = 17, size = 40, strokeWidth = 2.5 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    return (
      <div className="flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-purple-100/20' strokeWidth={strokeWidth} fill="none" />
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-purple-300' strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs bg-gradient-to-b from-violet-500/70 via-violet-100 to-violet-50 bg-clip-text text-transparent">
          {percent}%
        </span>
      </div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='border flex flex-col items-center justify-center gap-y-3 w-full min-w-[30rem]'>
        <div className='w-[13rem] p-[1px] border rounded-full'>
          <div className='flex items-center justify-between border rounded-full py-2.5 px-5'>
            <div className='flex items-center gap-3'>
              <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
              <span className='text-sm'>Flight</span>
            </div>
            <span className='text-sm'>~3 hours</span>
          </div>
        </div>
        <div className='w-[21rem] p-[1px] border rounded-full'>
          <div className='flex items-center justify-between border rounded-full py-2.5 px-5'>
            <div className='flex items-center gap-3'>
              <LuCarTaxiFront className='size-5 stroke-[1.7px]' />
              <span className='text-sm'>Driving</span>
            </div>
            <span className='text-sm'>~18 hours</span>
          </div>
        </div>
        <div className='w-full p-[3px] border rounded-[36px]'>
          <div className='relative bg-neutral-950 w-full border rounded-[33px] pt-4 pb-6 px-6 space-y-5 overflow-hidden'>
            <div className='absolute w-[120%] h-36 -top-20 -translate-x-1/2 left-1/2 bg-purple-500/40 z-10 rounded-b-full blur-3xl' />
            <div className='absolute w-[30%] h-14 border -top-4 -translate-x-1/2 left-1/2 bg-purple-500/60 z-10 rounded-full blur-2xl' />
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex items-center gap-3'>
                <IoFootstepsSharp className='size-5.5 text-violet-300' />
                <span className='text-sm bg-gradient-to-b from-violet-500/70 via-violet-200/90 to-violet-100/90 bg-clip-text text-transparent'>Walking</span>
              </div>
              <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2'>
                <CircleProgress />
              </div>
              <button className='flex items-center gap-1 pl-4 pr-3 py-[7px] border rounded-full text-xs border-violet-300/60'>
                <span className='bg-gradient-to-b from-violet-500/70 via-violet-200/90 to-violet-100/90 bg-clip-text text-transparent'>
                  Next Step
                </span>
                <TbCaretRightFilled className='size-3.5 text-violet-300' />
              </button>
            </div>
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex flex-col text-start'>
                <span className='text-[10px] text-violet-100/30 font-thin'>Distance</span>
                <span className='text-[26px] font-bold leading-none bg-gradient-to-b from-violet-400/80 via-violet-300/80 to-violet-200/90 bg-clip-text text-transparent'>2 miles</span>
              </div>
              <div className='flex flex-col text-end'>
                <span className='text-[10px] text-violet-100/30 font-thin'>Time</span>
                <span className='text-[26px] font-bold leading-none bg-gradient-to-b from-violet-400/80 via-violet-300/80 to-violet-200/90 bg-clip-text text-transparent'>~40 minutes</span>
              </div>
            </div>
            <div className='relative space-y-3 z-50'>
              <div className='relative h-4.5 w-full rounded-full bg-violet-400/20'>
                <div className='absolute w-[35%] h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 rounded-full'>
                  <div className='grid place-content-center absolute size-8.5 rounded-full -right-2 -translate-y-1/2 top-1/2 bg-neutral-50/20 backdrop-blur-[3px] overflow-hidden'>
                    <div className='absolute size-8.5 border-t border-white/40 rounded-full blur-[2px]' />
                    <div className='absolute size-8.5 border-l-2 border-white rounded-full blur-xs' />
                    <div className='absolute size-8.5 border-r border-white/60 rounded-full blur-[1.5px]' />
                    <div className='size-4.5 bg-neutral-100 rounded-full' />
                  </div>
                </div>
              </div>
              <div className='relative flex items-center justify-between border'>
                <div className='text-start border'>
                  <span className='block text-[11px]'>Start</span>
                  <span className='block text-sm font-medium leading-none'>10:00 AM</span>
                </div>
                <div className='text-start absolute left-34 border'>
                  <span className='block text-[11px]'>Travel time</span>
                  <span className='block text-sm font-medium leading-none'>15 mins</span>
                </div>
                <div className='text-end border'>
                  <span className='block text-[11px]'>End</span>
                  <span className='block text-sm font-medium leading-none'>10:40 AM</span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-6 border'>
                <div className='flex items-center gap-2'>
                  <div className='h-12 w-[3px] rounded-full border' />
                  <div>
                    <div className='flex items-center gap-1'>
                      <span className='text-[10px]'>New Stops</span>
                      <span className='text-sm'>Columbus Circle</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <span className='text-[10px]'>Next Stops</span>
                      <span className='text-sm'>Times Square</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3 border'>
                  <div className='relative size-12 rounded-lg border overflow-hidden'>
                    <img src="https://placehold.co/30x30" alt="Sample yarn" className='absolute object-cover w-full h-full' />
                  </div>
                  <div className='relative size-12 rounded-lg border overflow-hidden'>
                    <img src="https://placehold.co/30x30" alt="Sample yarn" className='absolute object-cover w-full h-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ // PLAYGROUND ------------------------ */}
      {/* IGNORE: Back Button */}
      <div className='fixed md:bottom-6 bottom-4 md:right-6 right-4'>
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap right-17' content="Home" animation={8}>
          <Link to='/' className='flex-center size-13 rounded-[17px] button-secondary'>
            <TbSmartHome className='size-4.5 stroke-[2px]' />
          </Link>
        </Tooltip>
      </div>
    </motion.section>
  )
}

export default Canvas
