import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className='space-y-6 text-center w-full'>
      <h1>Progress Bar</h1>
      <div className='w-full bg-neutral-200 rounded-sm mb-2'>
        <div style={{ width: `${props.progress}%` }} className='bg-blue-500 h-3 rounded-sm' />
      </div>
      <p>{props.progress}% Complete</p>
    </div>
  )
}

export default ProgressBar
