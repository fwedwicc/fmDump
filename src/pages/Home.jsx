import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Header, CardItem, Footer } from '../components'
import { Thumbnail001, Thumbnail002 } from '../assets/thumbnails'

const Home = () => {
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
          <CardItem
            to='/view/ui001'
            thumbnail={Thumbnail001}
            title="001"
            label="Apple card"
          />
          {/* 002 */}
          <CardItem
            to='/view/ui002'
            thumbnail={Thumbnail002}
            title="002"
            label="Skeumorphism"
          />
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
