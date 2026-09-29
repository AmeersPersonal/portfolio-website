import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home.jsx'
import SurprisePage from './pages/surprise.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        {/* Hidden gag page — not linked anywhere; only reachable by typing the URL */}
        <Route path='/payment' element={<SurprisePage />}></Route>
        {/* Fallback so an unmatched hash (e.g. a stray #about from an in-page anchor) doesn't render a blank page */}
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
