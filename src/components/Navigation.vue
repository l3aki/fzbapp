<template>
  <nav class="p-menubar">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
      <div class="flex items-center">
        <a href="/" class="text-2xl font-bold text-primary">FZB Emlak</a>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="/" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Ana Sayfa</a>
          <a href="/projeler" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Projeler</a>
          <a href="/lokasyonlar" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Lokasyonlar</a>
          <a href="/hakkimizda" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Hakkımızda</a>
          <a href="/iletisim" class="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">İletişim</a>
        </div>
      </div>
      <div class="md:hidden">
        <Button icon="pi pi-bars" @click="toggleMenu" />
        <Menu ref="menu" :model="items" :popup="true" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'

const menu = ref()
const items = [
  { label: 'Ana Sayfa', icon: 'pi pi-home', url: '/' },
  { label: 'Projeler', icon: 'pi pi-building', url: '/projeler' },
  { label: 'Lokasyonlar', icon: 'pi pi-map-marker', url: '/lokasyonlar' },
  { label: 'Hakkımızda', icon: 'pi pi-info-circle', url: '/hakkimizda' },
  { label: 'İletişim', icon: 'pi pi-envelope', url: '/iletisim' }
]

const toggleMenu = (event: Event) => {
  menu.value?.toggle(event)
}
</script>

<style scoped>
.p-menubar {
  background-color: white;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>