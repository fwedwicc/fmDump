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
      className='relative h-screen overflow-hidden bg-amber-100/40 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='relative'>
        <div className='absolute bg-stone-800/30 h-[100%] w-[95%] mt-5 -left-5 z-10 blur-xl' />
        <div className='absolute bg-stone-800/10 h-[105%] w-[110%] mt-12 -left-24 z-10 blur-xl' />
        <div className='relative w-[23rem] rounded-[18px] p-[2.5px] bg-stone-900 custom-shadow z-50'>
          <div className='relative h-[20rem] rounded-t-[15.5px] overflow-hidden w-full'>
            <img src="https://i.pinimg.com/1200x/1d/f5/35/1df5351ca6a2361c142a9e80c35ca36b.jpg" alt="" className='absolute object-cover size-full' />
          </div>
          <div className='space-y-12 p-4'>
            <div>
              <span className='block text-[22px] text-stone-300/90 heading-font'>Transform your digital presence.</span>
              <span className='block text-[10px] text-stone-500'>From zero to extraordinary. Let's create your digital reality.</span>
              <button className='mt-1.5 relative px-2.5 py-2 bg-gradient-to-b from-stone-300/10 via-stone-900 to-stone-900 border border-stone-200/20 rounded-full text-[10px] text-stone-400 leading-none'>
                Send a message
              </button>
            </div>
            <div className='flex items-end justify-between'>
              <span className='leading-none block text-[11px] text-stone-400'>Transform</span>
              <div className='flex items-center gap-1'>
                <span className='leading-none block text-[11px] text-stone-400'>Transform</span>
                <span className='leading-none block text-[11px] text-stone-400'>Transform</span>
                <span className='leading-none block text-[11px] text-stone-400'>Transform</span>
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
