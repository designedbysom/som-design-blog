import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Writing from './pages/Writing'
import Article from './pages/Article'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/:slug" element={<Article />} />
    </Routes>
  )
}

export default App

