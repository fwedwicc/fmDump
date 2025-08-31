import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbCaretRightFilled, TbPlane, TbSmartHome } from "react-icons/tb"
import { IoFootstepsSharp } from "react-icons/io5"
import { LuCarTaxiFront } from "react-icons/lu"

const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='w-[24rem] rounded-[18px] p-[2.5px] bg-stone-800'>
        <div className='relative h-88 rounded-t-[15.5px] overflow-hidden w-full'>
          <img src="https://i.pinimg.com/1200x/1d/f5/35/1df5351ca6a2361c142a9e80c35ca36b.jpg" alt="" className='absolute object-cover size-full' />
        </div>
        <div className='space-y-12 p-4'>
          <div>
            <span className='text-sm text-stone-300'>Transform your digital presence</span>
            <span className='text-sm text-stone-300'>Transform your digital presence</span>
          </div>
          <div className='flex items-end justify-between'>
            <span className='leading-none block text-sm text-stone-300'>Transform</span>
            <span className='leading-none block text-sm text-stone-300'>Transform</span>
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
