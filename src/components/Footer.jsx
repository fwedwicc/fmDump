import React from 'react'
import FMLogo from '/fm-logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='flex-center p-4'>
      <div className='flex-center gap-3'>
        {/* Logo */}
        <div className='relative size-10 rounded-[12px] bg-zinc-900 shadow-lg shadow-zinc-500/40 flex flex-center'>
          <div className='absolute -top-4 -translate-x-1/2 left-1/2 bg-zinc-300/30 w-[120%] h-12 blur-2xl' />
          <img src={FMLogo} alt="FM Logo" className='w-3 h-auto' />
        </div>
        {/* Credits */}
        <div>
          <h4>fmDump_</h4>
          <a href='https://fwedwicc.com' target='_blank' rel='noopener noreferrer'><p>fwedwicc @ {currentYear}</p></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
