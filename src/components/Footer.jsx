

import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react'
import bg4 from '../assets/bg4.jpg'

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden text-[#3e2f1b]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bg4})` }}
      ></div>   
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-historical-brown-900/95 to-historical-brown-800/95"></div>
      {/* ✳️ Nội dung chính */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          {/* 🏛️ Giới thiệu */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7a1b1b] flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h4 className="font-bold text-xl text-[#b91c1c]">VNR202</h4>
                <p className="text-[#7a1b1b]/80 text-sm">Tư liệu lịch sử Việt Nam</p>
              </div>
            </div>
            <p className="text-[#3e2f1b]/90 leading-relaxed mb-6">
              Nơi lưu giữ và trình bày các tư liệu lịch sử Việt Nam, đặc biệt là Chiến dịch Điện Biên Phủ, theo phong cách trưng bày trực tuyến – kết hợp cổ điển và hiện đại.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#b91c1c] hover:bg-[#9f1717] flex items-center justify-center text-white shadow-md transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 🔗 Liên kết hữu ích */}
          <div>
            <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
              Liên kết hữu ích
            </h4>
            <ul className="space-y-3 text-[#3e2f1b]">
              {[
                'Trang chủ',
                'Giới thiệu',
                'Tư liệu – Hình ảnh',
                'Tin tức – Sự kiện',
                'Liên hệ'
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-[#b91c1c] transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#b91c1c]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📰 Tin nổi bật */}
          <div>
            <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
              Tin nổi bật
            </h4>
            <div className="space-y-4 text-[#3e2f1b]">
              {[
                {
                  title: 'Kỷ niệm 70 năm Chiến thắng Điện Biên Phủ',
                  date: 'Tháng 5, 2024'
                },
                {
                  title: 'Triển lãm “Lửa thiêng Điện Biên” tại Bảo tàng Lịch sử',
                  date: 'Tháng 3, 2024'
                },
                {
                  title: 'Công bố bộ phim tài liệu phục dựng chiến dịch',
                  date: 'Tháng 2, 2024'
                }
              ].map((news, i) => (
                <div key={i} className="hover:text-[#b91c1c] transition-all duration-300">
                  <p className="font-medium">{news.title}</p>
                  <p className="text-sm text-[#7a1b1b]/80">{news.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 📞 Liên hệ */}
          <div>
            <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
              Liên hệ
            </h4>
            <div className="space-y-4 text-[#3e2f1b]">
              {[
                { icon: Mail, label: 'Email', value: 'info@vnr202.vn' },
                { icon: Phone, label: 'Điện thoại', value: '0123 456 789' },
                { icon: MapPin, label: 'Địa chỉ', value: 'Hà Nội, Việt Nam' },
                { icon: Clock, label: 'Giờ làm việc', value: '8:00 - 17:00' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#b91c1c] flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#3e2f1b]">{item.label}</p>
                    <p className="text-sm text-[#5a4b39]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🌾 Thanh dưới cùng */}
      <div className="border-t border-[#b91c1c]/20 bg-[#f8f3eb]/70 backdrop-blur-md">
        <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#5a4b39]">
            © 2024 VNR202 – Tư liệu lịch sử Việt Nam. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6 text-sm">
            {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Liên hệ'].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-[#7a1b1b]/80 hover:text-[#b91c1c] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
