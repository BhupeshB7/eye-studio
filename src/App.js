import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminPortfolio from './Admin/AdminPortfolio'
import PortfolioList from './pages/PortfolioList'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<PortfolioList/>}/>
            {/* Admin */}
            <Route path='/admin/portfolio/create' element={<AdminPortfolio/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
