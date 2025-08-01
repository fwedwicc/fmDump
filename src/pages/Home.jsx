import React from 'react'
import { motion } from 'framer-motion'
import { Header, CardItem, Footer } from '../components'
import { Data } from '../data'
import { HiBeaker } from "react-icons/hi"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='relative space-y-4'
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
        {/* Link to canvas */}
        <div className='fixed bottom-6 right-6'>
          <div className='relative'>
            <button className='flex-center size-13 rounded-full button-primary'>
              <HiBeaker className='size-5 stroke-[0.1px]' />
            </button>
            {/* Tooltip */}
            <div className='absolute -translate-y-1/2 top-1/2 w-[11.5rem] right-17 px-3.5 rounded-2xl py-3 border border-zinc-200 bg-zinc-100 shadow-lg shadow-zinc-300/30'>
              <p>Take a peek at Frederick’s ongoing experiments :)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
