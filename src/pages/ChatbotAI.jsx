import { useState, useEffect, useRef } from 'react'
import { Bot, MessageCircle, Lightbulb, BookOpen, Clock, ArrowUp, Send, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { sendMessageToChatbase, getInitialGreeting } from '../services/chatbaseApi'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'

export default function ChatbotAI() {
  const [showTop, setShowTop] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  // Sample sections for navbar
  const sections = [
    { id: 'i-boi-canh', title: 'I. Tổng Quan Chiến Dịch và Bối Cảnh', icon: BookOpen },
    { id: 'chatbot-ai', title: 'ChatbotAI', icon: Bot }
  ]

  // Initialize chat with greeting
  useEffect(() => {
    const greeting = getInitialGreeting()
    setMessages([{
      id: 1,
      type: 'bot',
      content: greeting.message,
      timestamp: new Date()
    }])
  }, [])

  // Auto scroll to bottom when new messages arrive (only within chat container)
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Send message function
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await sendMessageToChatbase(inputMessage.trim(), conversationId)
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: response.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      
      if (response.conversationId) {
        setConversationId(response.conversationId)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Xin lỗi, có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại sau.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

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
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-vietnam-red-200 overflow-hidden flex flex-col h-[600px]"
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
                
                    <div ref={chatContainerRef} className="flex-1 p-6 overflow-y-auto bg-vintage-cream-50 scroll-smooth">
                  <div className="space-y-3">
                    {messages.map((message) => (
                      <div key={message.id} className={`flex items-start gap-3 ${message.type === 'user' ? 'justify-end' : ''}`}>
                        {message.type === 'bot' && (
                          <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                            }}
                          >
                            <Bot className="w-3.5 h-3.5 text-white"/>
                          </div>
                        )}
                        
                        <div className={`rounded-lg p-3 shadow-sm max-w-xs ${
                          message.type === 'user' 
                            ? 'bg-white text-black border border-vietnam-red-200' 
                            : 'bg-white border border-gray-200'
                        }`}>
                          <p className={`text-sm ${message.type === 'user' ? 'font-semibold' : 'text-gray-700'}`}>
                            {message.content}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {message.timestamp.toLocaleTimeString('vi-VN', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>

                        {message.type === 'user' && (
                          <div 
                            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                            }}
                          >
                            <MessageCircle className="w-3.5 h-3.5 text-white"/>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                          }}
                        >
                          <Bot className="w-3.5 h-3.5 text-white"/>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 max-w-xs">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-3 h-3 animate-spin text-vietnam-red-500"/>
                            <p className="text-gray-500 text-xs">AI đang suy nghĩ...</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                
                  <div className="p-4 border-t border-vietnam-red-100 bg-white/90 backdrop-blur-sm flex-shrink-0">
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSendMessage()
                    }}
                    className="flex gap-2"
                  >
                    <input 
                      type="text" 
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Nhập câu hỏi của bạn..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-3 border border-vietnam-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-vietnam-red-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button 
                      type="submit"
                      disabled={!inputMessage.trim() || isLoading}
                      className="px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #ef4444, #dc2626)'
                      }}
                      onMouseEnter={(e) => {
                        if (!e.target.disabled) {
                          e.target.style.transform = 'scale(1.05)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin"/>
                          Đang gửi...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4"/>
                          Gửi
                        </>
                      )}
                    </button>
                  </form>
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
                    <button 
                      onClick={() => setInputMessage("Kế hoạch Nava là gì?")}
                      className="w-full bg-white/20 rounded-lg p-3 text-sm text-left hover:bg-white/30 transition-colors duration-200"
                    >
                      "Kế hoạch Nava là gì?"
                    </button>
                    <button 
                      onClick={() => setInputMessage("Tại sao Pháp chọn Điện Biên Phủ?")}
                      className="w-full bg-white/20 rounded-lg p-3 text-sm text-left hover:bg-white/30 transition-colors duration-200"
                    >
                      "Tại sao Pháp chọn Điện Biên Phủ?"
                    </button>
                    <button 
                      onClick={() => setInputMessage("Vai trò của hậu cần trong chiến dịch?")}
                      className="w-full bg-white/20 rounded-lg p-3 text-sm text-left hover:bg-white/30 transition-colors duration-200"
                    >
                      "Vai trò của hậu cần trong chiến dịch?"
                    </button>
                    <button 
                      onClick={() => setInputMessage("Chiến dịch Điện Biên Phủ được lãnh đạo bởi ai?")}
                      className="w-full bg-white/20 rounded-lg p-3 text-sm text-left hover:bg-white/30 transition-colors duration-200"
                    >
                      "Chiến dịch Điện Biên Phủ được lãnh đạo bởi ai?"
                    </button>
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
