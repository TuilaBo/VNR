

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
