import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, ViewUI, Canvas } from './pages'
import useLenis from './hooks/useLenis'

const App = () => {
  useLenis()
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/view/:id" element={<ViewUI />} />
        <Route path='/canvas' element={<Canvas />} />
      </Routes>
    </Router>
  )
}

export default App
