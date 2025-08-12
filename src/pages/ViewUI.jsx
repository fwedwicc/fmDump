import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ViewWrapper, Modal, SourceCodeModal, Tooltip } from '../components'
import { TbSmartHome, TbInfoSquareRounded } from "react-icons/tb"
import { Data } from '../data'

const ViewUI = () => {
  const { id } = useParams()
  const matchedData = Data.find((item) => item.id === id)
  const ComponentToRender = matchedData?.UI
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const [openCodeModal, setOpenCodeModal] = useState(false)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden flex-center'
    >
      <ViewWrapper designWidth={1024}>
        {ComponentToRender ? <ComponentToRender /> : <p>UI not found</p>}
      </ViewWrapper>
      {/* Source Code & Info button */}
      <div className='fixed md:top-6 top-4 md:left-6 left-4 flex items-center gap-5'>
        <button className='button-base button-primary' onClick={() => setOpenCodeModal(true)}>
          Source code
        </button>
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap left-8' content="Infos" animation={-8}>
          <button className='cursor-pointer' onClick={() => setOpenInfoModal(true)}>
            <TbInfoSquareRounded className='size-4.5 stroke-[2px] text-neutral-800' />
          </button>
        </Tooltip>
      </div>
      {/* Info Modal */}
      <Modal isOpen={openInfoModal} onClose={() => setOpenInfoModal(false)} size='max-w-lg'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <p>{matchedData.title}</p>
            <h2>{matchedData.label}</h2>
            <p>{matchedData.desc}</p>
          </div>
          <div className='pt-4 space-y-3 border-t border-zinc-100'>
            <h4>Reference</h4>
            <a href={matchedData.credits} target='_blank' rel='noopener noreferrer'>
              <p className='break-all'>{matchedData.credits}</p>
            </a>
          </div>
        </div>
      </Modal>
      {/* Source Code Modal */}
      <SourceCodeModal
        isOpen={openCodeModal}
        onClose={() => setOpenCodeModal(false)}
        JSXCode={matchedData.sourceCodeJSX}
        CSSCode={matchedData.sourceCodeCSS}
      />
      {/* Back to home button */}
      <div className='fixed md:bottom-6 bottom-4 md:right-6 right-4'>
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap right-17' content="Home" animation={8}>
          <Link to='/' className='flex-center size-13 rounded-[17px] transition-smooth button-secondary'>
            <TbSmartHome className='size-4.5 stroke-[2px]' />
          </Link>
        </Tooltip>
      </div>
    </motion.section>
  )
}

export default ViewUI

{/* This is just initial fetch hehe (no design) */ }
{/* <div className='border p-4 space-y-2'>
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
      </div> */}
