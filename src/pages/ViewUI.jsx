import React from 'react'
import { useParams } from 'react-router-dom'
import { UI001 } from '../components/dumps'

const componentMap = {
  ui001: UI001
}

const ViewUI = () => {
  const { id } = useParams()
  const ComponentToRender = componentMap[id]

  return (
    <section className='relative h-screen overflow-hidden bg-neutral-100 grid place-content-center'>
      {ComponentToRender ? <ComponentToRender /> : <p>UI not found</p>}
    </section>
  )
}

export default ViewUI
