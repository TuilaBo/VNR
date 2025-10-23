// import { useState, useEffect } from 'react'
// import Home from './pages/Home'
// import ChatbotAI from './pages/ChatbotAI'

// function App() {
//   const [currentPage, setCurrentPage] = useState('home')

//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash
//       if (hash === '#chatbot-ai') {
//         setCurrentPage('chatbot')
//       } else {
//         setCurrentPage('home')
//       }
//     }

//     // Set initial page based on hash
//     handleHashChange()

//     // Listen for hash changes
//     window.addEventListener('hashchange', handleHashChange)
    
//     return () => window.removeEventListener('hashchange', handleHashChange)
//   }, [])

//   const renderPage = () => {
//     switch(currentPage) {
//       case 'chatbot':
//         return <ChatbotAI />
//       case 'home':
//       default:
//         return <Home />
//     }
//   }

//   return (
//     <div>
//       {renderPage()}
//     </div>
//   )
// }

// export default App

import { useState, useEffect } from 'react'
import Home from './pages/Home'
import ChatbotAI from './pages/ChatbotAI'
import ChiTiet from './pages/ChiTiet'

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
      case 'chitiet':
        return <ChiTiet id={currentId} />  
      case 'home':
      default:
        return <Home />
    }
  }

  return <div>{renderPage()}</div>
}

export default App
