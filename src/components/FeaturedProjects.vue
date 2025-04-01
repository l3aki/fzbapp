<template>
  <div class="featured-projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Öne Çıkan Projeler
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          İstanbul'un en değerli lokasyonlarında yaşam başlıyor
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="project in projects" :key="project.id" class="project-card">
          <template #header>
            <img :src="project.imageUrl" :alt="project.name" class="w-full h-48 object-cover" />
          </template>
          <template #title>
            {{ project.name }}
          </template>
          <template #subtitle>
            {{ project.location }}
          </template>
          <template #content>
            <p class="text-gray-600">{{ project.description }}</p>
            <div class="mt-4">
              <p class="font-semibold text-primary">{{ project.price }}</p>
              <p class="text-sm text-gray-500">Teslim: {{ project.deliveryDate }}</p>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <Chip v-for="feature in project.features" :key="feature" :label="feature" />
            </div>
          </template>
          <template #footer>
            <Button label="Detayları Gör" icon="pi pi-arrow-right" class="p-button-outlined" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Chip from 'primevue/chip'

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
]
</script>

<style scoped>
.project-card {
  transition: transform 0.2s ease-in-out;
}

.project-card:hover {
  transform: translateY(-4px);
}

.p-card {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.p-card-header img {
  border-radius: 1rem 1rem 0 0;
}
</style>