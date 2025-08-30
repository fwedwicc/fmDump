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
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="gray" strokeWidth={strokeWidth} fill="none" />
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="purple" strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
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
        <div className='w-full p-[3px] border rounded-full'>
          <div className='w-full border rounded-full py-3 px-6'>
            <div className='flex items-center justify-between border'>
              <div className='flex items-center gap-3.5'>
                <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
                <span className='text-sm'>Walking</span>
              </div>
              <CircleProgress />
              <button className='flex items-center gap-2 px-4 py-2 border rounded-full text-xs'>
                Next Step
                <TbPlane className='size-3 stroke-[1.5px]' />
              </button>
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
