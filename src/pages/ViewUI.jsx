import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UI001, UI002, UI003 } from '../components/dumps'

const componentMap = {
  ui001: UI001,
  ui002: UI002,
  ui003: UI003,
}

const ViewUI = () => {
  const { id } = useParams()
  const ComponentToRender = componentMap[id]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden grid place-content-center'
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 1,
        }}
      >
        {ComponentToRender ? <ComponentToRender /> : <p>UI not found</p>}
      </motion.div>
    </motion.section>
  )
}

export default ViewUI
