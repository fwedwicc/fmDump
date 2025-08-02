import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex-center p-4 bg-neutral-800/70 z-50"
          onClick={onClose}
        >
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 150, damping: 13, bounce: 0.70 }}
            className="bg-white backdrop-blur-xl p-4 w-full h-64 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {children || 'hello'}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className=""
            >
              close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal