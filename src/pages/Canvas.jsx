import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tooltip } from '../components'
import { TbSmartHome } from "react-icons/tb"

// Recording Device
const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      // bg-gradient-to-b from-[#e7e7e7] to-[#dcdcdc]
      className='relative h-screen overflow-hidden grid place-content-center'
    >
      {/* ------------------------ PLAYGROUND ------------------------ */}
      <div className='flex flex-col items-center gap-4'>
        <img src="https://imgs.search.brave.com/9yGZGavieHxiT7ON4lFlWdSZGvG6q6MwbUHM-O3KRsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L3RodW1ibmFpbC90/eXBpbmctY2F0LXR5/cGluZy1naWYtbG5z/emNvN2N5ZmwwcHNh/Yi5naWY.gif" alt="Cat Gif" className='w-40 rounded-xl h-auto' />
        <p className='text-sm text-center'>fred is currently working...</p>
      </div>
      {/* ------------------------ // PLAYGROUND ------------------------ */}
      {/* IGNORE: Back Button */}
      <div className='fixed md:bottom-6 bottom-4 md:right-6 right-4'>
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap right-17' content="Home" animation={8}>
          <Link to='/' className='flex-center size-13 rounded-[17px] button-secondary'>
            <TbSmartHome className='size-4.5 stroke-[2px]' />
          </Link>
        </Tooltip>
      </div>
    </motion.section>
  )
}

export default Canvas
