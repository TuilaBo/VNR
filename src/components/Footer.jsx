

// import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, ChevronRight } from 'lucide-react'
// import bg4 from '../assets/bg4.jpg'

// export default function Footer() {
//   return (
//     <footer className="relative w-full overflow-hidden text-[#3e2f1b]">
      
//       {/* Background Image */}
//       {/* <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
//         style={{ backgroundImage: `url(${bg4})` }}
//       ></div>    */}
//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-historical-brown-900/95 to-historical-brown-800/95"></div> */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
//         style={{ backgroundImage: `url(${bg4})` }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf0]/90 via-[#f8f3eb]/95 to-[#f6ead5]/90"></div>
//       <div className="absolute inset-0 backdrop-blur-[1px]"></div>
//       {/* ✳️ Nội dung chính */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
//           {/* 🏛️ Giới thiệu */}
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#b91c1c] to-[#7a1b1b] flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">V</span>
//               </div>
//               <div>
//                 <h4 className="font-bold text-xl text-[#b91c1c]">VNR202</h4>
//                 <p className="text-[#7a1b1b]/80 text-sm">Tư liệu lịch sử Việt Nam</p>
//               </div>
//             </div>
//             <p className="text-[#3e2f1b]/90 leading-relaxed mb-6">
//               Nơi lưu giữ và trình bày các tư liệu lịch sử Việt Nam, đặc biệt là Chiến dịch Điện Biên Phủ, theo phong cách trưng bày trực tuyến – kết hợp cổ điển và hiện đại.
//             </p>
//             <div className="flex gap-4">
//               {[Facebook, Twitter, Instagram].map((Icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-[#b91c1c] hover:bg-[#9f1717] flex items-center justify-center text-white shadow-md transition-all duration-300"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* 🔗 Liên kết hữu ích */}
//           <div>
//             <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
//               Liên kết hữu ích
//             </h4>
//             <ul className="space-y-3 text-[#3e2f1b]">
//               {[
//                 'Trang chủ',
//                 'Giới thiệu',
//                 'Tư liệu – Hình ảnh',
//                 'Tin tức – Sự kiện',
//                 'Liên hệ'
//               ].map((item, i) => (
//                 <li key={i}>
//                   <a
//                     href="#"
//                     className="flex items-center gap-2 hover:text-[#b91c1c] transition-all duration-300"
//                   >
//                     <ChevronRight className="w-4 h-4 text-[#b91c1c]" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 📰 Tin nổi bật */}
//           <div>
//             <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
//               Tin nổi bật
//             </h4>
//             <div className="space-y-4 text-[#3e2f1b]">
//               {[
//                 {
//                   title: 'Kỷ niệm 70 năm Chiến thắng Điện Biên Phủ',
//                   date: 'Tháng 5, 2024'
//                 },
//                 {
//                   title: 'Triển lãm “Lửa thiêng Điện Biên” tại Bảo tàng Lịch sử',
//                   date: 'Tháng 3, 2024'
//                 },
//                 {
//                   title: 'Công bố bộ phim tài liệu phục dựng chiến dịch',
//                   date: 'Tháng 2, 2024'
//                 }
//               ].map((news, i) => (
//                 <div key={i} className="hover:text-[#b91c1c] transition-all duration-300">
//                   <p className="font-medium">{news.title}</p>
//                   <p className="text-sm text-[#7a1b1b]/80">{news.date}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 📞 Liên hệ */}
//           <div>
//             <h4 className="font-bold text-lg text-[#b91c1c] mb-6 flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-[#b91c1c]"></div>
//               Liên hệ
//             </h4>
//             <div className="space-y-4 text-[#3e2f1b]">
//               {[
//                 { icon: Mail, label: 'Email', value: 'info@vnr202.vn' },
//                 { icon: Phone, label: 'Điện thoại', value: '0123 456 789' },
//                 { icon: MapPin, label: 'Địa chỉ', value: 'Hà Nội, Việt Nam' },
//                 { icon: Clock, label: 'Giờ làm việc', value: '8:00 - 17:00' }
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-full bg-[#b91c1c] flex items-center justify-center">
//                     <item.icon className="w-4 h-4 text-white" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-[#3e2f1b]">{item.label}</p>
//                     <p className="text-sm text-[#5a4b39]">{item.value}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🌾 Thanh dưới cùng */}
//       <div className="border-t border-[#b91c1c]/20 bg-[#f8f3eb]/70 backdrop-blur-md">
//         <div className="w-full max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-[#5a4b39]">
//             © 2024 VNR202 – Tư liệu lịch sử Việt Nam. Mọi quyền được bảo lưu.
//           </p>
//           <div className="flex items-center gap-6 text-sm">
//             {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Liên hệ'].map((item, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="text-[#7a1b1b]/80 hover:text-[#b91c1c] transition-colors duration-200"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import React from "react"
import { Code2, Presentation, BookOpen, Brain, Target, Award, Users,Cpu } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* 🔥 Nền gradient + ánh sáng */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7a0a0a] via-[#b91c1c] to-[#520000]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,100,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,180,80,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 space-y-16">

        {/* === 1️⃣ Thành viên nhóm === */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#ffdf8a]" />
            <h2 className="text-2xl font-extrabold text-[#ffdf8a] tracking-wide uppercase">Thành viên nhóm</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#ffd97a]/30 shadow-[0_0_25px_rgba(255,215,120,0.15)] space-y-10">

            {/* Development Team */}
            <div>
              <h3 className="text-[#ffe9a6] font-semibold text-lg mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#ffcc6f]" /> Development Team
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "	Võ Đăng Khoa", role: "Developer", ms:"SE170395" },
                  { name: "	Đoàn Đình Quang Trường", role: "Developer" , ms:"SE170593"},
                  { name: "	Nguyễn Quốc Thái", role: "Developer", ms:"SE172422" },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#b91c1c]/40 to-[#7a0a0a]/60 border border-[#ffcf7a]/40 rounded-xl p-5 text-center shadow-inner hover:shadow-[0_0_12px_rgba(255,220,150,0.4)] transition-all duration-300"
                  >
                    <h4 className="font-bold text-[#fffaf2]">{m.name}</h4>
                    <h5 className="font-bold text-[#fffaf2]">{m.ms}</h5>
                    <p className="text-xs uppercase tracking-wider text-[#ffe9a6] mt-1">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Presentation Team */}
            <div>
              <h3 className="text-[#ffe9a6] font-semibold text-lg mb-3 flex items-center gap-2">
                <Presentation className="w-5 h-5 text-[#ffcc6f]" /> Presentation Team
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { name: "Nguyễn Hoàng Quân", role: "Speaker", ms:"SS180512" },
                  { name: "Võ Ngọc Thu Trà", role: "Speaker" , ms:"SS170197"},
                  { name: "Nguyễn Bá Duẩn", role: "Speaker", ms:"SS180533" },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-[#b91c1c]/40 to-[#7a0a0a]/60 border border-[#ffcf7a]/40 rounded-xl p-5 text-center shadow-inner hover:shadow-[0_0_12px_rgba(255,220,150,0.4)] transition-all duration-300"
                  >
                    <h4 className="font-bold text-[#fffaf2]">{m.name}</h4>
                    <h5 className="font-bold text-[#fffaf2]">{m.ms}</h5>
                    <p className="text-xs uppercase tracking-wider text-[#ffe9a6] mt-1">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === 2️⃣ Thông tin khóa học === */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#ffd97a]/30 shadow-[0_0_20px_rgba(255,220,120,0.15)]">
            <h3 className="text-[#ffe08a] font-semibold text-lg mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#ffd874]" /> Thông tin khóa học
            </h3>
            <ul className="space-y-1 text-sm text-[#fff5d6] leading-relaxed">
            <li>📘 Môn học: Lịch sử Đảng Cộng sản Việt Nam</li>
            <li>🗓️ Học kỳ: Fall 2025</li>
            <li>👨‍🏫 Giảng viên: Giảng viên Hoàng Thắng</li>
            <li>🏫 Trường: Đại học FPT</li>
            <li>🎓 Chuyên ngành: Triết học – Khoa học Chính trị</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#ffd97a]/30 shadow-[0_0_20px_rgba(255,220,120,0.15)]">
            <h3 className="text-[#ffe08a] font-semibold text-lg mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#ffd874]" /> Nguồn tham khảo chính
            </h3>
            <ul className="list-disc list-inside text-sm text-[#fff5d6] leading-relaxed space-y-1">
            <li>
    <strong>Giáo trình Lịch sử Đảng Cộng sản Việt Nam</strong> – Bộ Giáo dục và Đào tạo, 
    NXB Chính trị quốc gia Sự thật, 2021.
  </li>
  <li>
    <strong>Văn kiện Đảng Toàn tập</strong>, tập 1–54, NXB Chính trị quốc gia Sự thật, 2001–2021.
  </li>
  <li>
    <strong>Lịch sử Đảng Cộng sản Việt Nam (1930–2020)</strong> – Viện Lịch sử Đảng, 
    Học viện Chính trị quốc gia Hồ Chí Minh, NXB Chính trị quốc gia Sự thật, 2020.
  </li>
  <li>
    <strong>Đảng Cộng sản Việt Nam: Cương lĩnh, Điều lệ, Văn kiện Đại hội XIII</strong>, 
    NXB Chính trị quốc gia Sự thật, 2021.
  </li>

              <li><strong>Giáo trình VNR202 – Bộ GD&ĐT</strong></li>
            </ul>
          </div>
        </section>

        {/* === 3️⃣ Về dự án === */}

 <section>
          <h3 className="text-[#ffe9a6] font-semibold text-lg mb-4 flex items-center gap-2 border-b border-[#ffd97a]/40 pb-1">
            <Brain className="w-5 h-5 text-[#ffcc6f]" /> Về dự án HCM202
          </h3>

          {/* Lưới 5 card (responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Target className="w-5 h-5 text-[#ffd97a]" />,
                title: "Mục tiêu",
                desc: "Tôn vinh tinh thần Điện Biên, hiểu quá trình hình thành và phát triển của Đảng thông qua triển lãm trực tuyến sinh động."
              },
              {
                icon: <Code2 className="w-5 h-5 text-[#ffd97a]" />,
                title: "Công nghệ",
                desc: "ReactJS • TailwindCSS • Framer Motion • Responsive UI • RESTful API."
              },
              {
                icon: <BookOpen className="w-5 h-5 text-[#ffd97a]" />,
                title: "Thống kê",
                desc: "10+ sản phẩm trưng bày • 3+ trang nội dung • 2 chế độ xem chi tiết • AI Chatbot integration."
              },
              {
                icon: <Award className="w-5 h-5 text-[#ffd97a]" />,
                title: "Giá trị đạt được",
                desc: "Nâng cao hiểu biết về lịch sử Đảng • Phát triển tư duy phản biện • Rèn luyện kỹ năng frontend • Teamwork và project management"
              },
              {
                icon: <Cpu className="w-5 h-5 text-[#ffd97a]" />,
                title: "AI & Công cụ hỗ trợ",
                desc: "Công cụ OCR cho tư liệu ảnh • Notion/Google Drive để quản lý tư liệu • GitHub Copilot MCP Server (hướng dẫn code) • Coze AI (chatbot tương tác) • Perplexity (research & tra cứu) • ChatGPT (chuẩn hóa dữ liệu) • NotebookLM (định hướng theo giáo trình)."
              }
            ].map((box, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#b91c1c]/30 to-[#7a0a0a]/50 border border-[#ffcf7a]/30 rounded-xl p-5 hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0">{box.icon}</div>
                  <h4 className="font-bold text-[#fff8e6]">{box.title}</h4>
                </div>
                <p className="text-sm text-[#fff3d6] leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* === Tag cuối === */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { label: "🇻🇳 Made in Vietnam", color: "bg-[#b91c1c]" },
            { label: "🎓 Educational Purpose", color: "bg-[#ff7b00]" },
            { label: "🧠 Open Source", color: "bg-[#ffb347]" },
            { label: "🏫 University Project", color: "bg-[#b91c1c]" },
            { label: "💻 Modern Web Tech", color: "bg-[#ff7b00]" },
          ].map((tag, idx) => (
            <span
              key={idx}
              className={`${tag.color} px-4 py-1 rounded-full text-xs font-semibold text-white shadow-md`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* === Bản quyền === */}
        <p className="text-center text-xs text-[#ffe7c4] mt-8">
          © 2025 HCM202 Project – Phát triển bởi sinh viên Đại học FPT | Dùng cho mục đích học tập và trưng bày lịch sử Điện Biên Phủ.
        </p>
      </div>
    </footer>
  )
}
