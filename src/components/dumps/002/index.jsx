import React from 'react'
import { TbMoonFilled, TbSparkles } from "react-icons/tb"

const UI002 = () => {
  return (
    <div className='bg-neutral-100'>
      <div className='z-10 absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-md mt-8 h-[25rem] bg-neutral-900/10 blur-2xl' />
      <div className='z-20 p-6 rounded-[2.7rem] bg-neutral-800 shadow-2xl shadow-neutral-950/60'>
        <div className='m-2 p-3 rounded-full size-70 bg-gradient-to-b from-neutral-700/70 to-neutral-900/50 saturate-80'>
          <div className='p-3 size-full rounded-full bg-neutral-900 shadow-2xl shadow-neutral-900/80'>
            <div className='rounded-full size-full bg-gradient-to-b from-violet-400/50 to-violet-700/20 p-[1.6px]'>
              <div className='size-full rounded-full grid place-content-center bg-neutral-900/60'>
                <TbMoonFilled className='size-36 text-violet-400/70 blur-md' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-end mt-3.5 p-1'>
          <div className='flex flex-col'>
            <span className='text-xl font-medium text-zinc-100'>Zen Mode</span>
            <span className='text-sm font-medium text-zinc-400'>Active</span>
          </div>
          <div className='bg-violet-400/10 p-4 rounded-full saturate-90'>
            <TbSparkles className='size-6.5 text-violet-400 saturate-50' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI002
