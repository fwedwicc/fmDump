import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from "react-icons/hi"

const Modal = ({ isOpen, onClose, size, header, children }) => {
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
            className={`relative bg-white border border-zinc-200 rounded-4xl w-full ${size} flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-auto min-h-0 horizontal-scrollbar vertical-scrollbar w-full rounded-4xl">
              {/* Header */}
              <div
                className={`flex justify-between py-1.5 pl-1.5 pr-0.5 ${header === 'sticky'
                  ? 'sticky top-0 left-0 bg-white/80 backdrop-blur-xl z-10 min-w-full'
                  : 'absolute top-0 right-0'
                  }`}
              >
                <div></div>
                <button onClick={onClose} className="size-11 flex-center bg-zinc-50 hover:bg-zinc-100/80 transition-smooth rounded-full active:scale-95 cursor-pointer z-50">
                  <HiOutlineX />
                </button>
              </div>
              {/* Body */}
              <div className="p-7">
                {children || 'hello'}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
