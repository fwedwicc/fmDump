import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, ViewUI, Canvas } from './pages'
import { SmoothCursor } from './components/SmoothCursor'
import useLenis from './hooks/useLenis'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/view/:id" element={<ViewUI />} />
      <Route path='/canvas' element={<Canvas />} />
    </Routes>
  )
}

const AppWrapper = () => {
  useLenis()

  return (
    <Router>
      <App />
      <SmoothCursor />
    </Router>
  )
}

export default AppWrapper
