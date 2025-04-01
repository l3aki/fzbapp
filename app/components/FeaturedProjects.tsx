import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Yeni Fikirtepe',
    location: 'Kadıköy, İstanbul',
    description: 'Modern yaşamın tüm konforunu sunan, şehrin merkezinde yeni bir yaşam alanı.',
    imageUrl: '/projects/fikirtepe.jpg',
    price: '2.750.000 TL\'den başlayan',
    features: ['2+1', '3+1', '4+1', 'Sosyal Alanlar', 'Spor Salonu'],
    deliveryDate: 'Aralık 2024',
  },
  {
    id: 2,
    name: 'Residence Inn Deluxia',
    location: 'Beylikdüzü, İstanbul',
    description: 'Lüks ve konforun buluştuğu, deniz manzaralı prestijli yaşam alanı.',
    imageUrl: '/projects/deluxia.jpg',
    price: '3.150.000 TL\'den başlayan',
    features: ['1+1', '2+1', '3+1', 'Kapalı Havuz', 'Güvenlik'],
    deliveryDate: 'Haziran 2025',
  },
  {
    id: 3,
    name: 'Kiptaş Kartal',
    location: 'Kartal, İstanbul',
    description: 'Anadolu yakasının yükselen değeri, ulaşım ağlarına yakın konumu.',
    imageUrl: '/projects/kartal.jpg',
    price: '1.950.000 TL\'den başlayan',
    features: ['2+1', '3+1', 'Çocuk Parkı', 'Otopark', 'Market'],
    deliveryDate: 'Mart 2025',
  },
];

export default function FeaturedProjects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Öne Çıkan Projeler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg leading-8 text-gray-600"
          >
            İstanbul'un en değerli lokasyonlarında yaşam başlıyor
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div>{project.location}</div>
                <div className="ml-4">
                  <div className="flex items-center gap-x-2.5">
                    <div className="flex-none rounded-full bg-white/10 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    Teslim: {project.deliveryDate}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/projeler/${project.id}`}>
                  <span className="absolute inset-0" />
                  {project.name}
                </Link>
              </h3>
              <div className="mt-2 text-sm text-gray-300">{project.price}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}