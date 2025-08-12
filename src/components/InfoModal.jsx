import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from "react-icons/hi"

const InfoModal = ({ isOpen, onClose, title, label, desc, credits }) => {
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
            className='relative bg-white border border-zinc-200 rounded-4xl w-full max-w-lg flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-auto min-h-0 horizontal-scrollbar vertical-scrollbar w-full rounded-4xl">
              {/* Close Button */}
              <button onClick={onClose} className="absolute top-1.5 right-1.5 size-11 flex-center bg-zinc-50 hover:bg-zinc-100/80 transition-smooth rounded-full active:scale-95 cursor-pointer z-50">
                <HiOutlineX />
              </button>
              {/* Body */}
              <div className="p-7">
                <div className='space-y-6'>
                  <div className='space-y-2'>
                    <p>{title}</p>
                    <h2>{label}</h2>
                    <p>{desc}</p>
                  </div>
                  <div className='pt-4 space-y-3 border-t border-zinc-100'>
                    <h4>Reference</h4>
                    <a href={credits} target='_blank' rel='noopener noreferrer'>
                      <p className='break-all'>{credits}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InfoModal
