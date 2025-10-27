

import { useState, useEffect } from 'react'
import Home from './pages/Home'
import ChatbotAI from './pages/ChatbotAI'
import ChiTiet from './pages/ChiTiet'
import LandingDienBienPhu from './pages/LandingDienBienPhu'
import SanPhamMocKhoa from './pages/SanPhamMocKhoa'
import CauHoiOnTap from './pages/CauHoiOnTap'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#chitiet/')) {
        const id = hash.replace('#chitiet/', '')
        setCurrentPage('chitiet')
        setCurrentId(id)
      } else if (hash === '#chatbot-ai') {
        setCurrentPage('chatbot')
        setCurrentId(null)
      } 
      else if (hash === '#cau-hoi-on-tap') {
        setCurrentPage('quiz')
        setCurrentId(null)
      }
      else if (hash === '#landing-dbp') {
        setCurrentPage('landing')
        setCurrentId(null)
      }
      else if (hash === '#sanpham-mockhoa') {
        setCurrentPage('mockhoa')
        setCurrentId(null)
      } else {
        setCurrentPage('home')
        setCurrentId(null)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'chatbot':
        return <ChatbotAI />
      case 'quiz':
        return <CauHoiOnTap />
      case 'chitiet':
        return <ChiTiet id={currentId} />  
      case 'landing':
        return <LandingDienBienPhu />
      case 'mockhoa':
        return <SanPhamMocKhoa />

      case 'home':
      default:
        return <Home />
    }
  }

  return <div>{renderPage()}</div>
}

export default App
