import { useState } from 'react'
import ProgressBar from '../components/codedex/ProgressBar'

const CodedexPlayground = () => {
  const [progress, setProgress] = useState(0)

  const updateProgress = () => {
    setProgress((prevProgress) => (prevProgress == 100 ? 100 : prevProgress + 10))

    if (progress >= 100) {
      console.log("Progress is already at 100%")
    }
  }

  return (
    <main className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center w-full max-w-sm'>
        <ProgressBar progress={progress} />
        <button className='mt-8 px-4 py-2 rounded-xl bg-blue-500 text-white active:bg-blue-600' onClick={updateProgress}>Increase progress</button>
      </div>
    </main>
  )
}

export default CodedexPlayground