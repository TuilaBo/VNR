
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
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

const FULL_CONTENT = {
  'i-boi-canh': {
    title: 'I. Bối cảnh và nguyên nhân',
    image: img1,
    paragraphs: [
      'Sau Cách mạng tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa ra đời. Tuy nhiên, Pháp quyết định quay trở lại Đông Dương để khôi phục hệ thống thuộc địa và bảo vệ lợi ích kinh tế — chính trị của họ.',
      'Các nguyên nhân chính bao gồm: (1) Pháp muốn khôi phục vị thế cường quốc sau Thế chiến II; (2) Bảo vệ nguồn tài nguyên và thị trường; (3) Bối cảnh quốc tế (Anh, Mỹ) tạo thuận lợi cho việc Pháp đổ bộ trở lại; (4) Pháp đánh giá thấp sức mạnh kháng chiến của nhân dân Việt Nam.',
      'Kết quả là từ 1946 đến đầu những năm 1950 xuất hiện thế giằng co, dẫn tới việc Pháp xây dựng Kế hoạch Nava và chọn Điện Biên Phủ làm “pháo đài” chiến lược.'
    ],
    highlights: [
      'Pháp dựa vào tiếp tế đường không (sân bay Mường Thanh).',
      'Chiến trường trở thành cuộc đối đầu giữa sức mạnh công sự — hỏa lực (Pháp) và nghệ thuật tác chiến, hậu cần dẻo dai (ta).'
    ],
    references: [
      { text: 'Getty Images — Dien Bien Phu photos', href: 'https://www.gettyimages.com' }
    ]
  },

  'ii-muc-tieu': {
    title: 'II. Mục tiêu chiến dịch',
    image: img2,
    paragraphs: [
      'Mục tiêu chiến lược: đánh sập “pháo đài” Điện Biên Phủ để phá tan Kế hoạch Nava, chuyển ưu thế chiến trường sang phía ta và giành lợi thế trên bàn đàm phán.',
      'Mục tiêu tác chiến: cô lập và khóa mạch tiếp tế đối phương (khóa sân bay Mường Thanh), chiếm các điểm cao then chốt (A1, C1, Eliane, Dominique), và tiêu diệt các cụm phòng thủ ngoại vi (Him Lam, Bản Kéo, Độc Lập).'
    ],
    highlights: [
      'Khóa đường không = khóa "mạch sống" tiếp tế của đối phương.',
      'Phương châm: chuẩn bị kỹ, đánh chắc, tiến chắc.'
    ]
  },

  'iii-the-tran': {
    title: 'III. Thế địch — Thế ta',
    image: img3,
    paragraphs: [
      'Pháp: bố trí công sự kiên cố, hầm hào, dày đặc hỏa lực pháo — cối — cơ giới; nhưng phụ thuộc mạnh vào tiếp tế đường không.',
      'Ta: lợi thế địa hình (điểm cao bao quanh lòng chảo), năng lực công sự hóa tiến công (đào hào, áp sát), pháo binh phân tán và lực lượng hậu cần dẻo dai.',
      'Bài toán chiến lược là biến ưu thế địa hình và tinh thần thành sức ép kéo dài, làm hao mòn nguồn lực đối phương.'
    ],
    highlights: ['Ưu thế của ta: pháo trên điểm cao + mạng hào tiếp tế trong công sự.']
  },

  'iv-hiep-dong': {
    title: 'IV. Hiệp đồng binh chủng',
    image: img4,
    paragraphs: [
      'Hiệp đồng là yếu tố then chốt: pháo binh (đập), cao xạ (khóa trời), công binh (mở đường), bộ binh (đè chiếm).',
      'Nguyên tắc tác chiến “búa — đe — khóa — mở” được thực thi liên tục trên từng mục tiêu, từng đợt đánh cục bộ.',
      'Công binh đóng vai trò mở lối: dò gỡ chướng ngại, đào hào áp sát, đặt bộc phá vào các “nút thép” công sự.'
    ],
    highlights: ['“Búa — đe — khóa — mở” — mô tả nhịp hiệp đồng trong tác chiến.']
  },

  'v-hau-can': {
    title: 'V. Hậu cần — Linh hồn chiến dịch',
    image: img5,
    paragraphs: [
      'Chiến dịch dài ngày đặt hậu cần lên vai trò quyết định. Ta tổ chức vận chuyển đa phương tiện: ô tô/ngựa thồ cho đoạn xa, xe đạp thồ cho đoạn trung, gùi và cáng tay cho đoạn sát trận địa.',
      '“Đường hào tiếp tế” chạy song hành với hào tiến công giúp đưa đạn, lương, thuốc men đến sát cửa mở; chiều ngược lại đưa thương binh rút về an toàn.',
      'Việc bảo đảm quân y, kho dã chiến, ngụy trang và phân tuyến kho trung chuyển là yếu tố then chốt để duy trì nhịp chiến đấu 56 ngày đêm.'
    ],
    highlights: ['Hậu cần trong công sự = khả năng giữ sức bền chiến đấu dài ngày.']
  },

  'vi-dong-thoi-gian': {
    title: 'VI. Dòng thời gian chính',
    image: img6,
    paragraphs: [
      '20/11/1953 — Quân Pháp nhảy dù chiếm Điện Biên Phủ (Castor).',
      '06/12/1953 — Bộ Chính trị quyết mở chiến dịch; chuẩn bị, kéo pháo vào vị trí.',
      '13/03/1954 — Đợt 1: mở cửa (Him Lam → Bản Kéo).',
      '30/03–cuối 4/1954 — Đợt 3: chiếm dải điểm cao phía Đông; C1, A1 là những trận đấu tiêu biểu.',
      '06/05/1954 (đêm) — Kích nổ khối bộc phá tại A1; ngày 07/05/1954 — toàn thắng; 21/07/1954 — Hiệp định Geneva.'
    ],
    highlights: ['Mốc then chốt: 06/05/1954 (bộc phá A1) → 07/05/1954 (Toàn thắng)']
  },

  'vii-ket-qua': {
    title: 'VII. Kết quả định lượng — định tính',
    image: img7,
    paragraphs: [
      'Kết quả vật chất: khoảng 16.200 quân địch bị tiêu diệt hoặc bắt làm tù binh; nhiều khí tài, kho đạn bị vô hiệu hóa.',
      'Kết quả chiến lược: Kế hoạch Nava sụp đổ, ưu thế chiến trường chuyển về phía ta, tạo điều kiện cho đàm phán Geneva và công nhận độc lập của các nước Đông Dương.'
    ],
    highlights: ['Chiến thắng quân sự đã chuyển thành lợi thế chính trị trên bàn đàm phán.']
  },

  'viii-nghe-thuat': {
    title: 'VIII. Nghệ thuật chiến dịch',
    image: img8,
    paragraphs: [
      'Chiến dịch là mẫu mực của “dùng mềm chế cứng”: dùng công sự hóa, thời gian, và chiến thuật lắt léo để hóa giải ưu thế hỏa lực đối phương.',
      'Các phương pháp như “vây lấn — bóc vỏ — bức hàng”, bố trí pháo tạo vòng cung ở các điểm cao, và hậu cần trong công sự tạo nên phương thức tác chiến hiệu quả dài ngày.'
    ],
    highlights: ['Bài học: chiến lược đúng + năng lực sửa sai = thắng lợi quyết định.']
  },

  'ix-sai-lam': {
    title: 'IX. Sai lầm & cách khắc phục',
    image: img9,
    paragraphs: [
      'Ban đầu phương án “đánh nhanh, thắng nhanh” được xem xét, nhưng thực tế cho thấy địch củng cố công sự và tiếp tế mạnh.',
      'Khắc phục: ngày 25–26/01/1954 chuyển phương châm sang “đánh chắc, tiến chắc”, kéo pháo ra, củng cố hậu cần, đào hào áp sát — quyết định này là then chốt để bảo đảm thắng lợi.',
      'Bài học rút ra: phải linh hoạt thay đổi phương án khi thực địa thay đổi.'
    ],
    highlights: ['Can đảm sửa sai là yếu tố quyết định của chỉ huy.']
  },

  'x-y-nghia': {
    title: 'X. Ý nghĩa lịch sử & bài học hiện đại',
    image: img10,
    paragraphs: [
      'Ý nghĩa: chiến thắng kết thúc thế lực thực dân Pháp ở Đông Dương, mở đường cho Hiệp định Geneva và là biểu tượng của khát vọng độc lập dân tộc.',
      'Bài học hiện đại: xác định và khóa “mạch sống” đối phương (ví dụ: tiếp tế đường không), hậu cần trong công sự, và hiệp đồng binh chủng là giá trị trường tồn.',
      'Chiến thắng còn nhắc lại giá trị của lựa chọn chiến lược linh hoạt và sự phối hợp giữa quân sự — chính trị.'
    ],
    highlights: ['Từ chiến trường đến đàm phán: thắng lợi quân sự phải được chuyển hóa thành lợi thế chính trị.']
  }
}

