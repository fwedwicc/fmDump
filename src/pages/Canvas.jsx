import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbSmartHome, TbReload, TbWifi, TbPlayerPlayFilled, TbBatteryVertical1Filled } from "react-icons/tb"

// Recording Device
const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      // bg-gradient-to-b from-[#e7e7e7] to-[#dcdcdc]
      className='relative h-screen overflow-hidden grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='relative grid grid-cols-2 gap-0.5 w-full min-w-md h-130 rounded-3xl overflow-hidden bg-gradient-to-b from-[#EAEBEB] to-[#878788] shadow-2xl shadow-neutral-950/60'>
        <div className='flex justify-start size-full rounded-l-3xl py-0.75 pl-0.75 rounded-r-sm bg-neutral-600'>
          <div className='h-full bg-neutral-800 rounded-l-[22px] rounded-r-sm w-51' />
        </div>
        <div className='flex justify-end size-full rounded-r-3xl py-0.75 pr-0.75 rounded-l-sm bg-neutral-600'>
          <div className='h-full bg-neutral-800 rounded-r-[22px] rounded-l-sm w-51' />
        </div>
        <div className='absolute w-full h-full p-1'>
          <div className='size-full bg-neutral-800 rounded-2xl p-1.5'>
            <div className='flex flex-col size-full bg-neutral-950 rounded-[16px] overflow-hidden'>
              <div className='relative w-full h-full flex-1 flex-col bg-amber-500'>
                <img src='https://plus.unsplash.com/premium_photo-1728566648330-7ba0d675f3c6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='sample' className='size-full object-cover absolute'></img>
                <div className='absolute h-4 w-full bg-black'>

                </div>
                <div className='flex-1 h-full border border-green-500'></div>
              </div>
              <div className='w-full h-8 bg-red-400'>

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
