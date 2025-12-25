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
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='flex w-[24rem] p-[0.2px] pb-3 rounded-[21px] border'>
        <div className='flex flex-col justify-end gap-4 items-end size-full rounded-[20.8px] p-2 bg-neutral-200/60 border'>
          {/*  */}
          <div className='relative flex flex-col items-center justify-between p-5 h-100 rounded-[16px] w-full bg-neutral-900 border'>
            <div className='flex flex-col gap-[2px] absolute top-1/2 -translate-y-1/2 w-[98.5%] h-[98.5%] rounded-[14px] overflow-hidden border border-neutral-600'>
              {Array.from({ length: 120 }, (_, i) => (
                <div key={i} className='w-full h-[1.5px] bg-neutral-800/80' />
              ))}
            </div>
            {/*  */}
            <div className='flex justify-between w-full border border-neutral-500'>
              <div className='flex gap-7 border border-neutral-500 relative z-20'>
                <p className='text-neutral-400 leading-none text-[10px]'>11:11 PM</p>
                <div className='flex items-center gap-1 border border-neutral-500'>
                  <div className='size-1.5 rounded-full bg-red-400 border' />
                  <p className='text-neutral-400 leading-none text-[10px]'>NEW RECORDING</p>
                </div>
              </div>
              <div className='flex gap-3 border border-neutral-500'>
                <p className='text-neutral-400 leading-none text-[10px]'>s</p>
                <p className='text-neutral-400 leading-none text-[10px]'>s</p>
              </div>
            </div>
            {/*  */}
            <div className='relative z-20 flex items-center gap-[3.4px]'>
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
            <div className='w-full relative z-20 border border-neutral-500'>
              <span className='text-neutral-100 text-4xl font-medium leading-none'>00:30:31</span>
            </div>
          </div>
          {/*  */}
          <div className='flex gap-2 border w-full'>
            <div className='w-12 border rounded-lg'></div>
            <div className='grid grid-cols-44 gap-x-[3px] gap-y-[2px] border'>
              {Array.from({ length: 176 }, (_, i) => (
                <div key={i} className='size-1 rounded-full border' />
              ))}
            </div>
          </div>
          {/*  */}
          <div className='w-full grid grid-cols-3 gap-[1.5px] p-[1.5px] rounded-2xl bg-neutral-900 overflow-hidden h-34'>
            <div className='flex items-center justify-center bg-[#e7e7e7] border-t-[1px] border-white rounded-l-[15px] rounded-r-sm'>
              <div className='size-13 flex items-center justify-center rounded-full border'>
                <div className='size-4 bg-red-600/50 rounded-full border' />
              </div>
            </div>
            <div className='flex items-center justify-center bg-[#e7e7e7] border-t-[1px] border-white rounded-sm'>
              <div className='size-13 flex items-center justify-center rounded-full border'>
                <div className='size-3.5 bg-neutral-500 rounded-[2px] border' />
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
