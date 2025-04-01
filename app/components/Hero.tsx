import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto"
          >
            İstanbul'un En İyi Konut Projelerinde Yaşam Başlıyor
          </motion.h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg leading-8 text-gray-600"
            >
              Avrupa ve Anadolu yakasında seçkin lokasyonlarda, modern mimari ve üstün yaşam standartlarıyla tasarlanmış
              konut projelerimizle hayalinizdeki eve kavuşun. Güvenilir yatırım fırsatları ve uygun ödeme seçenekleriyle
              sizleri bekliyoruz.
            </motion.p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="/projeler"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Projeleri Keşfet
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/iletisim" className="text-sm font-semibold leading-6 text-gray-900">
                  Bize Ulaşın <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 w-full max-w-lg aspect-[6/5] lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
          >
            <div className="relative aspect-[6/5] w-full">
              <Image
                src="/hero-image.jpg"
                alt="Modern konut projesi görseli"
                className="absolute left-0 top-0 w-full rounded-2xl bg-gray-50 object-cover"
                width={800}
                height={667}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}