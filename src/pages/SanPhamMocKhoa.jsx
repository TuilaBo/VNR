import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg4 from '../assets/bg4.jpg'
import { Facebook } from 'lucide-react'
import moc1 from '../assets/moc khoa 1.png'
import moc2 from '../assets/moc khoa 2.png'
import moc3 from '../assets/moc khoa 3.png'
import moc4 from '../assets/moc khoa 4.png'
import moc5 from '../assets/moc khoa 5.png'
import moc6 from '../assets/moc khoa 6.png'
import moc7 from '../assets/moc khoa 7.png'
import moc8 from '../assets/moc khoa 8.png'
import moc9 from '../assets/moc khoa 9.png'
import moc10 from '../assets/moc khoa 10.png'

const PRODUCTS = [
    {
      name: 'Móc khóa 20/11/1953 – Pháp chiếm Điện Biên Phủ',
      desc: 'Thiết kế khắc họa khoảnh khắc quân Pháp mở chiến dịch chiếm Điện Biên Phủ, từng bước xây dựng tập đoàn cứ điểm quân sự mạnh nhất Đông Dương.',
      image: moc1
    },
    {
      name: 'Móc khóa 6/12/1953 – Quyết tâm tiêu diệt Điện Biên Phủ',
      desc: 'Mẫu móc khóa tái hiện cuộc họp Bộ Chính trị quyết định tiêu diệt tập đoàn cứ điểm Điện Biên Phủ – bước ngoặt lớn của cuộc kháng chiến.',
      image: moc2
    },
    {
      name: 'Móc khóa 19/12/1953 – Kế hoạch đánh địch ở Lai Châu',
      desc: 'Thiết kế mô phỏng hình ảnh chiến dịch đánh địch ở Lai Châu, mở đầu thế bao vây quân Pháp tại Điện Biên Phủ.',
      image: moc3
    },
    {
      name: 'Móc khóa 1/1/1954 – Đại tướng Võ Nguyên Giáp chỉ huy chiến dịch',
      desc: 'Hình ảnh Đại tướng Võ Nguyên Giáp nhận nhiệm vụ Chỉ huy trưởng Chiến dịch Điện Biên Phủ, thể hiện tinh thần lãnh đạo kiên định và trí tuệ chiến lược.',
      image: moc4
    },
    {
      name: 'Móc khóa 12/1/1954 – Phương án “đánh nhanh, thắng nhanh”',
      desc: 'Thiết kế gợi nhớ Hội nghị Đảng ủy Mặt trận tại Thẩm Púa, nơi nhất trí phương án tấn công nhanh – thể hiện quyết tâm cao độ trước giờ nổ súng.',
      image: moc5
    },
    {
      name: 'Móc khóa 15/1/1954 – Kéo pháo vào trận địa',
      desc: 'Mẫu móc khóa tái hiện hình ảnh bộ đội ta kéo pháo vào vị trí, vượt qua địa hình hiểm trở để chuẩn bị cho trận đánh lớn tại Điện Biên Phủ.',
      image: moc6
    },
    {
      name: 'Móc khóa 26/1/1954 – Chuyển phương án sang “đánh chắc, tiến chắc”',
      desc: 'Thiết kế ghi dấu quyết định chiến lược của Đại tướng Võ Nguyên Giáp, thay đổi phương châm tác chiến giúp tạo nên chiến thắng vang dội.',
      image: moc7
    },
    {
      name: 'Móc khóa 31/1/1954 – Sở chỉ huy chuyển về Mường Phăng',
      desc: 'Mẫu móc khóa mô tả sự kiện Sở chỉ huy chiến dịch Điện Biên Phủ chuyển về rừng Mường Phăng – trung tâm chỉ huy của toàn chiến dịch.',
      image: moc8
    },
    {
      name: 'Móc khóa 13/3/1954 – Mở màn chiến dịch Điện Biên Phủ',
      desc: 'Thiết kế tái hiện thời khắc lịch sử khi pháo binh ta nổ loạt đạn đầu tiên tấn công Him Lam, chính thức mở màn chiến dịch Điện Biên Phủ.',
      image: moc9
    },
    {
      name: 'Móc khóa 21/7/1954 – Hiệp định Geneva được ký kết',
      desc: 'Mẫu móc khóa in hình lá cờ chiến thắng tung bay trên nóc hầm tướng De Castries cùng hội nghị Geneva – biểu tượng của hòa bình và độc lập dân tộc.',
      image: moc10
    }
  ]
  

