import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbAlarm, TbFlame, TbCirclePlus, TbPlane, TbSmartHome } from "react-icons/tb"

const Canvas = () => {

  const CircleProgress = ({ percent = 17, size = 40, strokeWidth = 3 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    return (
      <div className="flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-neutral-300' strokeWidth={strokeWidth} fill="none" />
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-neutral-900' strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs">
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
      <div className='border flex flex-col items-center justify-center gap-y-3 w-full min-w-lg'>
        <div className='w-[16rem] p-[1px] border rounded-full'>
          <div className='flex items-center justify-between border rounded-full py-2.5 px-7'>
            <div className='flex items-center gap-3.5'>
              <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
              <span className='text-sm'>Flight</span>
            </div>
            <span className='text-sm'>~3 hours</span>
          </div>
        </div>
        <div className='w-[24rem] p-[1px] border rounded-full'>
          <div className='flex items-center justify-between border rounded-full py-2.5 px-7'>
            <div className='flex items-center gap-3.5'>
              <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
              <span className='text-sm'>Driving</span>
            </div>
            <span className='text-sm'>~18 hours</span>
          </div>
        </div>
        <div className='w-full p-[3px] border rounded-[36px]'>
          <div className='w-full border rounded-[33px] pt-3 pb-6 px-6 space-y-5'>
            <div className='relative flex items-center justify-between border'>
              <div className='flex items-center gap-3.5'>
                <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
                <span className='text-sm'>Walking</span>
              </div>
              <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2'>
                <CircleProgress />
              </div>
              <button className='flex items-center gap-2 px-4 py-2 border rounded-full text-xs'>
                Next Step
                <TbPlane className='size-3 stroke-[1.5px]' />
              </button>
            </div>
            <div className='flex items-center justify-between border'>
              <div className='flex flex-col text-start border'>
                <span className='text-[11px]'>Distance</span>
                <span className='text-[26px] font-bold leading-none'>2 miles</span>
              </div>
              <div className='flex flex-col text-end border'>
                <span className='text-[11px]'>Time</span>
                <span className='text-[26px] font-bold leading-none'>~40 minutes</span>
              </div>
            </div>
            <div className='space-y-3 border'>
              <div className='relative h-5 w-full rounded-full border'>
                <div className='absolute w-[35%] h-full border rounded-full'>
                  <div className='grid place-content-center absolute size-9.5 rounded-full border -right-2 -translate-y-1/2 top-1/2'>
                    <div className='size-5.5 border rounded-full' />
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
