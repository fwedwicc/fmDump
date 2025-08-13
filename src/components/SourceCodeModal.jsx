import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineX } from "react-icons/hi"

const SourceCodeModal = ({ isOpen, onClose, JSXCode, CSSCode }) => {

  const [activeTab, setActiveTab] = useState('JSX')

  const handleCopy = () => {
    const codeToCopy = activeTab === "JSX" ? JSXCode : CSSCode
    navigator.clipboard.writeText(codeToCopy || "")
  }

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
            className='relative bg-white border border-zinc-200 rounded-4xl w-full max-w-6xl h-[90%] flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-auto min-h-0 horizontal-scrollbar vertical-scrollbar w-full rounded-4xl">
              {/* Header */}
              <div className='flex justify-between p-1.5 sticky top-0 left-0 bg-white/80 backdrop-blur-xl z-10 min-w-full'>
                <div className='flex items-center gap-2 p-3'>
                  {/* JSX Tab */}
                  <button className={`button-base ${activeTab === 'JSX' ? 'button-primary' : 'tab-secondary'}`} onClick={() => setActiveTab("JSX")}>JSX</button>
                  {/* CSS Tab */}
                  {CSSCode && (
                    <button className={`button-base ${activeTab === 'CSS' ? 'button-primary' : 'tab-secondary'}`} onClick={() => setActiveTab("CSS")}>CSS</button>
                  )}
                  {/* Copy Button */}
                  <button onClick={handleCopy} className="button-base button-outline">Copy {activeTab.toUpperCase()}</button>
                </div>
                <div>
                  {/* Close Modal */}
                  <button onClick={onClose} className="size-11 flex-center bg-zinc-50 hover:bg-zinc-100/80 transition-smooth rounded-full active:scale-95 cursor-pointer z-50">
                    <HiOutlineX />
                  </button>
                </div>
              </div>
              {/* Body */}
              <div className="px-7 pb-7 pt-4">
                <AnimatePresence mode="wait">
                  {activeTab === "JSX" && (
                    <motion.div
                      key="jsx-tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pre className='break-words text-nowrap text-base'>{JSXCode}</pre>
                    </motion.div>
                  )}
                  {activeTab === "CSS" && CSSCode && (
                    <motion.div
                      key="css-tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <pre className='break-words text-nowrap text-base'>{CSSCode}</pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SourceCodeModal
