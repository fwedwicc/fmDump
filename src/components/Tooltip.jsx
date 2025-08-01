import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Tooltip = ({ children, content, styles }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className='relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, x: 8, scale: 0.95 }}
        animate={
          hovered
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 8, scale: 0.95 }
        }
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 14,
          bounce: 0.45,
        }}
        className={`absolute ${styles} rounded-2xl px-3.5 py-3 border border-zinc-200 bg-zinc-100 shadow-lg shadow-zinc-300/30 pointer-events-none`}
      >
        <p>{content}</p>
      </motion.div>
    </div>
  )
}

export default Tooltip
