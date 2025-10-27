import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ArrowUp, CheckCircle, XCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import quizData from '../../dien_bien_phu_55.json'

// Chia câu hỏi thành 3 bộ
const QUIZ_SETS = [
  { name: 'Bộ 1', questions: quizData.slice(0, 20), total: 20 },
  { name: 'Bộ 2', questions: quizData.slice(20, 40), total: 20 },
  { name: 'Bộ 3', questions: quizData.slice(40, 55), total: 15 }
]

export default function CauHoiOnTap() {
  const [showTop, setShowTop] = useState(false)
  const [selectedSet, setSelectedSet] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestions = QUIZ_SETS[selectedSet].questions

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnswer = (index) => {
    if (showResults) return
    setAnswers({ ...answers, [currentQuestion]: index })
  }

  const nextQuestion = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    currentQuestions.forEach((q, index) => {
      const userAnswer = answers[index]
      const correctAnswer = q.options.findIndex(opt => opt.trim().startsWith(q.answer + '.'))
      if (userAnswer === correctAnswer) correct++
    })
    return correct
  }

  const handleSubmit = () => {
    const answered = Object.keys(answers).length
    if (answered === currentQuestions.length) {
      setShowResults(true)
    } else {
      alert(`Vui lòng trả lời "+ currentQuestions.length +" câu hỏi. Bạn mới trả lời ${answered} câu.`)
    }
  }

  const resetQuiz = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const changeSet = (index) => {
    setSelectedSet(index)
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const sections = [
    { id: 'i-boi-canh', title: 'I. Tổng Quan Chiến Dịch và Bối Cảnh', icon: BookOpen },
    { id: 'cau-hoi-on-tap', title: 'Câu Hỏi Ôn Tập', icon: BookOpen }
  ]

  const currentQ = currentQuestions[currentQuestion]
  const selectedAnswer = answers[currentQuestion]
  const correctAnswerIndex = currentQ.options.findIndex(opt => opt.trim().startsWith(currentQ.answer + '.'))
  const score = showResults ? calculateScore() : 0

  return (
    <div className="min-h-screen bg-vintage-cream-50 w-full relative overflow-hidden">
      <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
      <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-40"/>

      <Navbar sections={sections} />

      <main className="w-full relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Câu Hỏi Ôn Tập</h1>
            <p className="text-lg text-white/90">Chọn bộ câu hỏi để bắt đầu kiểm tra kiến thức</p>
          </div>

          {/* Quiz Set Selection */}
          <div className="flex justify-center gap-4 mb-8">
            {QUIZ_SETS.map((set, index) => (
              <button
                key={index}
                onClick={() => changeSet(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedSet === index
                    ? 'bg-vietnam-red-600 text-white shadow-lg scale-105'
                    : 'bg-white/90 text-vietnam-red-700 hover:bg-white'
                }`}
              >
                {set.name} ({set.total} câu)
              </button>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-lg border border-vietnam-red-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-vietnam-red-700">
                Câu {currentQuestion + 1} / {currentQuestions.length}
              </span>
              <span className="text-sm text-vietnam-red-600">
                Đã trả lời: {Object.keys(answers).length} / {currentQuestions.length}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-vietnam-red-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedSet}-${currentQuestion}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-vietnam-red-200 mb-6"
            >
              <h2 className="text-2xl font-bold text-vietnam-red-700 mb-6">
                {currentQ.question}
              </h2>

              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index
                  const isCorrect = showResults && index === correctAnswerIndex
                  const isWrong = showResults && isSelected && index !== correctAnswerIndex

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? isCorrect
                            ? 'bg-green-100 border-green-500'
                            : isWrong
                            ? 'bg-red-100 border-red-500'
                            : 'bg-vietnam-red-50 border-vietnam-red-500'
                          : isCorrect && showResults
                          ? 'bg-green-50 border-green-300'
                          : 'bg-white border-slate-300 hover:border-vietnam-red-300'
                      } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        {isCorrect && showResults && <CheckCircle className="text-green-600 w-5 h-5" />}
                        {isWrong && <XCircle className="text-red-600 w-5 h-5" />}
                        <span className={`font-medium ${
                          isCorrect ? 'text-green-800' : isWrong ? 'text-red-800' : 'text-slate-700'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    currentQuestion === 0
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-vietnam-red-600 text-white hover:bg-vietnam-red-700'
                  }`}
                >
                  ← Trước
                </button>

                <div className="flex gap-3">
                  {!showResults ? (
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-all"
                    >
                      Nộp bài
                    </button>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-vietnam-red-600 text-white">
                        <span className="font-bold text-xl">{score}</span>
                        <span>/</span>
                        <span>{currentQuestions.length}</span>
                      </div>
                      <button
                        onClick={resetQuiz}
                        className="px-6 py-3 rounded-xl bg-vietnam-red-600 text-white font-medium hover:bg-vietnam-red-700 transition-all"
                      >
                        Làm lại
                      </button>
                    </>
                  )}
                </div>

                <button
                  onClick={nextQuestion}
                  disabled={currentQuestion === currentQuestions.length - 1}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    currentQuestion === currentQuestions.length - 1
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-vietnam-red-600 text-white hover:bg-vietnam-red-700'
                  }`}
                >
                  Sau →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Navigation Grid */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-vietnam-red-200">
            <h3 className="text-lg font-bold text-vietnam-red-700 mb-4">Chuyển nhanh đến câu</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {currentQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`p-2 rounded-lg text-sm font-medium transition-all ${
                    answers[index] !== undefined
                      ? showResults
                        ? (() => {
                            const q = currentQuestions[index]
                            const correctAnswerIdx = q.options.findIndex(opt => opt.trim().startsWith(q.answer + '.'))
                            return answers[index] === correctAnswerIdx ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          })()
                        : 'bg-vietnam-red-600 text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  } ${currentQuestion === index ? 'ring-2 ring-vietnam-red-500' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg z-50 transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #dc2626)'
          }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer sections={sections} />
    </div>
  )
}

