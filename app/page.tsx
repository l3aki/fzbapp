import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    {
      value: '1000+',
      label: 'Aktif Konut Projesi'
    },
    {
      value: '50M+',
      label: 'Toplam Metrekare'
    },
    {
      value: '25.000+',
      label: 'Mutlu Müşteri'
    }
  ];

  const testimonials = [
    {
      content: "FZB Emlak sayesinde hayalimizdeki eve kavuştuk. Profesyonel ekipleri ve şeffaf yaklaşımları için teşekkür ederiz.",
      author: "Ahmet Yılmaz",
      role: "Konut Sahibi",
      image: "/testimonials/1.jpg"
    },
    {
      content: "İstanbul'un en prestijli projelerinde güvenilir yatırım fırsatları sunan FZB Emlak'a teşekkürler.",
      author: "Ayşe Kaya",
      role: "Yatırımcı",
      image: "/testimonials/2.jpg"
    },
    {
      content: "Modern yaşam alanları ve ödeme seçenekleriyle her bütçeye uygun çözümler sundular.",
      author: "Mehmet Demir",
      role: "Konut Sahibi",
      image: "/testimonials/3.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              İstanbul'un En İyi Konut Projeleri
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Modern yaşam alanları ve cazip yatırım fırsatları için doğru adres
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              Projeleri Keşfet
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="testimonial"
              >
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="testimonial__cite">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Hayalinizdeki Eve Bir Adım Uzaktasınız</h2>
          <p className="text-xl mb-12">Size özel fırsatları kaçırmayın!</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
            Hemen İletişime Geçin
          </button>
        </div>
      </section>
    </main>
  );
}