import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react'
import bg4 from '../assets/bg4.jpg'

export default function Footer({ sections }) {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bg4})` }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-historical-brown-900/95 to-historical-brown-800/95"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vietnam-red-500 to-vietnam-red-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">VNR202</h4>
                  <p className="text-vintage-cream-200 text-sm">Tài liệu lịch sử</p>
                </div>
              </div>
              <p className="text-vintage-cream-200 leading-relaxed mb-6">
                Cổng thông tin tài liệu chiến dịch, thiết kế theo phong cách lịch sử Việt Nam với nội dung chính xác và hình ảnh sinh động.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-vietnam-red-600 hover:bg-vietnam-red-700 flex items-center justify-center text-white transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-vietnam-red-600 hover:bg-vietnam-red-700 flex items-center justify-center text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-vietnam-red-600 hover:bg-vietnam-red-700 flex items-center justify-center text-white transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Main Sections */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vietnam-gold-500"></div>
                Mục chính
              </h4>
              <ul className="space-y-3">
                {sections.slice(0,5).map((s) => (
                  <li key={s.id}>
                    <a 
                      href={`#${s.id}`} 
                      className="text-vintage-cream-200 hover:text-vietnam-gold-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-vietnam-gold-500"></div>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campaign Timeline */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vietnam-gold-500"></div>
                Chiến dịch
              </h4>
              <ul className="space-y-3">
                {sections.find((x)=>x.id==='vi-dong-thoi-gian')?.children?.map((c) => (
                  <li key={c.id}>
                    <a 
                      href={`#${c.id}`} 
                      className="text-vintage-cream-200 hover:text-vietnam-gold-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-vietnam-gold-500"></div>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-vietnam-gold-500"></div>
                Liên hệ
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-vietnam-red-600 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-vintage-cream-200 font-medium">Email</p>
                    <p className="text-vintage-cream-300 text-sm">info@vnr202.vn</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-vietnam-red-600 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-vintage-cream-200 font-medium">Điện thoại</p>
                    <p className="text-vintage-cream-300 text-sm">0123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-vietnam-red-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-vintage-cream-200 font-medium">Địa chỉ</p>
                    <p className="text-vintage-cream-300 text-sm">Hà Nội, Việt Nam</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-vietnam-red-600 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-vintage-cream-200 font-medium">Giờ làm việc</p>
                    <p className="text-vintage-cream-300 text-sm">8:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-vietnam-red-600/30">
          <div className="w-full max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-vintage-cream-300 text-sm">
                © 2024 VNR202 - Tư liệu lịch sử chiến dịch. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-vintage-cream-300 hover:text-vietnam-gold-400 transition-colors duration-200">
                  Chính sách bảo mật
                </a>
                <a href="#" className="text-vintage-cream-300 hover:text-vietnam-gold-400 transition-colors duration-200">
                  Điều khoản sử dụng
                </a>
                <a href="#" className="text-vintage-cream-300 hover:text-vietnam-gold-400 transition-colors duration-200">
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
