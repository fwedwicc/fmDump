import React from 'react'

const Ruler = () => {
  return (
    <div className='fixed top-0 z-99 w-full h-full flex items-center justify-center pointer-events-none'>
        <div className='h-full w-[44rem] border-x border-red-500'></div>
    </div>
  )
}

export default Ruler