import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Aktif Proje', value: '25+' },
  { id: 2, name: 'Tamamlanan Proje', value: '100+' },
  { id: 3, name: 'Mutlu Müşteri', value: '5000+' },
  { id: 4, name: 'Yıllık Tecrübe', value: '15+' },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rakamlarla FZB Emlak
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            İstanbul'un en güvenilir gayrimenkul danışmanlık şirketi
          </p>
        </motion.div>
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-center sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}