export default function SanPhamMocKhoa() {
  return (
    <div className="relative min-h-screen text-[#40291b] overflow-hidden">
      {/* 🌄 Nền cổ điển */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg1}), url(${bg2}), linear-gradient(180deg, rgba(250,245,234,0.95) 0%, rgba(249,243,228,0.95) 100%)`,
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


{/* 🏞️ Banner Giới thiệu */}
<section className="relative z-10 text-center py-32 px-6 overflow-hidden mb-24">
  {/* 🌅 Background ảnh cổ */}
  <div
    className="absolute inset-0 bg-cover bg-center brightness-[0.45] contrast-[1.05]"
    style={{
      backgroundImage:
        "url('https://media.vov.vn/sites/default/files/styles/large/public/2023-05/images1139304_6810aa9d609525dimages941103_media_thumb1382169701.jpg')",
      backgroundAttachment: 'fixed'
    }}
  />
  {/* 🌈 Overlay gradient vàng đỏ */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#b91c1c]/70 via-[#ffefc0]/30 to-[#fffaf0]/90 mix-blend-overlay" />

  {/* 🖋️ Nội dung */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative max-w-4xl mx-auto bg-white/85 backdrop-blur-sm border border-[#f3d6d6] rounded-3xl shadow-2xl p-10"
    style={{
      backgroundImage:
        'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,248,235,0.95) 100%)'
    }}
  >
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#b91c1c] mb-4 leading-snug drop-shadow-md">
      Bộ sưu tập Móc khóa
      <br />
      <span className="text-[#5a241f]">Chiến dịch Điện Biên Phủ</span>
    </h1>
    <p className="text-lg text-[#4a3428] leading-relaxed drop-shadow-sm">
      Những chiếc móc khóa mang biểu tượng lịch sử – gợi nhớ tinh thần Điện Biên bất diệt. 
      Mỗi sản phẩm là một câu chuyện nhỏ về lòng yêu nước, được chế tác tinh xảo và ý nghĩa.
    </p>
  </motion.div>
</section>

      {/* Danh sách sản phẩm */}
      {/* <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {PRODUCTS.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/95 backdrop-blur-md border border-[#f3d6d6] rounded-3xl shadow-lg overflow-hidden hover:shadow-[#b91c1c]/40 transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#5a241f] mb-3">{p.name}</h3>
              <p className="text-[#4a3428] text-base leading-relaxed mb-4">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </main> */}
{/* 🎨 Danh sách sản phẩm */}
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-28 space-y-20">

  {/* Hàng 1 – 3 sản phẩm */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {PRODUCTS.slice(0, 3).map((p, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white/95 backdrop-blur-md border border-[#f3d6d6] rounded-3xl shadow-lg overflow-hidden hover:shadow-[#b91c1c]/40 transition-all duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#5a241f] mb-2">{p.name}</h3>
          <p className="text-[#4a3428] text-sm leading-relaxed">{p.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Hàng 2 – sản phẩm nổi bật (full width) */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="group relative bg-gradient-to-r from-[#fffaf2] to-[#fff5e0] border-2 border-[#f5d8a6] rounded-3xl overflow-hidden shadow-xl"
  >
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={PRODUCTS[3].image}
        alt={PRODUCTS[3].name}
        className="w-full md:w-1/2 h-96 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="p-10 md:w-1/2">
        <h3 className="text-3xl font-extrabold text-[#b91c1c] mb-4">
          {PRODUCTS[3].name}
        </h3>
        <p className="text-lg text-[#4a3428] leading-relaxed">
          {PRODUCTS[3].desc}
        </p>
      </div>
    </div>
  </motion.div>

  {/* Hàng 3 – 3 sản phẩm kế tiếp */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {PRODUCTS.slice(4, 7).map((p, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white/95 backdrop-blur-md border border-[#f3d6d6] rounded-3xl shadow-lg overflow-hidden hover:shadow-[#b91c1c]/40 transition-all duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#5a241f] mb-2">{p.name}</h3>
          <p className="text-[#4a3428] text-sm leading-relaxed">{p.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Hàng 4 – 3 sản phẩm cuối */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    {PRODUCTS.slice(7, 10).map((p, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white/95 backdrop-blur-md border border-[#f3d6d6] rounded-3xl shadow-lg overflow-hidden hover:shadow-[#b91c1c]/40 transition-all duration-500"
      >
        <div className="overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#5a241f] mb-2">{p.name}</h3>
          <p className="text-[#4a3428] text-sm leading-relaxed">{p.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</main>



      <Footer />
    </div>
  )
}
