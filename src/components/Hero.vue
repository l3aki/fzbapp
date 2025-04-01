<template>
  <div class="hero-section">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          İstanbul'un En İyi Konut Projelerinde Yaşam Başlıyor
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-200">
          Avrupa ve Anadolu yakasında seçkin lokasyonlarda, modern mimari ve üstün yaşam standartlarıyla tasarlanmış
          konut projelerimizle hayalinizdeki eve kavuşun.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Button label="Projeleri Keşfet" icon="pi pi-search" class="p-button-lg" />
          <Button label="Bize Ulaşın" icon="pi pi-envelope" class="p-button-outlined p-button-lg p-button-secondary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to right, var(--primary-color), #60A5FA);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/hero-pattern.svg') center/cover;
  opacity: 0.1;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

@media (min-width: 640px) {
  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}
</style>