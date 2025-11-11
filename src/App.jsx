import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, ViewUI, Canvas, CodedexPlayground } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/view/:id" element={<ViewUI />} />
        <Route path='/canvas' element={<Canvas />} />
        <Route path='/codedex-play' element={<CodedexPlayground />} />
      </Routes>
    </Router>
  )
}

export default App
