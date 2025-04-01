<template>
  <footer class="footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1">
          <img src="/logo.png" alt="FZB İnşaat" class="h-8 w-auto mb-4" />
          <p class="text-gray-400 text-sm">
            20 yılı aşkın tecrübemizle İstanbul'un en değerli lokasyonlarında yaşam alanları inşa ediyoruz.
          </p>
          <div class="mt-4 flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="pi pi-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary">
              <i class="pi pi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.text">
              <a :href="link.href" class="text-gray-400 hover:text-primary">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Projects -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">Projelerimiz</h3>
          <ul class="space-y-2">
            <li v-for="project in projects" :key="project.text">
              <a :href="project.href" class="text-gray-400 hover:text-primary">{{ project.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-1">
          <h3 class="text-white font-semibold mb-4">İletişim</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <i class="pi pi-map-marker text-primary mt-1 mr-2"></i>
              <span class="text-gray-400">Ataşehir, İstanbul<br />Türkiye</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-phone text-primary mr-2"></i>
              <span class="text-gray-400">+90 (216) 123 45 67</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-envelope text-primary mr-2"></i>
              <span class="text-gray-400">info@fzbinsaat.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="text-center text-gray-400 text-sm">
          <p>&copy; {{ new Date().getFullYear() }} FZB İnşaat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { text: 'Ana Sayfa', href: '/' },
  { text: 'Hakkımızda', href: '/about' },
  { text: 'Projeler', href: '/projects' },
  { text: 'Lokasyonlar', href: '/locations' },
  { text: 'İletişim', href: '/contact' },
]

const projects = [
  { text: 'Yeni Fikirtepe', href: '/projects/fikirtepe' },
  { text: 'Residence Inn Deluxia', href: '/projects/deluxia' },
  { text: 'Kiptaş Kartal', href: '/projects/kartal' },
  { text: 'Tüm Projeler', href: '/projects' },
]
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: white;
}

.text-primary {
  color: var(--primary-color);
}

a {
  transition: color 0.2s ease-in-out;
}

.pi {
  font-size: 1.25rem;
}
</style>