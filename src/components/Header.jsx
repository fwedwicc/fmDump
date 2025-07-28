import React from 'react'
import FMLogo from '/fm-logo.png'
import { TbBrandLinkedin, TbBrandDribbble, TbBrandBehance, TbBrandGithub } from "react-icons/tb"

const Header = () => {
  return (
    <header className='fixed z-50 top-0 w-full p-4 bg-zinc-100/80 backdrop-blur-xl'>

      <div className='flex justify-between items-start'>
        <div className='flex items-center gap-x-5'>
          {/* Logo */}
          <div className='relative size-22 p-[1px] rounded-[23px] bg-gradient-to-b from-zinc-200 to-zinc-900 shadow-lg shadow-zinc-500/40'>
            <div className='absolute -top-4 -translate-x-1/2 left-1/2 bg-zinc-300/30 w-[120%] h-12 blur-2xl' />
            <div className='grid place-content-center w-full h-full bg-zinc-900 rounded-[22px]'>
              <img src={FMLogo} alt="FM Logo" className='w-6 h-auto' />
            </div>
          </div>

          {/* Left Content */}
          <div className='space-y-2'>
            <h1>fmDump_</h1>
            <p className='w-full max-w-xs text-pretty'>Lorem ipsum dolor sit amet conlor sit amet clor sitetur elit. Qui sunt suscipit iste molestiae odio.</p>
          </div>
        </div>

        {/* Right Content */}
        <div className='grid grid-cols-3 gap-1'>
          <div className='bg-zinc-200/30 p-3 grid place-content-center rounded-xl'>
            <TbBrandBehance className='size-4 text-zinc-600' />
          </div>
          <div className='bg-zinc-200/30 p-3 grid place-content-center rounded-xl'>
            <TbBrandDribbble className='size-4 text-zinc-600' />
          </div>
          <div className='bg-zinc-200/30 p-3 grid place-content-center rounded-xl'>
            <TbBrandLinkedin className='size-4 text-zinc-600' />
          </div>
          <div className='bg-zinc-200/30 p-3 grid place-content-center rounded-xl'>
            <TbBrandGithub className='size-4 text-zinc-600' />
          </div>
          {/* <div className='bg-zinc-200/30 p-2 grid place-content-center rounded-xl'>
          <TbBrandGithub className='size-5 text-zinc-600' />
        </div> */}
          <div className='bg-zinc-200/40 p-5 rounded-xl col-span-2'></div>
        </div>
      </div>

    </header>
  )
}

export default Header
