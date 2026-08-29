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
      <div className='relative grid grid-cols-2 gap-1 w-full min-w-md h-130 border rounded-2xl overflow-hidden'>
        <div className='flex justify-start size-full border rounded-l-2xl py-0.5 pl-0.5 rounded-r-sm'>
          <div className='h-full bg-green-500 rounded-l-xl rounded-r-sm w-50'></div>
        </div>
        <div className='flex justify-end size-full border rounded-r-2xl py-0.5 pr-0.5 rounded-l-sm'>
          <div className='h-full bg-green-500 rounded-r-xl rounded-l-sm w-50'></div>
        </div>
        <div className='absolute w-full h-full p-1'>
          <div className='size-full bg-green-500 rounded-xl'></div>
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