/* ---------- Small helper to render paragraph with optional inline highlights ---------- */
/* Hàm highlight từ khóa */


function renderParagraph(text) {
    const keywords = [
      'Điện Biên Phủ', 'Mường Thanh', 'A1', 'C1', 'Him Lam', 'Bản Kéo',
      'bộc phá', 'Hiệp định Geneva', 'Kế hoạch Nava', '56 ngày'
    ]
    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const parts = [{ type: 'text', text }]
  
    keywords.forEach((kw) => {
      const re = new RegExp(`(${esc(kw)})`, 'gi')
      let newParts = []
      parts.forEach((p) => {
        if (p.type === 'text') {
          const segs = p.text.split(re)
          for (let i = 0; i < segs.length; i++) {
            if (segs[i].toLowerCase() === kw.toLowerCase()) {
              newParts.push({ type: 'highlight', text: segs[i] })
            } else if (segs[i]) {
              newParts.push({ type: 'text', text: segs[i] })
            }
          }
        } else newParts.push(p)
      })
      parts.splice(0, parts.length, ...newParts)
    })
  
    return parts.map((p, idx) =>
      p.type === 'highlight'
        ? <span key={idx} className="bg-yellow-200 px-1 rounded text-[#7a1b1b] font-semibold">{p.text}</span>
        : <span key={idx}>{p.text}</span>
    )
  }
  
  export default function ChiTiet({ id }) {
    const item = FULL_CONTENT[id]
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [])
    if (!item) {
      return (
        <div className="min-h-screen bg-[#f8f3eb] text-[#40291b]">
          <Navbar />
          <main className="max-w-4xl mx-auto py-40 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Không tìm thấy nội dung</h2>
            <button
              onClick={() => (window.location.hash = '')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-md hover:bg-[#a11515]"
            >
              <ArrowLeft className="w-4 h-4" /> Quay về Trang chủ
            </button>
          </main>
          <Footer />
        </div>
      )
    }
  
    return (
      <div className="relative min-h-screen text-[#40291b] overflow-hidden">
        {/* 🔸 Nền 3 lớp giống Home */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bg1}), url(${bg2}), linear-gradient(180deg, rgba(250, 245, 234, 0.96) 0%, rgba(249, 243, 228, 0.96) 100%)`,
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundSize: 'cover, cover, cover',
            backgroundPosition: 'center, center, center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff0da]/40 via-[#fce3c1]/60 to-[#f8f3eb]/80 z-0" />
        <div
          className="absolute inset-0 bg-[url('../assets/bg4.png')] opacity-20 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bg4})` }}
        />
  
        <Navbar />
  
        {/* Ảnh chính */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 pt-16"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[420px] object-cover rounded-2xl shadow-2xl border-4 border-[#e0d4b7]"
          />
        </motion.div>
  
        {/* Nội dung */}
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto bg-white/80 backdrop-blur-md mt-10 mb-16 p-10 rounded-2xl shadow-xl border border-[#e6d8b4]"
        >
          <h1 className="text-4xl font-extrabold text-center text-[#b91c1c] mb-8 drop-shadow-sm">
            {item.title}
          </h1>
  
          {item.paragraphs.map((p, idx) => (
            <p key={idx} className="text-lg leading-relaxed text-justify mb-5 text-[#3e2f1b]">
              {renderParagraph(p)}
            </p>
          ))}
  
          {item.highlights && (
            <div className="mt-8 p-5 bg-[#fff6dc] border-l-4 border-[#b91c1c] rounded-md shadow-inner">
              <h4 className="font-semibold text-[#7a1b1b] mb-2 text-lg">🌟 Điểm nhấn</h4>
              <ul className="list-disc pl-5 space-y-1 text-[#3e2f1b]">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
  
          <div className="text-center mt-10">
            <button
              onClick={() => (window.location.hash = '')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b91c1c] text-white rounded-full shadow-md hover:bg-[#9f1717] transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> Quay về Trang chủ
            </button>
          </div>
        </motion.main>
  
        <Footer />
      </div>
    )
  }