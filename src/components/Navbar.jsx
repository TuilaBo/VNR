import { useState } from 'react'
import { Menu, X, History } from 'lucide-react'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'

export default function Navbar({ sections }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-vintage-cream-50/95 backdrop-blur-md border-b-2 border-vietnam-red-200 sticky top-0 z-50 w-full shadow-lg overflow-hidden">
      {/* Background layers */}
      <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
      <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <History className="w-5 h-5 text-white"/>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-vietnam-gold-500 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white group-hover:text-vietnam-gold-300 transition-colors">Chiến Dịch Điện Biên Phủ</span>
            <span className="text-xs text-white/80 font-medium">Tài liệu lịch sử</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
        <li>
            <a 
              href="#vonguyengiap"
              className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group"
            >
              Đại tướng Võ Nguyên Giáp
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        <li>
            <a 
              href="#landing-dbp"
              className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group"
            >
              Các Mốc Lịch Sử
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a 
              href="#i-boi-canh" 
                  className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group"
            >
              Tổng Quan
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
          <a href="#sanpham-mockhoa" className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group">
            Móc khóa ĐBP            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>

          <li>
            <a 
              href="#chatbot-ai" 
                  className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group"
            >
              ChatbotAI
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
          <li>
            <a 
              href="#cau-hoi-on-tap" 
                  className="text-white hover:text-vietnam-gold-300 font-medium transition-colors duration-200 relative group"
            >
              Câu Hỏi Ôn Tập
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnam-gold-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors duration-200"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-vietnam-red-100 bg-vintage-cream-50/95 backdrop-blur-md w-full shadow-lg relative overflow-hidden">
          {/* Background layers for mobile menu */}
          <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
          <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-15"/>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
            <ul className="space-y-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a 
                    onClick={() => setMenuOpen(false)} 
                    href={`#${s.id}`} 
                        className="block py-2 px-3 rounded-lg text-white hover:text-vietnam-gold-300 hover:bg-white/20 font-medium transition-all duration-200"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}
