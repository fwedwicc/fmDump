import React from 'react'
import { Header, Footer } from '../components'
import { Thumbnail001 } from '../assets/thumbnails'

const Home = () => {
  return (
    <div className='space-y-4'>
      <Header />
      <main className='px-4 mt-30'>
        {/* Content */}
        <div className='grid grid-cols-3 gap-2 p-2 bg-zinc-200/50 rounded-4xl'>
          {/* Testing Card */}
          <div className='relative border border-zinc-300/90 rounded-[1.5rem] h-88 overflow-hidden'>
            <img src={Thumbnail001} alt="Thumbnail 001" className='object-cover w-full h-full' draggable='false' />\
            <div className='absolute w-full top-0 left-0 p-1'>
              <div className='px-4 pt-2.5 pb-3.5 bg-zinc-100/50 rounded-[20px] border border-zinc-400/20 backdrop-blur-xl'>
                <h3>001</h3>
                <p>Skeumorphism</p>
              </div>
            </div>
          </div>
          <div className='border border-zinc-300/60 rounded-[1.3rem] h-88'>s</div>
          <div className='border border-zinc-300/60 rounded-[1.3rem] h-88'>s</div>
          <div className='border border-zinc-300/60 rounded-[1.3rem] h-88'>s</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
