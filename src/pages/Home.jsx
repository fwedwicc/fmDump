import React from 'react'
import { motion } from 'framer-motion'
import { Header, CardItem, Footer } from '../components'
import { Data } from '../data'

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
          {Data.map((item, index) => (
            <CardItem
              key={index}
              to={item.to}
              thumbnail={item.thumbnail}
              title={item.title}
              label={item.label}
            />
          ))}
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
