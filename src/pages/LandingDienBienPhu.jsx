


import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Clock } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg4 from '../assets/bg4.jpg'
import dbp1 from '../assets/1.jpg'
import dbp2 from '../assets/2.jpg'
import dbp3 from '../assets/3.jpg'
import dbp4 from '../assets/4.jpg'
import dbp5 from '../assets/5.jpg'
import dbp6 from '../assets/6.jpg'
import dbp7 from '../assets/7.jpg'
import dbp9 from '../assets/9.jpg'
import dbp10 from '../assets/10.jpg'
import dbp11 from '../assets/11.jpg'
import dbp12 from '../assets/12.jpg'
import dbp13 from '../assets/13.jpg'
import dbp14 from '../assets/14.jpg'
import dbp15 from '../assets/15.jpg'

const TIMELINE = [
    {
      date: '20/11/1953',
      title: 'Pháp mở cuộc hành quân đánh chiếm Điện Biên Phủ',
      desc: 'Thực dân Pháp mở cuộc hành quân Castor, nhảy dù xuống Điện Biên Phủ để xây dựng tập đoàn cứ điểm mạnh nhất Đông Dương.',
      image: dbp1
    },
    {
      date: '6/12/1953',
      title: 'Bộ Chính trị họp và quyết tâm tiêu diệt tập đoàn cứ điểm',
      desc: 'Bộ Chính trị họp, hạ quyết tâm: “Tiêu diệt tập đoàn cứ điểm Điện Biên Phủ để tạo nên một bước ngoặt mới trong chiến tranh”.',
      image: dbp2
    },
    {
      date: '19/12/1953',
      title: 'Triển khai kế hoạch tác chiến',
      desc: 'Bộ Chỉ huy chiến dịch triển khai kế hoạch đánh địch ở Lai Châu, không cho rút về Điện Biên Phủ và bao vây quân địch ở đây.',
      image: dbp3
    },
    {
      date: '01/01/1954',
      title: 'Đại tướng Võ Nguyên Giáp được giao chỉ huy chiến dịch',
      desc: 'Đại tướng Võ Nguyên Giáp, Ủy viên Bộ Chính trị, Tổng tư lệnh được giao làm Chỉ huy trưởng Chiến dịch kiêm Bí thư Đảng ủy Mặt trận Điện Biên Phủ.',
      image: dbp4
    },
    {
      date: '12/01/1954',
      title: 'Hội nghị Đảng ủy Mặt trận thông qua phương châm tác chiến',
      desc: 'Hội nghị Đảng ủy Mặt trận được triệu tập tại Thẩm Púa, nhất trí phương châm “đánh nhanh, thắng nhanh”.',
      image: dbp5
    },
    {
      date: '15/01/1954',
      title: 'Bộ Chính trị chỉ đạo chuẩn bị trận địa',
      desc: 'Bộ Chính trị chỉ đạo đôn đốc các đơn vị mở đường kéo pháo và bố trí trận địa.',
      image: dbp6
    },
    {
      date: '26/01/1954',
      title: 'Thay đổi phương châm tác chiến',
      desc: 'Đại tướng Võ Nguyên Giáp quyết định chuyển phương châm từ “đánh nhanh, thắng nhanh” sang “đánh chắc, tiến chắc”.',
      image: dbp7
    },
    {
      date: '31/01/1954',
      title: 'Sở chỉ huy chiến dịch chuyển vị trí',
      desc: 'Sở chỉ huy chiến dịch chuyển đến khu rừng Mường Phăng, huyện Điện Biên – trung tâm chỉ huy chính của chiến dịch.',
      image: dbp9
    },
    {
      date: '13/03/1954',
      title: 'Chiến dịch Điện Biên Phủ chính thức mở màn',
      desc: 'Pháo binh ta nổ súng tấn công Him Lam, mở đầu cho chiến dịch lịch sử kéo dài 55 ngày đêm.',
      image: dbp10
    },
    {
      date: '17/03/1954',
      title: 'Kết thúc Đợt 1 – tiêu diệt cụm cứ điểm phía Bắc',
      desc: 'Quân ta tiêu diệt hoàn toàn cụm cứ điểm Him Lam, Độc Lập và Bản Kéo, phá vỡ phòng tuyến phía Bắc tập đoàn cứ điểm.',
      image: dbp11
    },
    {
      date: '30/03/1954',
      title: 'Mở Đợt 2 – tấn công các cứ điểm phía Đông',
      desc: 'Từ ngày 30/3 đến 30/4/1954, quân ta mở đợt tấn công thứ hai vào các cứ điểm Eliane, Dominique, đánh mạnh vào trung tâm Mường Thanh.',
      image: dbp12
    },
    {
      date: '01/05/1954',
      title: 'Mở Đợt 3 – tổng công kích',
      desc: 'Ngày 1/5/1954, quân ta mở đợt tổng công kích cuối cùng, tiêu diệt toàn bộ tập đoàn cứ điểm Điện Biên Phủ.',
      image: dbp13
    },
    {
      date: '07/05/1954',
      title: 'Chiến thắng Điện Biên Phủ 🏁',
      desc: 'Lúc 17 giờ 30 phút ngày 7/5/1954, quân ta chiếm sở chỉ huy địch, tướng De Castries cùng toàn bộ bộ chỉ huy địch đầu hàng vô điều kiện.',
      image: dbp14
    },
    {
      date: '21/07/1954',
      title: 'Hiệp định Geneva được ký kết',
      desc: 'Hiệp định Geneva được ký kết, chấm dứt chiến tranh ở Đông Dương, công nhận độc lập, chủ quyền và toàn vẹn lãnh thổ của Việt Nam.',
      image: dbp15
    }
  ]
  

