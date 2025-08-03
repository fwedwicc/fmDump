import React from 'react'
import FMLogo from '/fm-logo.png'
import { TbBrandLinkedin, TbBrandDribbble, TbBrandBehance, TbBrandGithub, TbLink } from "react-icons/tb"

const Header = () => {
  return (
    <header className='fixed z-50 top-0 w-full md:p-4 p-2 bg-zinc-100/80 backdrop-blur-xl'>
      <div className='flex justify-between items-start gap-6'>
        <div className='flex items-center md:gap-x-5 gap-x-3'>
          {/* Logo */}
          <div className='relative md:size-22 size-20 shrink-0 p-[1px] md:rounded-[23px] rounded-[20px] bg-gradient-to-b from-zinc-200 to-zinc-900 shadow-lg shadow-zinc-500/40'>
            <div className='absolute -top-4 -translate-x-1/2 left-1/2 bg-zinc-300/30 w-[120%] h-12 blur-2xl' />
            <div className='grid place-content-center w-full h-full bg-zinc-900 md:rounded-[22px] rounded-[19px]'>
              <img src={FMLogo} alt="FM Logo" className='md:w-6 w-4.5 h-auto' />
            </div>
          </div>
          {/* Left Content */}
          <div className='md:space-y-2 space-y-1'>
            <h1>fmDump_</h1>
            <p className='w-full max-w-xs text-pretty'>Brilliant designers can't code their designs, so I did :) <br className='md:flex hidden' />~ Just me, boredom, and some UI replicas. </p>
          </div>
        </div>
        {/* Right Content */}
        <button className='md:hidden flex'>
          <TbLink className='size-6 stroke-[2px] text-neutral-800' />
        </button>
        <div className='md:flex hidden flex-col items-end gap-3'>
          <a href='https://buymeacoffee.com/fwedwicc' target='_blank' rel='noopener noreferrer' className='button-base button-primary'>Buy me a coffee</a>
          <div className='flex gap-1'>
            {[
              { icon: TbBrandGithub, link: 'https://github.com/fwedwicc' },
              { icon: TbBrandDribbble, link: 'https://dribbble.com/fwedwic' },
              { icon: TbBrandBehance, link: 'https://www.behance.net/fwedwicc' },
              { icon: TbBrandLinkedin, link: 'https://www.linkedin.com/in/frederick-moreno/' },
            ].map((item, index) => (
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='hover:bg-zinc-200/30 transition-smooth p-2.5 grid place-content-center rounded-xl' key={index}>
                <item.icon className='size-4 text-zinc-600' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
