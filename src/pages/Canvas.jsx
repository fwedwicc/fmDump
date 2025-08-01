import React from 'react'
import { motion } from 'framer-motion'

const Canvas = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'
    >
      <div className='flex-col flex-center pb-3 bg-lime-300 rounded-[43px] space-y-2.5'>
        <div className='w-md h-36 rounded-[43px] bg-neutral-900 text-neutral-200'>
          asdf
        </div>
        <span className='text-sm'>hello</span>
      </div>
    </motion.section>
  )
}

export default Canvas
