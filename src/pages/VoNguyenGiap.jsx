import { useEffect, useState } from 'react'
import { 
  ArrowUp, BookOpen, Star, Heart, Flag, Award, Users, 
  Compass, Shield, Target, Lightbulb, Trophy, Calendar,
  ChevronRight, X, Map, Sparkles, Clock, MapPin
} from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function VoNguyenGiap() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Timeline cuộc đời
  const timeline = [
    { year: '1911', event: 'Sinh tại An Xá, Lệ Thủy, Quảng Bình', icon: Star },
    { year: '1926', event: 'Học tại Quốc học Huế, tham gia phong trào yêu nước', icon: BookOpen },
    { year: '1933', event: 'Gia nhập Đảng Cộng sản Đông Dương', icon: Flag },
    { year: '1940', event: 'Sang Trung Quốc, gặp Nguyễn Ái Quốc (Bác Hồ)', icon: Heart },
    { year: '1944', event: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân', icon: Shield },
    { year: '1945', event: 'Tổng khởi nghĩa tháng Tám thành công', icon: Target },
    { year: '1954', event: 'Chiến thắng Điện Biên Phủ "chấn động địa cầu"', icon: Trophy },
    { year: '1975', event: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước', icon: Award },
    { year: '2013', event: 'Qua đời tại Hà Nội, hưởng thọ 102 tuổi', icon: Sparkles }
  ]

  // Giai đoạn cuộc đời
  const lifeStages = [
    {
      title: 'Thời thiếu niên (1911-1926)',
      image: 'https://cdn.tienphong.vn/images/a7a4eb175a75567c9a7ae09768d709483db64a02274c9563563d92168295771be6440000dab57c562176c8ca5e08132e2e1dccc42a77d4398aedc15b8ef53e9a/img-1365-5431.jpg',
      content: 'Sinh ra trong gia đình nho sinh nghèo có truyền thống yêu nước tại Quảng Bình. Từ nhỏ đã chứng kiến cảnh đời khổ cực của đồng bào dưới ách đô hộ Pháp, nuôi dưỡng ý chí cách mạng.'
    },
    {
      title: 'Năm tháng học sinh (1926-1933)',
      image: 'https://cdn-images.vtv.vn/thumb_w/1000/2021/8/18/photo-1-16292940337141404073120.jpg',
      content: 'Học tại Quốc học Huế, tiếp xúc với tư tưởng tiến bộ và phong trào yêu nước. Tham gia biểu tình chống thực dân Pháp, bị đuổi học nhưng quyết tâm theo đuổi con đường cách mạng.'
    },
    {
      title: 'Bén duyên cách mạng (1933-1940)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPS_MTdIB_shFWUtuQTmBWKN0IJtLNXBcFZy7IA1zoMqwJfBnIHXTgg-UQbn5PrE7vIDo&usqp=CAU',
      content: 'Gia nhập Đảng Cộng sản Đông Dương, hoạt động bí mật tuyên truyền trong công nhân, nông dân. Nhiều lần bị bắt giam nhưng không khuất phục, tiếp tục rèn luyện và học tập lý luận cách mạng.'
    },
    {
      title: 'Gặp Bác Hồ - Dựng quân đội (1940-1945)',
      image: 'https://cdn.tienphong.vn/images/bdfc554ea35983ad68a96e0050b6e2cb9afd05418a3ff71ba57483f4a3b0483808d76ff2ef8c25cfaca8041eb5896c2def32fec2d1fa778758d28141bb20d47487accf3e551a18e5d0e73f6e7af8e0e6f0ca7ea95604f1801b5908427e7f00fe/99af259f55a916594dceb84a562e5457.jpg.webp',
      content: 'Sang Trung Quốc gặp Nguyễn Ái Quốc, được Bác đào tạo về quân sự và chính trị. Ngày 22/12/1944, thành lập Đội Việt Nam Tuyên truyền Giải phóng quân với 34 chiến sĩ - tiền thân Quân đội nhân dân Việt Nam.'
    },
    {
      title: 'Cách mạng Tháng Tám (1945)',
      image: 'https://www.quanlynhanuoc.vn/wp-content/uploads/2021/08/daituong_vonguyengiap-61-e1628332580975.jpg',
      content: 'Với vai trò Tổng Tư lệnh, lãnh đạo lực lượng vũ trang giành chính quyền trong Tổng khởi nghĩa tháng 8/1945. Mở ra kỷ nguyên độc lập tự do cho dân tộc Việt Nam.'
    },
    {
      title: 'Kháng chiến chống Pháp (1945-1954)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ndhS7ko7Wirxf2COBwpmkyYAj94cY2HEtpBYSD9g1wCuXyOVHGLETB3TA-IV6z53GeU&usqp=CAU',
      content: 'Tổng chỉ huy kháng chiến chống Pháp. Chỉ huy các chiến dịch lớn: Việt Bắc, Biên giới, Hòa Bình. Đỉnh cao là chiến thắng Điện Biên Phủ 7/5/1954 - "Điện Biên Phủ chói lọi năm châu, chấn động địa cầu".'
    },
    {
      title: 'Kháng chiến chống Mỹ (1954-1975)',
      image: 'https://thanhnien.mediacdn.vn/Uploaded/2014/Pictures20116/MinhNguyet/Thang8/16.8/VoNGiap3.jpg',
      content: 'Bộ trưởng Bộ Quốc phòng, chỉ đạo kháng chiến chống Mỹ cứu nước. Xây dựng chiến lược "đánh lâu dài", kết hợp hai miền. Chiến thắng lớn: Mậu Thân 1968, Xuân 1975 giải phóng hoàn toàn miền Nam.'
    },
    {
      title: 'Những năm cuối đời (1975-2013)',
      image: 'https://cdnportal.vnu.edu.vn/data/upload/2013/10/15035/image/VoNguyenGiap%20by%20Bui%20Tuan.jpg',
      content: 'Nghỉ hưu năm 1980 nhưng vẫn quan tâm quốc phòng, đào tạo thế hệ sau. Để lại di sản quý báu về nghệ thuật quân sự và tinh thần yêu nước. Qua đời ngày 4/10/2013, hưởng thọ 102 tuổi.'
    }
  ]

  // Thành tựu nổi bật
  const achievements = [
    {
      icon: Trophy,
      title: 'Điện Biên Phủ 1954',
      desc: 'Chiến thắng "chấn động địa cầu", đánh bại thực dân Pháp'
    },
    {
      icon: Award,
      title: 'Giải phóng miền Nam',
      desc: 'Chiến dịch Hồ Chí Minh 1975, thống nhất đất nước'
    },
    {
      icon: BookOpen,
      title: 'Tác phẩm quân sự',
      desc: '"Đường tới Điện Biên Phủ" và nhiều công trình lý luận'
    },
    {
      icon: Users,
      title: 'Xây dựng quân đội',
      desc: 'Từ 34 chiến sĩ thành lực lượng vũ trang hùng mạnh'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f3eb] text-[#40291b] relative overflow-x-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b91c1c' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}
      />
<Navbar />
      {/* HERO Section */}
      <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://i0.wp.com/lichsu.blog/wp-content/uploads/2025/02/dai-tuong-vo-nguyen-giapo.jpg?fit=1920%2C1080&ssl=1)`,
            filter: 'grayscale(0.2) brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#f8f3eb]"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <div className="inline-block p-4 bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] rounded-full mb-6 shadow-2xl">
            <Star className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Đại tướng Võ Nguyên Giáp
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-3 font-semibold">
            Vị tướng của nhân dân
          </p>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Người anh hùng của dân tộc, thiên tài quân sự thế kỷ 20, người sáng lập và rèn luyện Quân đội nhân dân Việt Nam từ những ngày đầu tiên.
          </p>

          <div className="flex items-center justify-center gap-4 text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <Calendar className="w-5 h-5" />
              <span>25/8/1911 - 4/10/2013</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5" />
              <span>Quảng Bình</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto py-16 px-6">

        {/* Quote Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#fff5f0] to-[#ffe8e0] p-8 md:p-12 rounded-2xl border-l-4 border-[#b91c1c] shadow-lg">
            <div className="flex gap-4 items-start">
              <div className="text-6xl text-[#b91c1c] leading-none">"</div>
              <div>
                <p className="text-xl md:text-2xl text-[#5a241f] font-medium italic mb-4">
                  Không có gì quý hơn độc lập tự do
                </p>
                <p className="text-[#6b4d41]">
                  - Câu nói mà Đại tướng luôn ghi nhớ và thực hiện trọn đời, theo lời dạy của Chủ tịch Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline ngang */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a1b1b] mb-3">Dòng Thời Gian Cuộc Đời</h2>
            <p className="text-[#6b4d41]">102 năm cuộc đời cống hiến cho dân tộc</p>
          </div>

          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block overflow-x-auto pb-8">
              <div className="flex gap-6 min-w-max px-4">
                {timeline.map((item, idx) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col items-center w-48"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] flex items-center justify-center shadow-lg mb-3">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-1 h-12 bg-gradient-to-b from-[#b91c1c] to-transparent mb-3"></div>
                      <div className="text-center bg-white/80 p-3 rounded-lg shadow-md border border-[#f3d6d6]">
                        <div className="font-bold text-[#b91c1c] mb-1">{item.year}</div>
                        <div className="text-sm text-[#5a241f]">{item.event}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-4">
              {timeline.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] flex items-center justify-center shadow-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 bg-white/80 p-3 rounded-lg shadow-md border border-[#f3d6d6]">
                      <div className="font-bold text-[#b91c1c]">{item.year}</div>
                      <div className="text-sm text-[#5a241f]">{item.event}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Life Stages - Card Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a1b1b] mb-3">Các Giai Đoạn Cuộc Đời</h2>
            <p className="text-[#6b4d41]">Hành trình từ người thanh niên yêu nước đến vị tướng huyền thoại</p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8">
            {lifeStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f3d6d6] hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={stage.image} 
                    alt={stage.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{stage.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#5a241f] leading-relaxed">{stage.content}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 gap-8">
  {lifeStages.map((stage, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#f3d6d6] hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-56 overflow-hidden">
        {/* Ảnh nền làm mờ để che viền */}
        <div
          className="absolute inset-0 bg-center bg-cover blur-2xl scale-110"
          style={{ backgroundImage: `url(${stage.image})` }}
        ></div>

        {/* Ảnh chính hiển thị đầy đủ */}
        <img
          src={stage.image}
          alt={stage.title}
          className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 z-10"
        />

        {/* Hiệu ứng overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>

        {/* Tiêu đề ảnh */}
        <div className="absolute bottom-4 left-4 right-4 z-30">
          <h3 className="text-xl font-bold text-white">{stage.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[#5a241f] leading-relaxed">{stage.content}</p>
      </div>
    </motion.div>
  ))}
</div>

        </motion.section>

        {/* Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#7a1b1b] mb-3">Thành Tựu Nổi Bật</h2>
            <p className="text-[#6b4d41]">Những dấu ấn không thể phai mờ trong lịch sử dân tộc</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white to-[#fff5f0] p-6 rounded-xl shadow-lg border border-[#f3d6d6] text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#b91c1c] to-[#7f1d1d] rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-[#7a1b1b] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6b4d41]">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Legacy Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#7f1d1d] to-[#b91c1c] rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Di Sản Bất Hủ</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-95">
                Đại tướng Võ Nguyên Giáp không chỉ là một vị tướng tài ba, mà còn là biểu tượng của ý chí kiên cường, trí tuệ sáng tạo và lòng yêu nước nồng nàn. Những chiến thắng của Người đã khẳng định sức mạnh của dân tộc Việt Nam, truyền cảm hứng cho các thế hệ mai sau.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Chiến lược gia xuất sắc
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Người anh hùng dân tộc
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  Tấm gương sáng muôn đời
                </div>
              </div>
            </div>
          </div>
        </motion.section>

      </main>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed right-6 bottom-6 z-50 p-3 bg-[#b91c1c] text-white rounded-full shadow-lg transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Footer */}
<Footer />
    </div>
  )
}