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
      <p>UI hunting hehe :)</p>
    </motion.section>
  )
}

export default Canvas
