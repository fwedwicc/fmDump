import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header, CardItem, Tooltip, Footer } from '../components'
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
          <Tooltip styles='-translate-y-1/2 top-1/2 w-[11.5rem] right-17' content="Take a peek at Frederick's ongoing experiments :)">
            <Link to='/canvas' className='flex-center size-13 rounded-[17px] transition-smooth button-primary'>
              <HiBeaker className='size-4 stroke-[0.1px]' />
            </Link>
          </Tooltip>
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
