import React from 'react'
import { TbCaretRightFilled, TbPlane, TbSmartHome } from "react-icons/tb"
import { IoFootstepsSharp } from "react-icons/io5"
import { LuCarTaxiFront } from "react-icons/lu"

const Skeleton004 = () => {

  const CircleProgress = ({ percent = 17, size = 40, strokeWidth = 2.5 }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    return (
      <div className="flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-black' strokeWidth={strokeWidth} fill="none" />
          <circle cx={size / 2} cy={size / 2} r={radius} className='stroke-black' strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <span className="absolute text-xs">
          {percent}%
        </span>
      </div>
    )
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-y-2.5 w-full min-w-[30rem]'>
        <div className='relative w-[13rem] p-[1px] rounded-full border overflow-hidden'>
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-4 w-[60%] h-4 rounded-t-full z-10' />
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-5 w-[30%] h-3 rounded-t-full z-10' />
          <div className='flex items-center justify-between rounded-full py-2.5 px-5 border z-50'>
            <div className='flex items-center gap-3'>
              <TbPlane className='size-5 stroke-[1.5px] -rotate-90' />
              <span className='text-sm'>Flight</span>
            </div>
            <span className='text-sm'>~3 hours</span>
          </div>
        </div>
        <div className='relative w-[21rem] p-[1px] rounded-full border overflow-hidden'>
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-4 w-[60%] h-4 rounded-t-full z-10' />
          <div className='absolute -translate-x-1/2 left-1/2 -bottom-5 w-[30%] h-3 rounded-t-full z-10' />
          <div className='flex items-center justify-between rounded-full py-2.5 px-5 border z-50'>
            <div className='flex items-center gap-3'>
              <LuCarTaxiFront className='size-5 stroke-[1.5px]' />
              <span className='text-sm'>Driving</span>
            </div>
            <span className='text-sm'>~18 hours</span>
          </div>
        </div>
        <div className='w-full p-[3.5px] rounded-[36px] border'>
          <div className='relative border w-full rounded-[33px] pt-4 pb-6 px-6 space-y-5.5 overflow-hidden'>
            <div className='absolute w-[120%] h-36 -top-20 -translate-x-1/2 left-1/2 z-10 rounded-b-full' />
            <div className='absolute w-[30%] h-14 -top-4 -translate-x-1/2 left-1/2 z-10 rounded-full' />
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex items-center gap-3'>
                <IoFootstepsSharp className='size-5.5' />
                <span className='text-sm'>Walking</span>
              </div>
              <div className='absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2'>
                <CircleProgress />
              </div>
              <button className='flex items-center gap-1 pl-4 pr-3 py-[7px] border rounded-full text-xs'>
                <span>
                  Next Step
                </span>
                <TbCaretRightFilled className='size-3.5' />
              </button>
            </div>
            <div className='relative flex items-center justify-between z-50'>
              <div className='flex flex-col text-start'>
                <span className='text-[10px] font-thin'>Distance</span>
                <span className='text-[26px] font-bold leading-none'>2 miles</span>
              </div>
              <div className='flex flex-col text-end'>
                <span className='text-[10px] font-thin'>Time</span>
                <span className='text-[26px] font-bold leading-none'>~40 minutes</span>
              </div>
            </div>
            <div className='relative space-y-3 z-50'>
              <div className='relative h-4.5 w-full rounded-full border'>
                <div className='absolute w-[35%] h-full border rounded-full'>
                  <div className='grid place-content-center absolute size-8.5 rounded-full -right-2 -translate-y-1/2 top-1/2 border overflow-hidden'>
                    <div className='absolute size-8.5 border-t rounded-full' />
                    <div className='absolute size-8.5 border-l-2 rounded-full' />
                    <div className='absolute size-8.5 border-r rounded-full' />
                    <div className='size-4.5 border rounded-full' />
                  </div>
                </div>
              </div>
              <div className='relative flex items-center justify-between'>
                <div className='text-start'>
                  <span className='block text-[10px] font-thin'>Start</span>
                  <span className='block text-[12.5px] font-medium leading-none'>10:00 AM</span>
                </div>
                <div className='text-start absolute left-33'>
                  <span className='block text-[10px] font-thin'>Travel time</span>
                  <span className='block text-[12.5px] font-medium leading-none'>15 mins</span>
                </div>
                <div className='text-end'>
                  <span className='block text-[10px] font-thin'>End</span>
                  <span className='block text-[12.5px] font-medium leading-none'>10:40 AM</span>
                </div>
              </div>
              <div className='flex items-center justify-between mt-6.5'>
                <div className='flex items-center gap-2.5'>
                  <div className='h-11 w-[2.5px] rounded-full bg-black' />
                  <div>
                    <div className='flex items-center gap-1.5'>
                      <span className='block text-[10px] font-thin'>New Stops</span>
                      <span className='text-[12.5px]'>Columbus Circle</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <span className='block text-[10px] font-thin'>Next Stops</span>
                      <span className='text-[12.5px]'>Times Square</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='relative size-11.5 rounded-lg overflow-hidden'>
                    <img src="https://placehold.co/30x30" alt="Sample yarn" className='absolute object-cover size-full saturate-70' />
                  </div>
                  <div className='relative size-11.5 rounded-lg overflow-hidden'>
                    <img src="https://placehold.co/30x30" alt="Sample yarn" className='absolute object-cover size-full saturate-70' />
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

export default Skeleton004