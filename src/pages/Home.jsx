

import { useEffect, useState } from 'react'
import { smartTruncate, truncateByChars } from '../utils/truncate'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowUp, BookOpen, Target, Shield, Flag, Map, History, Trophy, LineChart,
  Lightbulb, AlertTriangle, Menu, X, ChevronRight, ChevronDown, Globe, Users,
  Clock, Zap, Award, TrendingUp, FileText, Calendar, BarChart3, ChevronUp
} from 'lucide-react'
import { motion } from 'framer-motion'


import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg4 from '../assets/bg4.jpg'
import img1 from '../assets/I.jpg'
import img2 from '../assets/II.jpg'
import img3 from '../assets/III.jpg'
import img4 from '../assets/IV.jpg'
import img5 from '../assets/V.jpg'
import img6 from '../assets/VI.jpg'
import img7 from '../assets/VII.jpg'
import img8 from '../assets/VIII.jpg'
import img9 from '../assets/IX.jpg'
import img10 from '../assets/X.jpg'
export default function Home() {
  // State
  const [count, setCount] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [tocOpen, setTocOpen] = useState(false)
  const [expandedSubsections, setExpandedSubsections] = useState({})
  const [showToc, setShowToc] = useState(true)

  // Limits for truncation
  const limits = { heading: 90, subheading: 140, paragraph: 240, cta: 28 }

  // Hero text
  const heading = smartTruncate('Chiến thắng Điện Biên Phủ — Bản hùng ca bất diệt', { chars: 90 })
  const subheading = smartTruncate('Hành trình 56 ngày đêm, nghệ thuật tác chiến và bài học lịch sử', { chars: 140 })
  const heroText = smartTruncate(
    'Khám phá hành trình chiến dịch Điện Biên Phủ: bối cảnh, mục tiêu, hiệp đồng binh chủng, hậu cần và dòng thời gian dẫn tới chiến thắng 7/5/1954.',
    { chars: limits.paragraph }
  )

  // Sections data (tóm tắt 3–5 dòng), có ảnh trực tiếp từ DOCX/getty/baohungyen
  const sections = [
    {
      id: 'i-boi-canh',
      title: 'I. Bối cảnh và Nguyên nhân',
      icon: BookOpen,
      image: img1,
      summary: 'Sau Cách mạng tháng Tám 1945, Pháp quay lại Đông Dương nhằm khôi phục thuộc địa và bảo vệ lợi ích kinh tế – chính trị. Bối cảnh quốc tế và ý đồ ngăn chặn phong trào độc lập đã tạo điều kiện cho can thiệp của Pháp.'
    },
    {
      id: 'ii-muc-tieu',
      title: 'II. Mục tiêu chiến dịch',
      icon: Target,
      image: img2,
      summary: 'Mục tiêu chính là đánh sập “pháo đài” Điện Biên Phủ, phá kế hoạch Nava, cắt mạch tiếp tế đường không của Pháp; chiếm các điểm cao then chốt để giành ưu thế chiến trường và đàm phán.'
    },
    {
      id: 'iii-the-tran',
      title: 'III. Thế địch — Thế ta',
      icon: Shield,
      image: img3,
      summary: 'Pháp có công sự kiên cố và hỏa lực dày nhưng phụ thuộc mạnh vào đường băng Mường Thanh; ta có lợi thế địa hình, pháo binh điểm cao và chiến thuật công sự hóa tiến công.'
    },
    {
      id: 'iv-hiep-dong',
      title: 'IV. Hiệp đồng binh chủng',
      icon: Users,
      image: img4,
      summary: 'Pháo binh, bộ binh, công binh, cao xạ và hậu cần vận hành nhịp nhàng theo nguyên tắc “búa — đe — khóa — mở” để mở cửa, cô lập và tiêu diệt cứ điểm địch.'
    },
    {
      id: 'v-hau-can',
      title: 'V. Hậu cần — Linh hồn chiến dịch',
      icon: Zap,
      image: img5,
      summary: 'Hệ thống vận chuyển đa phương tiện (ô tô, ngựa thồ, xe đạp thồ, gùi) cùng “đường hào tiếp tế” trong công sự đảm bảo dòng đạn, lương thực và chăm sóc thương binh suốt 56 ngày đêm.'
    },
    {
      id: 'vi-dong-thoi-gian',
      title: 'VI. Dòng thời gian chính',
      icon: History,
      image: img6,
      summary: 'Chiến dịch kéo dài từ chuẩn bị (cuối 1953) → đợt mở cửa (13/3) → siết vòng vây → công kích then chốt (đầu tháng 5) → toàn thắng 7/5/1954; dẫn tới Hiệp định Geneva 21/7/1954.'
    },
    {
      id: 'vii-ket-qua',
      title: 'VII. Kết quả định lượng — định tính',
      icon: LineChart,
      image: img7,
      summary: 'Hơn 16.000 quân Pháp tiêu diệt hoặc bắt làm tù binh; nhiều khí tài bị mất; kế hoạch Nava sụp đổ; thế trận chuyển sang phía ta và dẫn tới đàm phán Geneva.'
    },
    {
      id: 'viii-nghe-thuat',
      title: 'VIII. Nghệ thuật chiến dịch',
      icon: Lightbulb,
      image: img8,
      summary: 'Chiến dịch là bài học về “dùng mềm chế cứng”, công sự hóa tiến công, vây lấn — bóc vỏ — bức hàng, và hậu cần trong công sự là yếu tố quyết định.'
    },
    {
      id: 'ix-sai-lam',
      title: 'IX. Sai lầm & Khắc phục',
      icon: AlertTriangle,
      image: img9,
      summary: 'Phương châm “đánh nhanh” ban đầu không hiệu quả; trung ương quyết định chuyển sang “đánh chắc, tiến chắc” — quyết định then chốt giúp bảo toàn lực lượng và giành thắng lợi.'
    },
    {
      id: 'x-y-nghia',
      title: 'X. Ý nghĩa lịch sử & Bài học',
      icon: Trophy,
      image: img10,
      summary: 'Chiến thắng mở ra kết quả chính trị quan trọng (Geneva), là minh chứng chiến lược cho phép lực lượng “nhỏ” thắng “lớn” nhờ chiến lược đúng và hậu cần vững.'
    }
  ]

  // Scroll spy & "Back to top" visibility
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)

      // Scroll spy for active section
      const sectionIds = sections.map(s => s.id)
      const scrollPosition = window.scrollY + 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // toggle subsection content open/close (we still keep subsections for expansion if needed)
  const toggleSubsection = (id) => {
    setExpandedSubsections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // Timeline mini (summary mốc thời gian)
  const timeline = [
    { date: '20/11/1953', label: 'Pháp nhảy dù chiếm Điện Biên Phủ' },
    { date: '06/12/1953', label: 'Bộ Chính trị quyết mở chiến dịch' },
    { date: '13/03/1954', label: 'Đợt 1: Mở cửa - tiêu diệt Him Lam' },
    { date: '30/03/1954', label: 'Đợt 3: Công kích then chốt (phía Đông)' },
    { date: '06/05/1954', label: 'Đêm bộc phá A1' },
    { date: '07/05/1954', label: 'Toàn thắng - chiếm sở chỉ huy' },
    { date: '21/07/1954', label: 'Hiệp định Geneva' }
  ]

  return (
    <div className="min-h-screen bg-[#f8f3eb] text-[#40291b] relative overflow-x-hidden">
      {/* layered decorative backgrounds (kept from original) */}
      <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"/>
      <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"/>

      <Navbar />

      {/* HERO */}
      <header id="top" className="relative w-full h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${sections[0].image})`,
            filter: 'grayscale(0.05) contrast(0.9)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        <div className="relative z-20 max-w-5xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-block rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] p-4 shadow-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white"/>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-xl">
              {heading}
            </h1>
            <p className="text-md md:text-lg text-white/90 max-w-3xl mx-auto mb-8">
              {heroText}
            </p>

            <div className="flex justify-center gap-4">
              <a href="#i-boi-canh" className="px-6 py-3 bg-[#b91c1c] text-white rounded-lg font-semibold hover:scale-105 transition transform">Khám phá Chiến dịch</a>
              <a href="#vi-dong-thoi-gian" className="px-6 py-3 bg-[#facc15] text-[#3b2b1b] rounded-lg font-semibold hover:scale-105 transition transform">Xem Dòng thời gian</a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-16 px-6 space-y-20">

        {/* Table of contents small (mobile) */}
        <div className="block lg:hidden">
          <div className="bg-white/90 p-4 rounded-xl shadow-md border border-[#f3d6d6] mb-6">
            <h3 className="font-bold text-[#7a1b1b] mb-2">Mục lục</h3>
            <div className="flex flex-wrap gap-2">
              {sections.map((s, idx) => (
                <a key={s.id} href={`#${s.id}`} className="px-3 py-1 text-sm bg-[#fff5e0] rounded-md border border-[#f0d7c2]">{idx + 1}. {smartTruncate(s.title, { chars: 30 })}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Sections (xen kẽ ảnh - nội dung) */}
        {sections.map((s, idx) => {
          const isReverse = idx % 2 === 1
          return (
            <motion.section
              id={s.id}
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${isReverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-[#fde7e7]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-80 object-cover transform transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // fallback image if hotlink blocked
                      e.target.src = 'https://via.placeholder.com/1200x800?text=H%C3%ACnh+%C4%91ang+c%E1%BA%A3nh+s%E1%BA%A5t'
                    }}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-[#fff6f4] flex items-center justify-center shadow-inner border border-[#f5d6d6]">
                    {/* render icon if exists */}
                    {s.icon ? <s.icon className="w-6 h-6 text-[#b91c1c]" /> : <BookOpen className="w-6 h-6 text-[#b91c1c]" />}
                  </div>
                  <h2 className="text-2xl font-bold text-[#7a1b1b]">{s.title}</h2>
                </div>

                <p className="text-lg text-[#513728] leading-relaxed mb-6">{s.summary}</p>

                <div className="flex items-center gap-3">
                  <a 
                     href={`#chitiet/${s.id}`} 
                    className="px-5 py-3 border-2 border-[#b91c1c] text-[#b91c1c] rounded-lg font-semibold hover:bg-[#b91c1c] hover:text-white transition"
                  >
                    Xem chi tiết
                  </a>

                  <button
                    onClick={() => toggleSubsection(s.id)}
                    className="text-sm text-[#7a1b1b] bg-[#fff5e8] px-3 py-2 rounded-md border border-[#f1d9d9]"
                  >
                    {expandedSubsections[s.id] ? 'Thu gọn' : 'Mở rộng'}
                  </button>
                </div>

                {/* optional expanded content (short) */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedSubsections[s.id] ? 'auto' : 0, opacity: expandedSubsections[s.id] ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="p-4 bg-[#fffaf7] border border-[#f3dcd8] rounded-md text-[#4a3428]">
                    {/* You can place a slightly longer excerpt here pulled from the DOCX */}
                    {expandedSubsections[s.id] && (
                      <p>
                        {/* fallback detailed text (can be replaced by full docs content) */}
                        {s.summary} — Nội dung chi tiết hơn sẽ xuất hiện ở đây. (Phiên bản rút gọn trên trang chủ; nút "Xem chi tiết" có thể mở trang con hoặc popup để xem toàn văn.)
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )
        })}

        {/* Timeline mini */}
        <section className="bg-white rounded-2xl border border-[#f3d6d6] p-8 shadow-md">
          <h3 className="text-2xl font-bold text-[#7a1b1b] mb-4">Dòng thời gian - Các mốc chính</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#b91c1c] to-[#7a1b1b] rounded"></div>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-white border-2 border-[#f0cfcf] flex items-center justify-center text-[#b91c1c] font-bold">{idx+1}</div>
                    <div className="pl-8">
                      <div className="font-semibold text-[#7a1b1b]">{item.date}</div>
                      <div className="text-sm text-[#4a3428]">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#fff6f4] rounded-lg border border-[#f3d6d6]">
              <h4 className="font-bold text-[#7a1b1b] mb-3">Tóm tắt</h4>
              <p className="text-[#4a3428] leading-relaxed">
                Chiến dịch Điện Biên Phủ diễn ra qua nhiều giai đoạn, chuẩn bị kỹ lưỡng và thay đổi phương châm khi cần thiết (từ “đánh nhanh” sang “đánh chắc”), dẫn tới chiến thắng quyết định 07/05/1954 và hệ quả chính trị trực tiếp là Hiệp định Geneva.
              </p>
              <div className="mt-6">
                <a href="https://baohungyen.vn/nhung-moc-thoi-gian-lich-su-cua-chien-dich-dien-bien-phu-1954-3171182.html" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#b91c1c] text-white rounded-md hover:bg-[#7f1d1d] transition">Xem nguồn tham khảo</a>
              </div>
            </div>
          </div>
        </section>

        {/* Read full doc CTA */}
        <section className="text-center py-12">
          <h3 className="text-2xl font-bold text-[#7a1b1b] mb-4">Muốn đọc toàn bộ nội dung?</h3>
          <p className="text-[#4a3428] mb-6">Bạn có thể mở file gốc hoặc tải về để xem bản đầy đủ, bao gồm mọi phân đoạn, dẫn chứng và hình ảnh minh họa.</p>
          <a href="/files/Nội dung web.docx" className="inline-block px-8 py-3 bg-[#facc15] text-[#3b2b1b] rounded-lg font-semibold hover:scale-105 transition">Đọc toàn bộ tài liệu</a>
        </section>

      </main>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-full shadow-lg transition-transform ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        style={{ background: '#b91c1c', color: '#fff' }}
      >
        <ArrowUp className="w-5 h-5"/>
      </button>

      {/* Sticky TOC Sidebar for large screens */}
{/* 🔽 Nút bật lại khi ẩn Mục lục */}
{!showToc && (
  <button
    onClick={() => setShowToc(true)}
    className="hidden xl:flex fixed right-6 bottom-24 z-50 items-center gap-2 bg-[#b91c1c] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#9f1717] transition-all duration-300"
  >
    <BookOpen className="w-4 h-4" /> Hiện Mục lục
  </button>
)}

{/* 🔽 Mục lục cố định (ẩn/hiện theo showToc) */}
{showToc && (
  <div className="hidden xl:block">
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-[#f3d6d6] p-6 w-80 transition-all duration-500">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#b91c1c] flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5"/>
            </div>
            <div>
              <div className="font-bold text-[#7a1b1b]">Mục lục</div>
              <div className="text-sm text-[#4a3428]">{sections.length} mục</div>
            </div>
          </div>

          {/* Nút ẩn */}
          <button
            onClick={() => setShowToc(false)}
            className="p-2 rounded-md bg-white border hover:bg-[#fff5f5] transition-all duration-200"
            title="Ẩn Mục lục"
          >
            <X className="w-4 h-4 text-[#7a1b1b]" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto space-y-2 pr-2">
          {sections.map((s, idx) => {
            const isActive = activeSection === s.id
            const isCompleted = sections.findIndex(sec => sec.id === activeSection) > idx
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-3 p-2 rounded-md ${
                  isActive ? 'bg-[#fff0f0] border border-[#f2dede]' : 'hover:bg-[#fff5f4]'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isActive
                      ? 'bg-[#b91c1c] text-white'
                      : isCompleted
                      ? 'bg-[#facc15] text-white'
                      : 'bg-[#ffeceb] text-[#b91c1c]'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#5a241f]">
                    {smartTruncate(s.title, { chars: 40 })}
                  </div>
                  <div className="text-xs text-[#6b4d41]">{s.summary.slice(0, 60)}...</div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#7a1b1b]" />
              </a>
            )
          })}
        </div>

        <div className="mt-4 text-center text-xs text-[#6b4d41]">
          Nhấn mục để điều hướng.
        </div>
      </div>
    </div>
  </div>
)}


      <Footer />
    </div>
  )
}
