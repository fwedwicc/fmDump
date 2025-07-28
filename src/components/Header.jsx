import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between'>

      <div className='flex gap-x-6'>
        {/* Logo */}
        <div className='relative size-24 p-[1px] rounded-[27px] bg-gradient-to-b from-zinc-300 to-zinc-900 shadow-lg shadow-zinc-500/40'>
          {/* Glow */}
          <div className='absolute -top-4 -translate-x-1/2 left-1/2 bg-zinc-300/30 w-[120%] h-12 blur-2xl' />
          <div className='grid place-content-center w-full h-full bg-zinc-900 rounded-[26px]'>
          </div>
        </div>

        {/* Left Content */}
        <div className=''>
          <p>Frederick Moreno</p>
        </div>
      </div>

      {/* Right Content */}
      <div className=''>
        <h1>Frederick Moreno</h1>
      </div>

    </header>
  )
}

export default Header
