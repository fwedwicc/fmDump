import React from 'react'

const Canvas = () => {
  return (
    <section className='relative h-screen bg-neutral-100 grid place-content-center'>
      <div className='z-10 absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 w-md mt-8 h-[25rem] bg-neutral-900/10 blur-2xl' />
      <div className='z-20 p-6 rounded-[2.7rem] bg-neutral-800 shadow-2xl shadow-neutral-950/60'>
        <div className='m-2 p-3 rounded-full size-70 bg-neutral-600'>
          <div className='p-3 size-full rounded-full bg-neutral-900'>
            <div className='rounded-full size-full bg-violet-500 p-1'>
              <div className='size-full rounded-full grid place-content-center bg-neutral-800/50'>

              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-end mt-5 p-1'>
          <div className='flex flex-col'>
            <span className='text-xl font-medium text-zinc-100'>Zen Mode</span>
            <span className='text-sm font-medium text-zinc-400'>Active</span>
          </div>
          <div className='bg-violet-500/70 p-7 rounded-full'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Canvas
