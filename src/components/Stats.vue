<template>
  <div class="stats-section">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.id" class="stat-card">
          <Card>
            <template #content>
              <div class="text-center">
                <div class="stat-icon">
                  <i :class="stat.icon"></i>
                </div>
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

const stats = [
  {
    id: 1,
    icon: 'pi pi-building text-4xl text-primary',
    value: '25+',
    label: 'Tamamlanan Proje',
  },
  {
    id: 2,
    icon: 'pi pi-home text-4xl text-primary',
    value: '5000+',
    label: 'Teslim Edilen Konut',
  },
  {
    id: 3,
    icon: 'pi pi-users text-4xl text-primary',
    value: '10000+',
    label: 'Mutlu Aile',
  },
  {
    id: 4,
    icon: 'pi pi-map-marker text-4xl text-primary',
    value: '8',
    label: 'Farklı Lokasyon',
  },
]
</script>

<style scoped>
.stats-section {
  background-color: var(--surface-ground);
}

.stat-card {
  transition: transform 0.2s ease-in-out;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-icon {
  margin-bottom: 1rem;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: var(--text-color);
}

.p-card {
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>