import React from 'react'
import { Header, Footer } from '../components'

const Home = () => {
  return (
    <div className='p-4 space-y-4'>
      <Header />
      <main className='p-4 bg-zinc-200/50 rounded-3xl'>
        home
      </main>
      <Footer />
    </div>
  )
}

export default Home
