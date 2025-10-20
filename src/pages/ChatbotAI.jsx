import { useState, useEffect } from 'react'
import { Bot, MessageCircle, Lightbulb, BookOpen, Clock, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'

export default function ChatbotAI() {
  const [showTop, setShowTop] = useState(false)

  // Sample sections for navbar
  const sections = [
    { id: 'i-boi-canh', title: 'I. Tổng Quan Chiến Dịch và Bối Cảnh', icon: BookOpen },
    { id: 'chatbot-ai', title: 'ChatbotAI', icon: Bot },
    { id: 'cau-hoi-on-tap', title: 'Câu Hỏi Ôn Tập', icon: MessageCircle }
  ]

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-vintage-cream-50 w-full relative overflow-hidden">
      {/* Background layers - same as homepage */}
      <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
      <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-40"/>

      <Navbar sections={sections} />

      <main className="w-full relative z-10">
        {/* ChatbotAI Section */}
        <section id="chatbot-ai" className="w-full py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    boxShadow: '0 20px 25px -5px rgba(239, 68, 68, 0.3), 0 10px 10px -5px rgba(239, 68, 68, 0.1)'
                  }}
                >
                  <Bot className="w-8 h-8 text-white"/>
                </div>
                <h2 className="text-4xl font-bold text-white">ChatbotAI Chuyên Nghiệp</h2>
              </div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Trợ lý AI thông minh giúp bạn tìm hiểu sâu hơn về chiến dịch Điện Biên Phủ
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Chat Interface */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-vietnam-red-200 overflow-hidden"
              >
                <div 
                  className="px-6 py-4 border-b border-vietnam-red-100"
                  style={{
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-white font-semibold">AI Assistant Online</span>
                  </div>
                </div>
                
                  <div className="h-96 p-6 overflow-y-auto bg-vintage-cream-50">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                        }}
                      >
                        <Bot className="w-4 h-4 text-white"/>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-xs">
                        <p className="text-gray-700 text-sm">
                          Xin chào! Tôi là AI Assistant chuyên về lịch sử chiến dịch Điện Biên Phủ. 
                          Bạn có thể hỏi tôi bất kỳ câu hỏi nào về chiến dịch này.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 justify-end">
                        <div className="bg-white text-black rounded-lg p-4 shadow-sm max-w-xs border border-vietnam-red-200">
                        <p className="text-base font-semibold">
                          Chiến dịch Điện Biên Phủ diễn ra trong bao lâu?
                        </p>
                      </div>
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                        }}
                      >
                        <MessageCircle className="w-4 h-4 text-white"/>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                        }}
                      >
                        <Bot className="w-4 h-4 text-white"/>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 max-w-xs">
                        <p className="text-gray-700 text-sm">
                          Chiến dịch Điện Biên Phủ diễn ra trong 56 ngày đêm, từ ngày 13/3/1954 đến 7/5/1954. 
                          Đây là một trong những chiến dịch dài nhất và ác liệt nhất trong lịch sử quân sự Việt Nam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                  <div className="p-4 border-t border-vietnam-red-100 bg-white/90 backdrop-blur-sm">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Nhập câu hỏi của bạn..."
                      className="flex-1 px-4 py-2 border border-vietnam-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-vietnam-red-500 focus:border-transparent"
                    />
                    <button 
                      className="px-6 py-2 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                      }}
                    >
                      Gửi
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-vietnam-red-200">
                    <h3 className="text-2xl font-bold text-vietnam-red-700 mb-6 flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)'
                      }}
                    >
                      <Lightbulb className="w-5 h-5 text-white"/>
                    </div>
                    Tính Năng Nổi Bật
                  </h3>
                  
                  <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-vietnam-red-50 transition-colors">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                        }}
                      >
                        <BookOpen className="w-4 h-4 text-white"/>
                      </div>
                      <div>
                          <h4 className="font-semibold text-vietnam-red-700 mb-1">Kiến Thức Chuyên Sâu</h4>
                          <p className="text-historical-brown-600 text-sm">Cơ sở dữ liệu đầy đủ về chiến dịch Điện Biên Phủ</p>
                      </div>
                    </div>
                    
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-vietnam-red-50 transition-colors">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #f59e0b, #d97706)'
                        }}
                      >
                        <MessageCircle className="w-4 h-4 text-white"/>
                      </div>
                      <div>
                          <h4 className="font-semibold text-vietnam-red-700 mb-1">Tương Tác Thông Minh</h4>
                          <p className="text-historical-brown-600 text-sm">Trả lời câu hỏi một cách tự nhiên và chính xác</p>
                      </div>
                    </div>
                    
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-vietnam-red-50 transition-colors">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                        }}
                      >
                        <Clock className="w-4 h-4 text-white"/>
                      </div>
                      <div>
                          <h4 className="font-semibold text-vietnam-red-700 mb-1">Hỗ Trợ 24/7</h4>
                          <p className="text-historical-brown-600 text-sm">Luôn sẵn sàng trả lời mọi thắc mắc của bạn</p>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Bắt Đầu Trò Chuyện</h3>
                  <p className="text-vietnam-red-100 mb-6">
                    Hãy đặt câu hỏi về bất kỳ khía cạnh nào của chiến dịch Điện Biên Phủ
                  </p>
                  <div className="space-y-2">
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      "Kế hoạch Nava là gì?"
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      "Tại sao Pháp chọn Điện Biên Phủ?"
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 text-sm">
                      "Vai trò của hậu cần trong chiến dịch?"
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {showTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg z-50 transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #dc2626)'
          }}
        >
          <ArrowUp className="w-5 h-5"/>
        </button>
      )}

      <Footer sections={sections} />
    </div>
  )
}
