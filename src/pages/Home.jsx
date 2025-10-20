import { useEffect, useState } from 'react'
import { smartTruncate, truncateByChars } from '../utils/truncate'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowUp, BookOpen, Target, Shield, Flag, Map, History, Trophy, LineChart, Lightbulb, AlertTriangle, Menu, X, ChevronRight, ChevronDown, Globe, Users, Clock, Zap, Award, TrendingUp, FileText, Calendar, BarChart3, Bot, MessageCircle, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg4 from '../assets/bg4.jpg'

export default function Home() {
  const [count, setCount] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [tocOpen, setTocOpen] = useState(false)
  const [expandedSubsections, setExpandedSubsections] = useState({})

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)
      
      // Scroll spy for active section
      const sectionIds = sections.map(s => s.id)
      const scrollPosition = window.scrollY + 200
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSubsection = (subsectionId) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [subsectionId]: !prev[subsectionId]
    }))
  }

  const limits = { heading: 90, subheading: 140, paragraph: 240, cta: 28 }

  const heading = smartTruncate('Đảng Cộng sản Việt Nam', { chars: limits.heading })
  const subheading = smartTruncate('Lịch sử và Truyền thống', { chars: limits.subheading })
  const heroText = smartTruncate(
    'Khám phá những trang sử hào hùng của Đảng Cộng sản Việt Nam, từ những ngày đầu thành lập đến những thành tựu vĩ đại của ngày nay.',
    { chars: limits.paragraph }
  )

  const sections = [
    { 
      id: 'i-boi-canh', 
      title: 'I. Tổng Quan Chiến Dịch và Bối Cảnh', 
      icon: BookOpen,
      children: [
        { 
          id: 'boi-canh-phap', 
          title: 'Bối cảnh Pháp mở cuộc chiến',
          icon: Globe,
          content: 'Pháp quay lại Việt Nam vì muốn khôi phục hệ thống thuộc địa và vị thế cường quốc sau Thế chiến II. Đồng thời, Pháp cần bảo vệ lợi ích kinh tế (khai thác cao su, than, gạo) và chính trị cụ thể. Bối cảnh quốc tế cũng thuận lợi khi Mỹ từng bước ủng hộ Pháp nhằm ngăn chặn cộng sản trong Chiến tranh Lạnh. Pháp đã đánh giá sai sức mạnh phong trào độc lập của Việt Nam, cho rằng chính quyền cách mạng non trẻ không thể trụ vững.'
        },
        { 
          id: 'ke-hoach-nava', 
          title: 'Kế hoạch Nava và Điện Biên Phủ',
          icon: Map,
          content: 'Trong thế giằng co 1946–1953, Pháp xây dựng Kế hoạch Nava và chọn Điện Biên Phủ làm "pháo đài" để khóa Tây Bắc, cắt đường liên lạc và tiếp tế của ta, với mục tiêu "kết thúc chiến tranh trong danh dự" bằng không vận.'
        },
        { 
          id: 'quyet-tam-chien-luoc', 
          title: 'Quyết tâm Chiến lược của Ta',
          icon: Award,
          content: 'Trung ương Đảng và Chủ tịch Hồ Chí Minh xác định Điện Biên Phủ là điểm quyết chiến chiến lược. Nếu bẻ gãy được "mắc xích" này, toàn bộ Kế hoạch Nava sẽ sụp đổ, ưu thế chiến trường sẽ chuyển về phía ta, và vị thế đàm phán tại Geneva sẽ mạnh lên rõ rệt.'
        }
      ]
    },
    { 
      id: 'ii-muc-tieu', 
      title: 'II. Mục tiêu Tác chiến và Thế trận', 
      icon: Target,
      children: [
        { 
          id: 'muc-tieu-chien-dich', 
          title: 'Mục tiêu chiến dịch',
          icon: Target,
          content: 'Mục tiêu chiến lược là Đánh sập Điện Biên Phủ để phá tan Kế hoạch Nava. Mục tiêu tác chiến là cắt "mạch sống" tiếp tế của địch (khóa sân bay Mường Thanh), giành "mắt – tay" hỏa lực (chiếm các điểm cao A1, C1), và tạo bước ngoặt kết thúc chiến tranh.'
        },
        { 
          id: 'trinh-tu-tac-chien', 
          title: 'Trình tự tác chiến',
          icon: Clock,
          content: 'Tuân thủ trình tự "ngoại vi trước – then chốt kế – trung tâm cuối". Ta ưu tiên diệt vành đai ngoại vi (Him Lam, Bản Kéo, Độc Lập) để mở lối áp sát. Sau đó, chiếm các điểm cao then chốt phía Đông (Eliane, Dominique, C1, A1) để khống chế trung tâm. Cuối cùng, đánh trung tâm (Mường Thanh – sở chỉ huy) khi đã khóa đường băng.'
        },
        { 
          id: 'the-tran', 
          title: 'Thế trận',
          icon: Map,
          content: 'Thế trận được bố trí theo tư duy "cao bao thấp, vòng cung siết dần". Pháo 105mm được phân tán trên các sườn núi bao quanh lòng chảo. Ta khai thác ưu thế địa hình và khả năng triển khai pháo binh – cao xạ trên điểm cao, cùng kinh nghiệm "công sự hóa tiến công" (đào hào, ngụy trang, áp sát).'
        },
        { 
          id: 'vai-tro-binh-chung', 
          title: 'Vai trò Binh chủng (Hiệp đồng)',
          icon: Users,
          content: 'Hiệp đồng theo nhịp "búa – đe – khóa – mở". Bộ binh là mũi nhọn đột kích và giữ chốt. Pháo binh là "cái búa" chế áp hỏa điểm và khống chế mặt đường băng. Cao xạ là "lưới trời" bẻ gãy cầu không vận. Công binh là lực lượng "mở đường và phá khóa", đào hào áp sát, đặt bộc phá tại các "nút thép" công sự như A1.'
        }
      ]
    },
    { 
      id: 'iii-hau-can', 
      title: 'III. Hậu Cần – Linh Hồn Chiến Dịch Dài Ngày', 
      icon: Shield,
      children: [
        { 
          id: 'tinh-chat-hau-can', 
          title: 'Tính chất Hậu cần',
          icon: Zap,
          content: 'Chiến dịch đòi hỏi dòng đạn – gạo – thuốc men chảy liên tục suốt 56 ngày đêm trong điều kiện đường xa, núi cao, và bị địch đánh phá. Hậu cần – công sự là "linh hồn" chiến dịch dài ngày.'
        },
        { 
          id: 'he-thong-van-chuyen', 
          title: 'Hệ thống Vận chuyển',
          icon: Users,
          content: 'Tổ chức vận tải "đa phương tiện" theo tầng lớp: ô tô và ngựa thồ (đoạn xa), xe đạp thồ "trăm cân" (đoạn trung và gần), gùi và cáng tay (đoạn sát chiến hào).'
        },
        { 
          id: 'hau-can-trong-cong-su', 
          title: '"Hậu cần trong Công sự"',
          icon: Shield,
          content: 'Phát triển hệ thống "đường hào tiếp tế" chạy song song với hào tiến công. Điều này giúp vận chuyển đạn – lương – nước tiếp cận tận "cửa mở" ngay trước giờ nổ súng và cho phép tải thương an toàn theo chiều ngược lại trong hỏa lực địch.'
        },
        { 
          id: 'bi-mat-va-quan-y', 
          title: 'Bí mật và Quân y',
          icon: FileText,
          content: 'Kho dã chiến, trận địa pháo, trạm phẫu đều được xây trong công sự kiên cố, ngụy trang chống trinh sát đường không. Quân y áp dụng quy tắc "sơ cứu tại chỗ – chuyển trong hào – mổ gần trận địa – trung chuyển về sau" để xử trí thương binh kịp thời.'
        },
        { 
          id: 'dieu-tiet-nhip-cung-cap', 
          title: 'Điều tiết nhịp cung cấp',
          icon: Clock,
          content: 'Kế hoạch cung cấp được nâng trần theo giai đoạn, đặc biệt trước các đợt tổng công kích, nhằm bảo đảm "đủ đạn để mở cửa – đủ vật tư để giữ chốt – đủ lương để luân phiên".'
        }
      ]
    },
    { 
      id: 'iv-dong-thoi-gian', 
      title: 'IV. Dòng Thời Gian và Các Đợt Tiến Công', 
      icon: Flag,
      children: [
        { 
          id: 'chuan-bi-chuyen-phuong-cham', 
          title: 'Chuẩn bị và Chuyển phương châm',
          icon: Calendar,
          content: '20/11/1953: Quân Pháp nhảy dù chiếm đóng Điện Biên Phủ. 06/12/1953: Bộ Chính trị quyết nghị mở Chiến dịch Điện Biên Phủ. 26/01/1954: Quyết định bản lề: Chuyển phương án từ "đánh nhanh, thắng nhanh" sang "đánh chắc, tiến chắc". Ta lấy thời gian để đổi lấy chắc thắng.'
        },
        { 
          id: 'dot-1-mo-cua', 
          title: 'Đợt 1 (Mở cửa)',
          icon: Zap,
          content: '13/03/1954: Tiêu diệt Him Lam, bức hàng Bản Kéo. Ta bẻ "yết hầu" ngoại vi, vòng vây khép lại bước đầu.'
        },
        { 
          id: 'dot-2-siet-vong-vay', 
          title: 'Đợt 2 (Siết vòng vây)',
          icon: Shield,
          content: '15/03 – 01/04/1954: Làm rỗng vành đai ngoại vi, hoàn thiện tuyến xuất phát xung phong. Khóa dần sân bay Mường Thanh bằng pháo và cao xạ, khiến "mạch sống" tiếp tế của địch bị bóp nghẹt.'
        },
        { 
          id: 'dot-3-cong-kich-then-chot', 
          title: 'Đợt 3 (Công kích then chốt)',
          icon: Target,
          content: '30/03 – cuối 04/1954: Đánh chiếm dải điểm cao phía Đông (C1, A1) để "đánh mù – đánh liệt" trung tâm Mường Thanh. Công binh đào hầm ngầm, chuẩn bị bộc phá lớn dưới A1.'
        },
        { 
          id: 'tong-cong-kich-toan-thang', 
          title: 'Tổng công kích và Toàn thắng',
          icon: Trophy,
          content: '06/05/1954 (Đêm): Kích nổ khối bộc phá gần 1 tấn tại A1. Ta làm chủ A1 vào rạng sáng 7/5, triệt chỗ dựa hỏa lực – chỉ huy của trung tâm. 07/05/1954 (17:30): Các mũi thọc sâu đột nhập, chiếm sở chỉ huy, bắt sống Tướng De Castries cùng Bộ tham mưu. Tập đoàn cứ điểm sụp đổ hoàn toàn.'
        },
        { 
          id: 'he-qua', 
          title: 'Hệ quả',
          icon: Award,
          content: '21/07/1954: Hiệp định Geneva được ký kết, chấm dứt chiến tranh Đông Dương.'
        }
      ]
    },
    { 
      id: 'v-nghe-thuat-quan-su', 
      title: 'V. Nghệ thuật Quân sự và Ý nghĩa Lịch sử', 
      icon: Map,
      children: [
        { 
          id: 'nghe-thuat-chien-dich', 
          title: 'Nghệ thuật Chiến dịch',
          icon: Lightbulb,
          content: 'Mưu lược "Dĩ nhu chế cương": dùng "mềm" (công sự hóa tiến công, thời gian) để hóa giải "cứng" (hỏa lực, công sự dày đặc) của địch. Chiến thuật chủ đạo là "vây lấn – bóc vỏ – bức hàng"; đào hào áp sát, bóc rụng lớp ngoại vi rồi bẻ dải điểm cao then chốt.'
        },
        { 
          id: 'ket-qua-dinh-luong', 
          title: 'Kết quả định lượng',
          icon: BarChart3,
          content: 'Khoảng 16.200 quân địch bị tiêu diệt hoặc bắt làm tù binh. Bộ chỉ huy tại Mường Thanh bị bắt sống.'
        },
        { 
          id: 'y-nghia-chien-luoc', 
          title: 'Ý nghĩa chiến lược',
          icon: TrendingUp,
          content: 'Kế hoạch Nava sụp đổ hoàn toàn; ưu thế chiến lược chuyển hẳn về phía ta. Chiến dịch Điện Biên Phủ cho thấy đòn quyết chiến trên chiến trường là chìa khóa để "mở cửa" bàn đàm phán Geneva từ thế mạnh.'
        },
        { 
          id: 'bai-hoc-hien-dai', 
          title: 'Bài học hiện đại',
          icon: BookOpen,
          content: 'Bài học về dũng khí sửa sai (chuyển phương châm từ "đánh nhanh" sang "đánh chắc"). Bài học về việc khóa "mạch sống" của đối phương (triệt tiêu cầu không vận). Quân sự đi trước, ngoại giao chốt hạ.'
        }
      ]
    },
    { id: 'vi-dong-thoi-gian', title: 'VI. Dòng thời gian chiến dịch: Từ chuẩn bị đến toàn thắng', icon: History, children: [
      { id: '6-1-truoc-chien-dich', title: '6.1 Trước chiến dịch (chuẩn bị – quyết tâm – bố trí)' },
      { id: '6-2-dot-1', title: '6.2 Tiến công đợt 1 (13–15/3)' },
      { id: '6-3-dot-2', title: '6.3 Tiến công đợt 2 (15/3–1/4)' },
      { id: '6-4-dot-3', title: '6.4 Tiến công đợt 3 (30/3–cuối 4)' },
      { id: '6-5-tong-cong-kich', title: '6.5 Tổng công kích – đánh sập "bộ não" (1–7/5)' },
      { id: '6-6-sau-chien-dich', title: '6.6 Sau chiến dịch (hệ quả ngoại giao)' },
    ]},
    { id: 'vii-ket-qua', title: 'VII. Kết quả định lượng – định tính', icon: LineChart },
    { id: 'viii-nghe-thuat', title: 'VIII. Nghệ thuật chiến dịch – điểm then chốt', icon: Lightbulb },
    { id: 'ix-sai-lam', title: 'IX. Sai lầm phía ta và cách khắc phục', icon: AlertTriangle },
    { id: 'x-y-nghia', title: 'X. Ý nghĩa chiến lược – bài học hiện đại', icon: Trophy },
  ]

  return (
    <div className="min-h-screen bg-vintage-cream-50 w-full relative overflow-hidden">
      {/* Background layers - much more visible */}
      <img src={bg1} alt="bg1" className="absolute inset-0 w-full h-full object-cover opacity-60"/>
      <img src={bg2} alt="bg2" className="absolute inset-0 w-full h-full object-cover opacity-40"/>

      <Navbar sections={sections} />

      <header id="top" className="w-full relative overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ 
            backgroundImage: `url(${bg4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Additional overlay to blend with outer background */}
        <div className="absolute inset-0 bg-vintage-cream-50/20"></div>
        
        {/* Gradient overlays for better text contrast - more harmonious */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-vietnam-red-500/10 via-transparent to-vietnam-gold-500/10"></div>
        
        {/* Content */}
        <div className="relative z-20 py-32 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 flex items-center justify-center shadow-2xl">
                <BookOpen className="w-12 h-12 text-white"/>
              </div>
            </div>
            
            <h1 
              className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl animate-fade-in cursor-pointer relative overflow-hidden mb-6"
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(90deg, transparent, #ef4444, transparent)';
                e.target.style.backgroundSize = '200% 100%';
                e.target.style.backgroundPosition = '200% 0';
                e.target.style.backgroundClip = 'text';
                e.target.style.webkitBackgroundClip = 'text';
                e.target.style.color = 'transparent';
                e.target.style.transition = 'background-position 0.5s ease';
                setTimeout(() => {
                  e.target.style.backgroundPosition = '-200% 0';
                }, 10);
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              {heading}
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white drop-shadow-lg cursor-pointer relative overflow-hidden max-w-4xl mx-auto leading-relaxed"
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(90deg, transparent, #ef4444, transparent)';
                e.target.style.backgroundSize = '200% 100%';
                e.target.style.backgroundPosition = '200% 0';
                e.target.style.backgroundClip = 'text';
                e.target.style.webkitBackgroundClip = 'text';
                e.target.style.color = 'transparent';
                e.target.style.transition = 'background-position 0.5s ease';
                setTimeout(() => {
                  e.target.style.backgroundPosition = '-200% 0';
                }, 10);
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              {subheading}
            </p>
            
            {/* Decorative elements */}
            <div className="mt-12 flex justify-center items-center gap-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-vietnam-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-vietnam-red-500 animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-vietnam-red-500"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full relative">
        {/* Hero Section */}
        <section className="w-full py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="text-center bg-white/90 rounded-2xl p-12 shadow-2xl border border-vietnam-red-100 hover:shadow-3xl hover:scale-105 transition-all duration-500 group"
            >
              <h2 className="text-5xl font-bold text-vietnam-red-700 mb-6 text-shadow-vietnam">
                {smartTruncate('Chào mừng đến với trang web lịch sử', { chars: limits.heading })}
              </h2>
              <p className="text-historical-brown-700 text-xl leading-relaxed mb-8 max-w-4xl mx-auto">{heroText}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="btn-vietnam text-lg px-8 py-4 hover:scale-110 hover:shadow-2xl hover:bg-vietnam-red-700 transition-all duration-300 transform hover:-translate-y-1">
                  {truncateByChars('Tìm hiểu lịch sử', limits.cta)}
                </button>
                <button className="btn-gold text-lg px-8 py-4 hover:scale-110 hover:shadow-2xl hover:bg-vietnam-gold-600 transition-all duration-300 transform hover:-translate-y-1">
                  {truncateByChars('Xem hình ảnh', limits.cta)}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="w-full py-12 px-6 bg-gradient-to-br from-vintage-cream-50 to-vintage-cream-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-historical-brown-800 mb-4">Mục lục</h3>
              <p className="text-lg text-historical-brown-600 max-w-2xl mx-auto">
                Khám phá các phần nội dung chi tiết về lịch sử chiến dịch
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sections.map((s, idx) => {
                const Icon = s.icon
                return (
                  <motion.a 
                    key={s.id} 
                    href={`#${s.id}`} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: idx * 0.1 }} 
                    className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl border border-vietnam-red-100 hover:border-vietnam-red-400 transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      {Icon ? (
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-500"
                          style={{
                            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.1) rotate(12deg)'
                            e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1) rotate(0deg)'
                            e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                          }}
                        >
                          <Icon 
                            className="w-6 h-6 text-white transition-colors duration-500"
                            onMouseEnter={(e) => {
                              e.target.style.color = '#fbbf24'
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = 'white'
                            }}
                          />
                        </div>
                      ) : null}
                      <div className="flex-1">
                        <div className="font-bold text-lg text-vietnam-red-700 group-hover:text-vietnam-red-600 transition-colors mb-2">{s.title}</div>
                        {s.children && (
                          <ul className="space-y-1 text-sm text-historical-brown-600">
                            {s.children.map((c) => (
                              <li key={c.id} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-vietnam-gold-500"></div>
                                {c.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </section>

          <div className="max-w-7xl mx-auto space-y-16">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <motion.section 
                  id={s.id} 
                  key={s.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.2 }} 
                  transition={{ duration: 0.6 }} 
                  className="bg-white rounded-2xl shadow-xl border border-vietnam-red-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group"
                >
                  <div className="bg-gradient-to-r from-vietnam-red-600 to-vietnam-red-700 px-8 py-6">
                    <div className="flex items-center gap-4">
                      {Icon ? (
                        <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <Icon className="w-6 h-6 text-white group-hover:text-vietnam-gold-200"/>
                        </div>
                      ) : null}
                      <h2 className="text-3xl font-bold text-white">{s.title}</h2>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <p className="text-lg text-historical-brown-700 leading-relaxed">
                          {smartTruncate('Nội dung đang chờ từ file docs. Phần này sẽ được giới hạn ký tự để súc tích nhưng vẫn đủ ý.', { chars: limits.paragraph })}
                        </p>
                      </div>
                      <div className="lg:col-span-1">
                        <div className="aspect-[4/3] rounded-xl border-2 border-vietnam-red-200 bg-gradient-to-br from-vietnam-red-50 to-vietnam-gold-50 flex items-center justify-center text-historical-brown-500 font-medium">
                          Hình minh họa
                        </div>
                      </div>
                    </div>

                    {s.children && (
                      <div className="mt-8 space-y-4">
                        {s.children.map((c) => (
                          <div 
                            id={c.id} 
                            key={c.id} 
                            className="bg-gradient-to-br from-vintage-cream-50 to-vintage-cream-100 rounded-xl border border-vietnam-red-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                          >
                            <button
                              onClick={() => toggleSubsection(c.id)}
                              className={`w-full p-6 text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden group ${
                                expandedSubsections[c.id] 
                                  ? 'shadow-md' 
                                  : ''
                              }`}
                              style={{
                                backgroundColor: expandedSubsections[c.id] 
                                  ? 'rgba(239, 68, 68, 0.1)' 
                                  : 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                if (!expandedSubsections[c.id]) {
                                  e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.05)'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!expandedSubsections[c.id]) {
                                  e.target.style.backgroundColor = 'transparent'
                                }
                              }}
                            >
                              {/* Animated background */}
                              <div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                style={{
                                  background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.3), rgba(220, 38, 38, 0.3))'
                                }}
                              ></div>
                              
                              {/* Content */}
                              <div className="relative z-10 flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                  {c.icon && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                                      <c.icon className="w-4 h-4 text-white"/>
                                    </div>
                                  )}
                                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                                    expandedSubsections[c.id] 
                                      ? 'text-vietnam-red-800' 
                                      : 'text-vietnam-red-700 group-hover:text-vietnam-red-800'
                                  }`}>
                                    {c.title}
                                  </h3>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    expandedSubsections[c.id] 
                                      ? 'bg-vietnam-red-600 scale-150' 
                                      : 'bg-vietnam-red-400 group-hover:bg-vietnam-red-600 group-hover:scale-125'
                                  }`}></div>
                                  <ChevronDown 
                                    className={`w-6 h-6 transition-all duration-300 ${
                                      expandedSubsections[c.id] 
                                        ? 'rotate-180 text-vietnam-red-600 scale-110' 
                                        : 'text-vietnam-red-500 group-hover:text-vietnam-red-600 group-hover:scale-110'
                                    }`}
                                  />
                                </div>
                              </div>
                            </button>
                            
                            <motion.div
                              initial={false}
                              animate={{
                                height: expandedSubsections[c.id] ? 'auto' : 0,
                                opacity: expandedSubsections[c.id] ? 1 : 0
                              }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <p className="text-historical-brown-700 leading-relaxed">
                                  {c.content || smartTruncate('Tiểu mục sẽ được rút gọn nội dung để rõ ý chính, bổ sung hình ảnh khi có tài liệu.', { chars: limits.paragraph })}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.section>
              )
            })}
          </div>

        {/* Demo Section */}
        {/* <section className="w-full py-12 px-6 bg-gradient-to-br from-vietnam-red-50 to-vietnam-gold-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-vietnam-red-200 hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <h3 className="text-3xl font-bold text-vietnam-red-700 mb-6">{smartTruncate('Demo Counter', { chars: limits.heading })}</h3>
              <div className="text-8xl font-bold text-vietnam-gold-600 mb-8 group-hover:scale-110 group-hover:text-vietnam-red-600 transition-all duration-500">{count}</div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setCount(count + 1)} 
                  className="btn-historical text-lg px-8 py-4 hover:scale-110 hover:shadow-2xl hover:bg-vietnam-red-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {truncateByChars('Tăng', limits.cta)}
                </button>
                <button 
                  onClick={() => setCount(count - 1)} 
                  className="btn-gold text-lg px-8 py-4 hover:scale-110 hover:shadow-2xl hover:bg-vietnam-gold-600 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {truncateByChars('Giảm', limits.cta)}
                </button>
              </div>
            </div>
          </div>
        </section> */}

      </main>

      {/* Toggle Button for TOC */}
      <button
        onClick={() => setTocOpen(!tocOpen)}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-vietnam-red-600 hover:bg-vietnam-red-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hidden xl:flex items-center justify-center"
      >
        {tocOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Enhanced Sticky Table of Contents Sidebar */}
      <motion.div 
        initial={{ x: 400, opacity: 0 }}
        animate={{ 
          x: tocOpen ? 0 : 400, 
          opacity: tocOpen ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-vietnam-red-200 p-6 max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-vietnam-red-700 text-lg flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white"/>
              </div>
              Mục lục
            </h4>
            <div className="text-xs text-historical-brown-500 bg-vietnam-red-50 px-2 py-1 rounded-full">
              {sections.length} mục
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs text-historical-brown-600 mb-2">
              <span>Tiến độ</span>
              <span>{Math.round((sections.findIndex(s => s.id === activeSection) + 1) / sections.length * 100)}%</span>
            </div>
            <div className="w-full bg-vietnam-red-100 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-vietnam-red-500 to-vietnam-red-700 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(sections.findIndex(s => s.id === activeSection) + 1) / sections.length * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-vietnam-red-200 scrollbar-track-transparent">
            {sections.map((s, idx) => {
              const Icon = s.icon
              const isActive = activeSection === s.id
              const isCompleted = sections.findIndex(section => section.id === activeSection) > idx
              
              return (
                <motion.a
                  key={s.id}
                  href={`#${s.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group relative ${
                    isActive 
                      ? 'bg-gradient-to-r from-vietnam-red-100 to-vietnam-red-50 text-vietnam-red-700 shadow-lg border border-vietnam-red-200' 
                      : 'text-historical-brown-600 hover:bg-vietnam-red-50 hover:text-vietnam-red-600 hover:shadow-md'
                  }`}
                  onClick={() => {
                    setTimeout(() => setTocOpen(false), 500)
                  }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-vietnam-red-500 to-vietnam-red-700 rounded-r-full"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Section number */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-vietnam-red-600 text-white' 
                      : isCompleted
                      ? 'bg-vietnam-gold-500 text-white'
                      : 'bg-vietnam-red-100 text-vietnam-red-600 group-hover:bg-vietnam-red-600 group-hover:text-white'
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  {Icon && (
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-vietnam-red-600 text-white shadow-lg' 
                        : 'bg-vietnam-red-100 text-vietnam-red-600 group-hover:bg-vietnam-red-600 group-hover:text-white group-hover:scale-110'
                    }`}>
                      <Icon className="w-4 h-4"/>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold leading-tight mb-1">{s.title}</div>
                    {s.children && (
                      <div className="text-xs text-historical-brown-500">
                        {s.children.length} tiểu mục
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? 'text-vietnam-red-600' : 'text-historical-brown-400 group-hover:text-vietnam-red-600'
                  }`}/>
                </motion.a>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-vietnam-red-100 text-center">
            <p className="text-xs text-historical-brown-500">
              Nhấn vào mục để điều hướng
            </p>
          </div>
        </div>
      </motion.div>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 p-3 rounded-full bg-vietnam-red-600 text-white shadow-vietnam hover:bg-vietnam-red-700 z-50">
          <ArrowUp className="w-5 h-5"/>
        </button>
      )}

      <Footer sections={sections} />
    </div>
  )
}
