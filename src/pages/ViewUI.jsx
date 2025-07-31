import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UI001, UI002, UI003 } from '../components/dumps'
import { Data } from '../data'

const componentMap = {
  ui001: UI001,
  ui002: UI002,
  ui003: UI003,
}

const ViewUI = () => {
  const { id } = useParams()
  const ComponentToRender = componentMap[id]

  const matchedData = Data.find((item) => item.id === id)
  return (
    <>
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
            damping: 13,
            mass: 1,
          }}
        >
          {ComponentToRender ? <ComponentToRender /> : <p>UI not found</p>}
        </motion.div>
      </motion.section>
      {/* Datasss */}
      <div className='border p-4 space-y-2'>
        {matchedData ? (
          <>
            <div>
              <strong>JSX:</strong>
              <pre className='whitespace-pre-wrap break-words'>{matchedData.sourceCodeJSX}</pre>
            </div>

            {matchedData.sourceCodeCSS && (
              <div>
                <strong>CSS:</strong>
                <pre className='whitespace-pre-wrap break-words'>{matchedData.sourceCodeCSS}</pre>
              </div>
            )}

            <div>
              <strong>Credits:</strong>{' '}
              <a
                href={matchedData.credits}
                target='_blank'
                rel='noopener noreferrer'
                className='underline text-blue-600'
              >
                {matchedData.credits}
              </a>
            </div>
          </>
        ) : (
          <p className='text-red-600'>No additional data found for this UI.</p>
        )}
      </div>
    </>
  )
}

export default ViewUI
