import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Header, Footer } from '../components'
import { Thumbnail001, Thumbnail002 } from '../assets/thumbnails'
import { TbArrowUpRight } from "react-icons/tb"

const Home = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='space-y-4'
    >
      <Header />
      <main className='px-4 mt-30'>
        {/* Content */}
        <div className='grid grid-cols-4 gap-2 p-2 bg-zinc-200/50 rounded-4xl'>
          {/* 001 */}
          <Link
            to="/view/ui001"
            className="relative border border-zinc-300/90 rounded-[1.5rem] h-88 overflow-hidden block"
          >
            <motion.div
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="w-full h-full"
            >
              <img src={Thumbnail001} alt="Thumbnail 001" className="object-cover w-full h-full" draggable="false" />

              <div className="absolute w-full top-0 left-0 p-1 pointer-events-none">
                <motion.div
                  animate={
                    hovered
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: -20, scale: 0.95 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 14,
                  }}
                  className="flex-between px-4 pt-2.5 pb-3.5 bg-zinc-100/50 rounded-[20px] border border-zinc-400/20 backdrop-blur-xl"
                >
                  <div>
                    <h3>001</h3>
                    <p>Apple card</p>
                  </div>
                  <TbArrowUpRight className="size-10 stroke-[0.8] text-zinc-900" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
          {/* 002 */}
          <Link to='/view/ui002' className='group relative border border-zinc-300/90 rounded-[1.5rem] h-88 overflow-hidden'>
            <img src={Thumbnail002} alt="Thumbnail 002" className='object-cover w-full h-full' draggable='false' />
            <div className='absolute w-full top-0 left-0 p-1'>
              <div className='transform scale-95 -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-smooth flex-between px-4 pt-2.5 pb-3.5 bg-zinc-100/50 rounded-[20px] border border-zinc-400/20 backdrop-blur-xl'>
                <div>
                  <h3>002</h3>
                  <p>Skeumorphism</p>
                </div>
                <TbArrowUpRight className='size-10 stroke-[0.8] text-zinc-900' />
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
