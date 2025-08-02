import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

// VIBE CODING HAHAHAHA

const ViewWrapper = ({ children, designWidth = 1024 }) => {
  const [scale, setScale] = useState(1)

  const updateScale = useCallback(() => {
    const vw = window.innerWidth
    const baseRatio = vw / designWidth // <1 on small screens

    // When smaller than designWidth, boost slightly so it's not too tiny.
    // Example: if vw/designWidth is 0.5, boost gives ~0.5 + (1 - 0.5)*0.2 = 0.6
    // Cap maximum at 1.1 so it doesn't grow unbounded on very small screens.
    let computed = baseRatio
    if (baseRatio < 1) {
      computed = baseRatio + (1 - baseRatio) * 0.5
    }
    computed = Math.min(1.1, Math.max(0.5, computed)) // clamp between 0.5 and 1.1

    setScale(computed)
  }, [designWidth])

  useEffect(() => {
    updateScale()
    let rafId = null
    const handleResize = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        updateScale()
        rafId = null
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [updateScale])

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 13,
        mass: 1,
      }}
      style={{
        transformOrigin: 'center',
        width: designWidth,
      }}
      className='flex-center'
    >
      {children}
    </motion.div>
  )
}

export default ViewWrapper
