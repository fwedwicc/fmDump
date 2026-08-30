import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ViewWrapper, InfoModal, SourceCodeModal, Tooltip, Ruler } from '../components'
import { TbSmartHome, TbInfoSquareRounded, TbStar, TbStarFilled } from "react-icons/tb"
import { Data } from '../data'

const ViewUI = () => {
  const { id } = useParams()
  const matchedData = Data.find((item) => item.id === id)
  const hasSkeleton = Boolean(matchedData?.Skeleton)
  const [isLofi, setIsLofi] = useState(false)
  const [openInfoModal, setOpenInfoModal] = useState(false)
  const [openCodeModal, setOpenCodeModal] = useState(false)

  useEffect(() => {
    setIsLofi(false)
  }, [id])

  const ComponentToRender = isLofi && hasSkeleton ? matchedData.Skeleton : matchedData?.UI
  const JSXCode = isLofi && matchedData?.skeletonSourceCodeJSX ? matchedData.skeletonSourceCodeJSX : matchedData?.sourceCodeJSX
  const CSSCode = isLofi && matchedData?.skeletonSourceCodeCSS ? matchedData.skeletonSourceCodeCSS : matchedData?.sourceCodeCSS

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='relative h-screen overflow-hidden flex-center'
    >
      {/* <Ruler /> */}
      <ViewWrapper designWidth={1024}>
        <AnimatePresence mode='wait'>
          {ComponentToRender ? (
            <motion.div
              key={isLofi ? 'lofi' : 'hifi'}
              initial={{ opacity: 0, scale: 0.985, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: 8 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              <ComponentToRender />
            </motion.div>
          ) : (
            <motion.p key='missing-ui' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              UI not found
            </motion.p>
          )}
        </AnimatePresence>
      </ViewWrapper>
      {/* Source Code & Info button */}
      <div className='fixed md:top-6 top-4 md:left-6 left-4 flex items-center gap-3'>
        <button className='button-base button-primary' onClick={() => setOpenCodeModal(true)}>
          Source code
        </button>
        {hasSkeleton && (
          <button
            onClick={() => setIsLofi((current) => !current)}
            className="button-base button-secondary relative h-[42px] p-1 overflow-hidden"
          >
            {/* Active thumb */}
            <motion.div
              animate={{ x: isLofi ? 32 : 0 }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 32,
              }}
              className="absolute top-1 left-1 size-8 rounded-[10px] bg-zinc-800 shadow-md"
            />

            {/* Icons */}
            <div className="relative z-10 flex h-full">
              <div
                className={`w-8 flex items-center justify-center transition-colors duration-200 ${!isLofi ? "text-white" : "text-zinc-400/70"
                  }`}
              >
                <TbStarFilled className="size-4" />
              </div>

              <div
                className={`w-8 flex items-center justify-center transition-colors duration-200 ${isLofi ? "text-white" : "text-zinc-400"
                  }`}
              >
                <TbStar className="size-4" />
              </div>
            </div>
          </button>
        )}
        <Tooltip styles='-translate-y-1/2 top-1/2 text-nowrap left-8' content="Infos" animation={-8}>
          <button className='cursor-pointer' onClick={() => setOpenInfoModal(true)}>
            <TbInfoSquareRounded className='size-4.5 stroke-[2px] text-neutral-800' />
          </button>
        </Tooltip>
      </div>
      <div className="fixed bottom-6 left-6 md:top-4 md:right-4 md:bottom-auto md:left-auto p-1">
        <p className="text-zinc-500 text-[11px] tracking-widest">
          {isLofi ? "LOW-FIDELITY" : "HIGH-FIDELITY"}
        </p>
      </div>
      {/* Info Modal */}
      <InfoModal
        isOpen={openInfoModal}
        onClose={() => setOpenInfoModal(false)}
        title={matchedData?.title}
        label={matchedData?.label}
        desc={matchedData?.desc}
        credits={matchedData?.credits}
        reference={matchedData?.reference}
      />
      {/* Source Code Modal */}
      <SourceCodeModal
        isOpen={openCodeModal}
        onClose={() => setOpenCodeModal(false)}
        JSXCode={JSXCode}
        CSSCode={CSSCode}
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
