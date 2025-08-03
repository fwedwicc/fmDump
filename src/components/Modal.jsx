import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from "react-icons/hi"

const Modal = ({ isOpen, onClose, size, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex-center p-4 bg-zinc-300/10 backdrop-blur-md z-50"
          onClick={onClose}
        >
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 150, damping: 13, bounce: 0.70 }}
            className={`relative bg-white border border-zinc-200 rounded-4xl p-7 w-full ${size}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children || 'hello'}
            <button
              onClick={onClose}
              className="absolute -top-9 -right-9 size-11 flex-center bg-white/40 backdrop-blur-lg rounded-full active:scale-95 cursor-pointer"
            >
              <HiOutlineX />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal