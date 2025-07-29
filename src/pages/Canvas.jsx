import React from 'react'

const Canvas = () => {
  return (
    <section className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'>
      <div className='flex flex-col gap-y-10 bg-white w-sm rounded-4xl p-7 shadow-2xl shadow-neutral-900/20'>
        <div className='flex justify-between items-center'>
          <div className='size-10 border rounded-lg'></div>
          <div className='size-10 border rounded-lg'></div>
        </div>
        <div className='flex flex-col gap-y-1.5'>
          <span className='text-base font-semibold text-neutral-700'>Apple <span className='text-xs font-thin text-neutral-400'>7 days ago</span></span>
          <span className='text-xl font-semibold text-neutral-700'>Senior Design Engineer</span>
          <div className='mt-2 flex gap-2'>
            <span className='px-2.5 py-1 text-xs bg-neutral-200/80 rounded-lg text-neutral-600 font-medium'>Full time</span>
            <span className='px-2.5 py-1 text-xs bg-neutral-200/80 rounded-lg text-neutral-600 font-medium'>Hybrid mode</span>
          </div>
        </div>
        <button className='bg-neutral-800 p-[5px] rounded-3xl shadow-xl shadow-neutral-500/50'>
          <div className='w-full p-[1px] bg-neutral-900 rounded-[20px]'>
            <div className='relative w-full p-3 bg-neutral-900 rounded-[20px] text-lg text-neutral-300/80 text-shadow-lg shadow-black'>
              <div className='absolute w-[87%] top-2 h-2 bg-neutral-200/80 blur-sm' />
              <div className='absolute w-1 right-2 top-2 h-10 bg-neutral-200/30 blur-xs' />
              <div className='absolute w-1 right-2 top-2 h-10 bg-neutral-300/30 blur-sm' />
              Apply now
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Canvas
