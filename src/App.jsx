import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, ViewUI, Canvas } from './pages'

const App = () => {
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