export default function LandingDienBienPhu() {
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.timeline-card')
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7) {
          setActiveIndex(i)
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen text-[#40291b] overflow-hidden">
      {/* 🌄 Nền cổ điển */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg1}), url(${bg2}), linear-gradient(180deg, rgba(250,245,234,0.96) 0%, rgba(249,243,228,0.96) 100%)`,
          backgroundSize: 'cover, cover, cover',
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
          backgroundPosition: 'center, center, center'
        }}
      />
      <div
        className="absolute inset-0 bg-[url('../assets/bg4.png')] opacity-25 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg4})` }}
      />

      <Navbar />


{/* 🏞️ Giới thiệu */}
<header className="relative z-20 text-center py-24 px-6">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto bg-white/85 backdrop-blur-sm border border-[#f3d6d6] rounded-2xl shadow-xl p-10"
    style={{
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      backgroundImage:
        'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,250,240,0.9) 100%)'
    }}
  >
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-[#b91c1c] mb-6 leading-snug"
    >
      Diễn biến Chiến dịch Điện Biên Phủ – 1954
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-lg md:text-xl text-[#4a3428] leading-relaxed"
    >
      Dòng thời gian tái hiện những dấu mốc lịch sử quan trọng trong chiến dịch Điện Biên Phủ,
      chiến thắng lừng lẫy năm châu, chấn động địa cầu.
    </motion.p>
  </motion.div>
</header>

      {/* 🧭 Thanh năm 1954 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[520px] bottom-0 border-l-4 border-[#b91c1c]/60 z-0">
  <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#b91c1c] text-white text-sm px-4 py-1 rounded-full shadow-md top-0">
    Năm 1954
  </div>
</div>

      {/* 📜 Timeline xen kẽ */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {TIMELINE.map((item, idx) => {
          const isLeft = idx % 2 === 0
          const isActive = idx === activeIndex

          return (
            <motion.div
              key={idx}
              className={`timeline-card flex flex-col md:flex-row items-center my-16 md:my-20 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Ảnh */}
              <div className="md:w-1/2 w-full p-4">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className={`rounded-2xl shadow-xl border border-[#f3d6d6] object-cover w-full h-72 md:h-96 transition-all duration-500 ${
                    isActive ? 'brightness-110 scale-[1.03]' : 'brightness-95'
                  }`}
                />
              </div>

              {/* Nội dung */}
              <div className="md:w-1/2 w-full p-4">
                <motion.div
                  className={`bg-white/90 backdrop-blur-md rounded-2xl border border-[#f3d6d6] shadow-md p-6 md:p-8 transition-all duration-500 ${
                    isActive ? 'shadow-[#b91c1c]/40 shadow-lg' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#b91c1c] font-semibold mb-3">
                    <Clock className="w-4 h-4" /> {item.date}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5a241f] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4a3428] text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </main>

      <Footer />
    </div>
  )
}
