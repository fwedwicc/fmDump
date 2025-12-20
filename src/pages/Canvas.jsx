import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbSmartHome } from "react-icons/tb"

// Recording Device
const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='flex h-60 min-w-[23rem] p-[0.2px] pb-3 rounded-[21px] border'>
        <div className='flex justify-center items-end size-full rounded-[20.8px] p-3 border'>

          {/*  */}
          <div className='w-full grid grid-cols-3 gap-[1.5px] p-[1.5px] rounded-2xl bg-neutral-900 overflow-hidden h-27'>
            <div className='bg-neutral-100 rounded-l-[15px] rounded-r-sm'></div>
            <div className='bg-neutral-100 rounded-sm'></div>
            <div className='flex flex-col gap-[1.5px]'>
              <div className='flex-1 bg-neutral-100 rounded-sm rounded-tr-[15px]'></div>
              <div className='flex-1 bg-neutral-100 rounded-sm rounded-br-[15px]'></div>
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
