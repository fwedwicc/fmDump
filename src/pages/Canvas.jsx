import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbSmartHome, TbMenu2, TbGridDots, TbSquareRounded, TbChevronLeft, TbHeartFilled, TbPencil, TbSquareRoundedChevronsDown, TbSettings, TbBell, TbChevronRight } from "react-icons/tb"
import { PiWifiHighFill, PiCellSignalFullFill } from "react-icons/pi"
import { BiSolidBattery } from "react-icons/bi"

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
      <div className='relative grid grid-cols-2 gap-0.5 w-full min-w-[28rem] h-130 rounded-3xl overflow-hidden bg-gradient-to-b from-[#EAEBEB] to-[#878788] shadow-2xl shadow-neutral-950/60'>
        <div className='flex justify-start size-full rounded-l-3xl py-0.5 pl-0.5 rounded-r-sm bg-neutral-600'>
          <div className='h-full bg-neutral-800 rounded-l-[22px] rounded-r-sm w-51.75' />
        </div>
        <div className='flex justify-end size-full rounded-r-3xl py-0.5 pr-0.5 rounded-l-sm bg-neutral-600'>
          <div className='h-full bg-neutral-800 rounded-r-[22px] rounded-l-sm w-51.75' />
        </div>
        <div className='absolute w-full h-full p-1'>
          <div className='size-full bg-neutral-800 rounded-[24px] p-1'>
            <div className='flex flex-col size-full bg-neutral-950 rounded-[16px] overflow-hidden'>
              <div className='relative w-full h-full flex-1 flex-col'>
                <img src='https://plus.unsplash.com/premium_photo-1728566648330-7ba0d675f3c6?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='sample' className='size-full object-cover absolute z-40'></img>
                <div className='absolute -top-5.5 -translate-x-1/2 left-1/2  bg-neutral-950 h-17 w-[120%] z-40 blur-md' />
                <div className='absolute -top-5.5 -translate-x-1/2 left-1/2  bg-neutral-950/90 h-30 w-[120%] z-40 blur-2xl' />
                <div className='flex items-center justify-between absolute py-1.5 px-2.25 w-full bg-neutral-950 z-50'>
                  <p className='text-neutral-300 text-[9px] leading-none'>14:19</p>
                  <div className='flex items-center gap-0.25'>
                    <PiWifiHighFill className='size-2.5 text-neutral-200' />
                    <PiCellSignalFullFill className='size-2.5 text-neutral-200 mt-[1.8px]' />
                    <BiSolidBattery className='size-2.5 text-neutral-200 -rotate-90' />
                  </div>
                </div>
                <div className='flex flex-col justify-between h-full p-4.25 pt-10 relative z-50'>
                  <div className='space-y-2.5'>
                    <div className='flex items-center justify-between -mt-3'>
                      <p className='text-neutral-300 text-[17px] leading-none tracking-tight'>pl<span className='montecarlo-font text-[28px] leading-none'>a</span><span className='italic leading-none'>n</span>to</p>
                      <div className='flex items-center gap-2'>
                        <TbBell className='size-4.5 text-neutral-300 stroke-[1.5px]' />
                        <TbSettings className='size-4.5 text-neutral-300 stroke-[1.5px]' />
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <div className='flex items-center rounded-full bg-black/40 divide-x divide-neutral-400/30'>
                          <div className='flex items-center justify-center pr-1.5 pl-2.5 py-1.25 overflow-hidden'>
                            <p className='text-neutral-300 text-xs leading-none'>Ivy</p>
                          </div>
                          <div className='flex items-center justify-center pr-2.5 pl-2 py-1.25 overflow-hidden'>
                            <TbPencil className='size-4 text-neutral-300 stroke-[1.5px]' />
                          </div>
                        </div>
                        <div className='flex items-center gap-1 py-1.75 px-2.75 pr-3 rounded-full bg-black/50'>
                          <TbHeartFilled className='size-3.25 text-[#DF732D]' />
                          <p className='text-neutral-300 text-xs leading-none'>82%</p>
                        </div>
                      </div>
                      <div className='size-7 flex items-center justify-center rounded-full bg-neutral-700/40 -mr-[4px]'>
                        <TbSquareRoundedChevronsDown className='size-5 text-neutral-300 stroke-[1.5px]' />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-end justify-between'>
                    <div className='relative flex flex-col items-center gap-2.25 p-3 min-w-[7rem] bg-white rounded-xl'>
                      <TbChevronRight className='size-4 stroke-[2px] text-neutral-800 absolute right-1.5 top-2.25' />
                      <div className='flex items-center justify-between w-full mb-0.5'>
                        <p className='leading-none font-bold text-8px] text-neutral-800'>Condition</p>
                      </div>
                      <div className='flex items-center w-full gap-2'>
                        <div className='flex items-center justify-center p-1 bg-red-500 text-white rounded-full'>
                          <TbChevronRight className='size-4.5 stroke-[2px]' />
                        </div>
                        <div className='space-y-0.25'>
                          <p className='text-[7px] text-neutral-400 leading-none'>Water</p>
                          <p className='text-[12px] font-medium leading-none'>90%</p>
                        </div>
                      </div>
                      <div className='flex items-center w-full gap-2'>
                        <div className='flex items-center justify-center p-1 bg-red-500 text-white rounded-full'>
                          <TbChevronRight className='size-4.5 stroke-[2px]' />
                        </div>
                        <div className='space-y-0.25'>
                          <p className='text-[7px] text-neutral-400 leading-none'>Light</p>
                          <p className='text-[12px] font-medium leading-none'>30%</p>
                        </div>
                      </div>
                      <div className='flex items-center w-full gap-2'>
                        <div className='flex items-center justify-center p-1 bg-red-500 text-white rounded-full'>
                          <TbChevronRight className='size-4.5 stroke-[2px]' />
                        </div>
                        <div className='space-y-0.25'>
                          <p className='text-[7px] text-neutral-400 leading-none'>Temperture</p>
                          <p className='text-[12px] font-medium leading-none'>24°</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-2.5 bg-neutral-900 px-1.25 py-[4.5px] pr-4.5 rounded-full'>
                      <div className='px-4.5 py-1.75 bg-neutral-100 rounded-full'>
                        <p className='text-neutral-900 font-bold text-[9px] leading-none'>Home</p>
                      </div>
                      <p className='text-white text-[9px] leading-none'>Community</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between w-full px-8 h-7.5 bg-neutral-900'>
                <TbGridDots className='size-3.25 stroke-[2px] text-neutral-50' />
                <div className='flex items-center gap-6'>
                  <TbMenu2 className='size-3.25 stroke-[2px] text-neutral-50 rotate-90' />
                  <TbSquareRounded className='size-3.25 stroke-[2px] text-neutral-50' />
                  <TbChevronLeft className='size-3.25 stroke-[2px] text-neutral-50' />
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
