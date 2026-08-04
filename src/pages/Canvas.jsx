import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbSmartHome, TbReload, TbWifi } from "react-icons/tb"

// Recording Device
const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-gradient-to-b from-[#e7e7e7] to-[#dcdcdc] grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='absolute bg-neutral-500 blur-[32px] w-86 h-32 bottom-6 -translate-x-1/2 left-1/2' />
      <div className='absolute flex items-center justify-between px-4 blur-[12px] w-84 h-32 bottom-8 -translate-x-1/2 left-1/2'>
        <div className='bg-neutral-500/50 blur-lg w-12 h-32 rounded-full mt-8' />
        <div className='bg-neutral-500/50 blur-lg w-12 h-32 rounded-full mt-8' />
      </div>
      <div className='flex w-[24rem] p-[0.2px] pb-3.5 rounded-[21px] bg-[#858585] shadow-[-9px_41px_100px_19px_rgba(0,_0,_0,_0.1)] z-50'>
        <div className='flex flex-col justify-end gap-4 items-end size-full rounded-[20.8px] p-2 bg-gradient-to-b from-[#ffffff] to-[#dadada] border-2 border-white'>
          {/*  */}
          <div className='relative flex flex-col items-center justify-between p-5 h-96 rounded-[15px] w-full bg-neutral-900 border-[1.2px] border-[#545454] overflow-hidden'>
            {/* <div className='absolute top-0 left-0 w-54 h-38 bg-white/20 blur-[12rem]' /> */}
            <div className='absolute -bottom-8 -translate-x-1/2 left-1/2 w-[140%] h-30 bg-black/80 blur-[3rem] z-30 -rotate-12' />
            <div className='flex flex-col justify-between absolute top-1/2 -translate-y-1/2 w-[98.5%] h-[98.5%] rounded-[11px] overflow-hidden border-t-[1.2px] border-l-[1.2px] border-[#545454]'>
              {Array.from({ length: 116 }, (_, i) => (
                <div key={i} className='w-full h-[1.5px] bg-gradient-to-r from-neutral-700/60 to-neutral-800/20' />
              ))}
            </div>
            {/*  */}
            <div className='flex justify-between w-full'>
              <div className='flex gap-7 relative z-20'>
                <p className='text-neutral-400 leading-none text-[10px]'>11:11 PM</p>
                <div className='flex items-center gap-1'>
                  <div className='size-1.5 rounded-full bg-red-400 border' />
                  <p className='text-neutral-400/80 leading-none text-[10px]'>NEW RECORDING</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <p className='text-neutral-400 leading-none text-[10px]'>s</p>
                <p className='text-neutral-400 leading-none text-[10px]'>s</p>
              </div>
            </div>
            {/*  */}
            <div className='relative z-20 flex items-center gap-[3.3px] mt-6'>
              {['h-[12px]', 'h-[30px]', 'h-[48px]', 'h-[12px]', 'h-[30px]', 'h-[68px]', 'h-[8px]', 'h-[40px]', 'h-[34px]', 'h-[48px]', 'h-[27px]', 'h-[27px]', 'h-[27px]', 'h-[34px]', 'h-[42px]', 'h-[31px]', 'h-[14px]', 'h-[14px]', 'h-[10px]', 'h-[10px]', 'h-[20px]', 'h-[20px]', 'h-[11px]', 'h-[44px]', 'h-[36px]', 'h-[52px]', 'h-[28px]', 'h-[14px]', 'h-[34px]', 'h-[68px]', 'h-[24px]', 'h-[44px]', 'h-[12px]', 'h-[50px]', 'h-[42px]', 'h-[56px]', 'h-[32px]', 'h-[27px]', 'h-[12px]', 'h-[12px]', 'h-[10px]', 'h-[40px]', 'h-[32px]', 'h-[12px]', 'h-[12px]'].map((item, index) => (
                <div key={index} className={`w-[1.1px] rounded-full bg-neutral-50 ${item}`} />
              ))}
              <div className='relative h-[116px] w-[1.1px] bg-red-500 rounded-full'>
                <div className='rounded-full size-2 bg-red-500 absolute top-0 -translate-x-1/2 left-1/2' />
              </div>
              {Array.from({ length: 29 }, (_, i) => (
                <div key={i} className='w-[1px] h-1 bg-gradient-to-b from-neutral-500 to-neutral-700' />
              ))}
            </div>
            {/*  */}
            <div className='w-full relative z-40'>
              <span className='text-neutral-100 text-5xl font-light leading-none'>00:30:31</span>
            </div>
          </div>
          {/*  */}
          <div className='flex gap-2 w-full'>
            <div className='w-14 border block bg-neutral-900 rounded-lg'></div>
            <div className='grid grid-cols-58 gap-x-[2.5px] gap-y-[2px] me-1'>
              {Array.from({ length: 290 }, (_, i) => (
                <div key={i} className='size-[2.8px] rounded-full bg-gradient-to-b from-neutral-900 to-neutral-500' />
              ))}
            </div>
          </div>
          {/*  */}
          <div className='w-full grid grid-cols-3 gap-[1.5px] p-[1.5px] rounded-2xl bg-[#1d1d1d] overflow-hidden h-32'>
            <div className='flex items-center justify-center bg-[#e7e7e7] border-t-[1px] border-white rounded-l-[15px] rounded-r-sm'>
              <div className='size-13 flex items-center justify-center rounded-full border'>
                <div className='size-4 bg-red-600/50 rounded-full border' />
              </div>
            </div>
            <div className='flex items-center justify-center bg-[#dadada] border-t-[1.2px] border-white rounded-sm'>
              <div className='relative size-13 flex items-center justify-center rounded-full bg-[#bcb9ba] overflow-hidden'>
                <div className='size-3.5 bg-[#808080] rounded-[2px] z-10' />
                <div className='absolute -bottom-7 bg-[#efefef] h-17 w-19 rounded-full border blur-[10px]' />
              </div>
            </div>
            <div className='flex flex-col gap-[1.5px]'>
              <div className='flex items-center justify-center flex-1 bg-[#e7e7e7] border-t-[1px] border-white rounded-sm rounded-tr-[15px]'>
                <div className='size-10 flex items-center justify-center rounded-full border'>
                  <TbWifi />
                </div>
              </div>
              <div className='flex items-center justify-center flex-1 bg-[#e7e7e7] border-t-[1px] border-white rounded-sm rounded-br-[15px]'>
                <div className='size-10 flex items-center justify-center rounded-full border'>
                  <TbReload />
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
