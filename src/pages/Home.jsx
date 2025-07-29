import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer } from '../components'
import { Thumbnail001 } from '../assets/thumbnails'
import { TbArrowUpRight } from "react-icons/tb"

const Home = () => {
  return (
    <div className='space-y-4'>
      <Header />
      <main className='px-4 mt-30'>
        {/* Content */}
        <div className='grid grid-cols-3 gap-2 p-2 bg-zinc-200/50 rounded-4xl'>
          {/* Testing Card 1 */}
          <Link to='/view/ui001' className='group relative border border-zinc-300/90 rounded-[1.5rem] h-88 overflow-hidden'>
            <img src={Thumbnail001} alt="Thumbnail 001" className='object-cover w-full h-full' draggable='false' />
            <div className='absolute w-full top-0 left-0 p-1'>
              <div className='transform scale-95 -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-smooth flex-between px-4 pt-2.5 pb-3.5 bg-zinc-100/50 rounded-[20px] border border-zinc-400/20 backdrop-blur-xl'>
                <div>
                  <h3>001</h3>
                  <p>Skeumorphism</p>
                </div>
                <TbArrowUpRight className='size-10 stroke-[0.8] text-zinc-900' />
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
