import React from 'react'
import { TbMoonFilled, TbSparkles } from "react-icons/tb"

const UI002 = () => {
  return (
    <div>
      <div className='z-20 p-6 rounded-[2.7rem] border bg-white overflow-hidden relative'>
        <div className='z-10 absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-md mt-8 h-[25rem]' />
        <div className='m-2 p-3 rounded-full size-70 border'>
          <div className='p-3 size-full rounded-full border'>
            <div className='rounded-full size-full border p-[1.6px]'>
              <div className='size-full rounded-full grid place-content-center border'>
                <TbMoonFilled className='size-36' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-end mt-3.5 p-1'>
          <div className='flex flex-col'>
            <span className='text-xl font-medium'>Zen Mode</span>
            <span className='text-sm font-medium'>Active</span>
          </div>
          <div className='border p-4 rounded-full saturate-90'>
            <TbSparkles className='size-6.5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UI002
