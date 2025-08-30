import React from 'react'
import { TbCaretRightFilled, TbPlane, TbSmartHome } from "react-icons/tb"
import { IoFootstepsSharp } from "react-icons/io5"
import { LuCarTaxiFront } from "react-icons/lu"

const UI004 = () => {

  const CircleProgress = ({ percent = 17, size = 40, strokeWidth = 2.5 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    return (
      <div className="flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-purple-100/20' strokeWidth={strokeWidth} fill="none" />
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-purple-300' strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs bg-gradient-to-b from-violet-500/70 via-violet-100 to-violet-50 bg-clip-text text-transparent">
          {percent}%
        </span>
      </div>
    )
  }

  return (
    <div className='bg-neutral-100'>
      <div className='flex flex-col items-center justify-center gap-y-2.5 w-full min-w-[30rem]'>
        <div className='relative w-[13rem] p-[1px] rounded-full bg-gradient-to-b from-purple-950/70 via-purple-950/60 to-neutral-700/80 overflow-hidden'>
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-4 w-[60%] h-4 rounded-t-full bg-purple-600 blur-xl z-10' />
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-5 w-[30%] h-3 rounded-t-full bg-purple-400 blur-lg z-10' />
          <div className='flex items-center justify-between rounded-full py-2.5 px-5  bg-neutral-950 z-50'>
            <div className='flex items-center gap-3'>
              <TbPlane className='size-5 stroke-[1.5px] text-purple-200/80 -rotate-90' />
              <span className='text-sm bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200 bg-clip-text text-transparent'>Flight</span>
            </div>
            <span className='text-sm bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200 bg-clip-text text-transparent'>~3 hours</span>
          </div>
        </div>
        <div className='relative w-[21rem] p-[1px] rounded-full bg-gradient-to-b from-purple-950/70 via-purple-950/60 to-neutral-700/80 overflow-hidden'>
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-4 w-[60%] h-4 rounded-t-full bg-purple-600 blur-xl z-10' />
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-5 w-[30%] h-3 rounded-t-full bg-purple-400 blur-lg z-10' />
          <div className='flex items-center justify-between rounded-full py-2.5 px-5 bg-neutral-950 z-50'>
            <div className='flex items-center gap-3'>
              <LuCarTaxiFront className='size-5 stroke-[1.5px] text-purple-200/80' />
              <span className='text-sm bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200 bg-clip-text text-transparent'>Driving</span>
            </div>
            <span className='text-sm bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200 bg-clip-text text-transparent'>~18 hours</span>
          </div>
        </div>
        <div className='w-full p-[3.5px] rounded-[36px] border border-neutral-600 bg-gradient-to-b from-purple-950/70 via-purple-950/60 to-neutral-700/80 shadow-2xl shadow-neutral-500/60'>
          <div className='relative bg-neutral-950 w-full rounded-[33px] pt-4 pb-6 px-6 space-y-5.5 overflow-hidden'>
            <div className='absolute w-[120%] h-36 -top-20 -translate-x-1/2 left-1/2 bg-purple-500/40 z-10 rounded-b-full blur-3xl' />
            <div className='absolute w-[30%] h-14 border -top-4 -translate-x-1/2 left-1/2 bg-purple-500/60 z-10 rounded-full blur-2xl' />
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex items-center gap-3'>
                <IoFootstepsSharp className='size-5.5 text-purple-300' />
                <span className='text-sm bg-gradient-to-b from-violet-500/70 via-violet-200/90 to-violet-100/90 bg-clip-text text-transparent'>Walking</span>
              </div>
              <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2'>
                <CircleProgress />
              </div>
              <button className='flex items-center gap-1 pl-4 pr-3 py-[7px] border rounded-full text-xs border-violet-300/60'>
                <span className='bg-gradient-to-b from-violet-500/70 via-violet-200/90 to-violet-100/90 bg-clip-text text-transparent'>
                  Next Step
                </span>
                <TbCaretRightFilled className='size-3.5 text-purple-300' />
              </button>
            </div>
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex flex-col text-start'>
                <span className='text-[10px] text-violet-100/30 font-thin'>Distance</span>
                <span className='text-[26px] font-bold leading-none bg-gradient-to-b from-violet-400/80 via-violet-300/80 to-violet-200/90 bg-clip-text text-transparent'>2 miles</span>
              </div>
              <div className='flex flex-col text-end'>
                <span className='text-[10px] text-violet-100/30 font-thin'>Time</span>
                <span className='text-[26px] font-bold leading-none bg-gradient-to-b from-violet-400/80 via-violet-300/80 to-violet-200/90 bg-clip-text text-transparent'>~40 minutes</span>
              </div>
            </div>
            <div className='relative space-y-3 z-50'>
              <div className='relative h-4.5 w-full rounded-full bg-violet-400/20'>
                <div className='absolute w-[35%] h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300 rounded-full'>
                  <div className='grid place-content-center absolute size-8.5 rounded-full -right-2 -translate-y-1/2 top-1/2 bg-neutral-50/20 backdrop-blur-[3px] overflow-hidden'>
                    <div className='absolute size-8.5 border-t border-white/40 rounded-full blur-[2px]' />
                    <div className='absolute size-8.5 border-l-2 border-white rounded-full blur-xs' />
                    <div className='absolute size-8.5 border-r border-white/60 rounded-full blur-[1.5px]' />
                    <div className='size-4.5 bg-neutral-100 rounded-full' />
                  </div>
                </div>
              </div>
              <div className='relative flex items-center justify-between'>
                <div className='text-start'>
                  <span className='block text-[10px] text-violet-100/30 font-thin'>Start</span>
                  <span className='block text-[12.5px] font-medium bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200/90 bg-clip-text text-transparent leading-none'>10:00 AM</span>
                </div>
                <div className='text-start absolute left-33'>
                  <span className='block text-[10px] text-violet-100/30 font-thin'>Travel time</span>
                  <span className='block text-[12.5px] font-medium bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200/90 bg-clip-text text-transparent leading-none'>15 mins</span>
                </div>
                <div className='text-end'>
                  <span className='block text-[10px] text-violet-100/30 font-thin'>End</span>
                  <span className='block text-[12.5px] font-medium bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200/90 bg-clip-text text-transparent leading-none'>10:40 AM</span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-6.5'>
                <div className='flex items-center gap-2.5'>
                  <div className='h-11 w-[2.5px] rounded-full bg-purple-500 blur-[0.5px]' />
                  <div>
                    <div className='flex items-center gap-1.5'>
                      <span className='block text-[10px] text-violet-100/30 font-thin'>New Stops</span>
                      <span className='text-[12.5px] bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200/90 bg-clip-text text-transparent'>Columbus Circle</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <span className='block text-[10px] text-violet-100/30 font-thin'>Next Stops</span>
                      <span className='text-[12.5px] bg-gradient-to-b from-neutral-400/80 via-neutral-300/80 to-neutral-200/90 bg-clip-text text-transparent'>Times Square</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='relative size-11.5 rounded-lg overflow-hidden'>
                    <img src="https://images.unsplash.com/photo-1705415373860-4f49f767360c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample yarn" className='absolute object-cover size-full saturate-70' />
                  </div>
                  <div className='relative size-11.5 rounded-lg overflow-hidden'>
                    <img src="https://plus.unsplash.com/premium_photo-1695735924535-f7a3cc90dcd0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample yarn" className='absolute object-cover size-full saturate-70' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI004