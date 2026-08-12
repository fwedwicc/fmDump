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
      className='relative h-screen overflow-hidden bg-gradient-to-b from-[#e7e7e7] to-[#dcdcdc] grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='relative w-[24rem] isolate'>
        <div className='relative z-10 flex w-full p-[0.2px] pb-3.5 rounded-[21px] bg-gradient-to-b from-white to-[#858585] shadow-[-9px_41px_100px_19px_rgba(0,_0,_0,_0.1)]'>
          <div className='absolute top-24 -right-[9px] h-12 w-2.25 bg-gradient-to-b from-white to-neutral-500/80 flex flex-col justify-between rounded-r-xs'>
            <div className='w-[2px] absolute left-0 h-full bg-gradient-to-t from-neutral-700 via-neutral-400 to-neutral-300 z-40' />
            {Array.from({ length: 33 }, (_, i) => (
              <div className='h-[0.7px] w-full bg-neutral-500/20 z-50' />
            ))}
          </div>
          <div className='absolute bg-neutral-700/20 w-10 h-3 rounded-bl-lg rotate-24 -bottom-1.5 -left-1 blur-sm' />
          <div className='absolute bg-neutral-700/20 w-10 h-3 rounded-bl-lg -rotate-24 -bottom-1.5 -right-1 blur-sm' />
          <div className='relative flex flex-col justify-end gap-4 items-end size-full rounded-[20.8px] p-1.75 bg-gradient-to-b from-[#ffffff] to-[#dadada] border-2 border-white z-50'>
            {/*  */}
            <div className='relative flex flex-col items-center justify-between p-5.5 h-100 rounded-[13px] w-full bg-neutral-900 border-[1.2px] border-[#545454] overflow-hidden'>
              {/* <div className='absolute top-0 left-0 w-54 h-38 bg-white/20 blur-[12rem]' /> */}
              <div className='absolute -bottom-8 -translate-x-1/2 left-1/2 w-[140%] h-30 bg-black/80 blur-[3rem] z-30 -rotate-12' />
              <div className='flex flex-col justify-between absolute top-1/2 -translate-y-1/2 w-[98.5%] h-[98.5%] rounded-[11px] overflow-hidden border-t-[1.2px] border-l-[1.2px] border-[#545454]'>
                {Array.from({ length: 116 }, (_, i) => (
                  <div key={i} className='w-full h-[1.5px] bg-gradient-to-r from-neutral-700/60 to-neutral-800/20' />
                ))}
              </div>
              {/*  */}
              <div className='flex justify-between w-full'>
                <div className='flex items-center gap-6 relative z-20'>
                  <p className='text-neutral-400 leading-none text-[10px]'>11:11 PM</p>
                  <div className='flex items-center gap-1'>
                    <div className='size-1.5 rounded-full bg-red-500 border' />
                    <p className='text-neutral-400/70 leading-none text-[10px]'>NEW RECORDING</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 z-40'>
                  <TbPlayerPlayFilled className='size-3 text-neutral-300' />
                  <TbWifi className='size-3.5 text-neutral-300' />
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
                <span className='text-neutral-200 text-5xl font-extralight tracking-wider inter-font leading-none'>02:19:23</span>
              </div>
            </div>
            {/*  */}
            <div className='flex items-center gap-2.75 w-full'>
              <div className='w-14 py-1.75 flex items-center justify-center border bg-neutral-900 rounded-[6.5px]'>
                <TbBatteryVertical1Filled className='size-2.5 text-neutral-300' />
                <span className='text-neutral-300 font-light leading-none text-[9px]'>89%</span>
              </div>
              <div className='grid grid-cols-58 gap-x-[2.5px] gap-y-[2px] me-1'>
                {Array.from({ length: 290 }, (_, i) => (
                  <div key={i} className='size-[2.8px] rounded-full bg-gradient-to-b from-neutral-900 to-neutral-500' />
                ))}
              </div>
            </div>
            {/*  */}
            <div className='w-full grid grid-cols-3 gap-[1.5px] p-[1.5px] rounded-[14px] bg-[#1d1d1d] overflow-hidden h-32'>
              <div className='flex items-center justify-center bg-[#dadada] border-t-[1.2px] border-white rounded-sm rounded-l-[13px] rounded-r-sm'>
                <div className='relative size-13 flex items-center justify-center rounded-full bg-[#bcb9ba] overflow-hidden'>
                  <div className='size-4 bg-[#bd6c69] rounded-full z-40' />
                  <div className='absolute -bottom-7 bg-[#efefef] h-17 w-19 rounded-full border blur-[10px]' />
                </div>
              </div>
              <div className='flex items-center justify-center bg-[#dadada] border-t-[1.2px] border-white rounded-sm'>
                <div className='relative size-13 flex items-center justify-center rounded-full bg-[#bcb9ba] overflow-hidden'>
                  <div className='size-3.5 bg-[#808080] rounded-[2px] z-10' />
                  <div className='absolute -bottom-7 bg-[#efefef] h-17 w-19 rounded-full border blur-[10px]' />
                </div>
              </div>
              <div className='flex flex-col gap-[1.5px]'>
                <div className='flex flex-1 items-center justify-center bg-[#dadada] border-t-[1.2px] border-white rounded-sm rounded-tr-[13px]'>
                  <div className='relative size-10 flex items-center justify-center rounded-full bg-[#bcb9ba] overflow-hidden'>
                    <TbWifi className='z-30 text-neutral-500' />
                    <div className='absolute -bottom-9.5 bg-[#efefef] h-17 w-19 rounded-full border blur-[10px]' />
                  </div>
                </div>
                <div className='flex flex-1 items-center justify-center bg-[#dadada] border-t-[1.2px] border-white rounded-sm rounded-br-[13px]'>
                  <div className='relative size-10 flex items-center justify-center rounded-full bg-[#bcb9ba] overflow-hidden'>
                    <TbReload className='z-30 text-neutral-500' />
                    <div className='absolute -bottom-9.5 bg-[#efefef] h-17 w-19 rounded-full border blur-[10px]' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute -left-60 top-0 h-full w-[150%] rounded-full bg-neutral-400/30 blur-[60px]' />
        <div className='absolute inset-x-0 -bottom-12 z-0 pointer-events-none'>
          <div className='absolute left-1/2 -bottom-2 h-28 w-[92%] -translate-x-1/2 rounded-full bg-neutral-700/60 blur-[32px]' />
          <div className='absolute left-1/2 -top-16 h-3 w-[70%] -translate-x-1/2 rounded-full bg-neutral-800 blur-[24px]' />
          <div className='absolute left-1/2 bottom-8 flex h-20 w-[88%] -translate-x-1/2 items-center justify-between px-4'>
            <div className='mt-16 h-24 w-12 rounded-full bg-neutral-500/50 blur-lg -rotate-20' />
            <div className='mt-16 h-24 w-12 rounded-full bg-neutral-500/50 blur-lg rotate-20' />
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
