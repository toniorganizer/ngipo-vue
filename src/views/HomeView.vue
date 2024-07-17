<script setup>
import { RouterView } from 'vue-router'
import HeroItemVue from '@/components/HeroItem.vue'
import KonsultasiItemVue from '@/components/KonsultasiItem.vue'
import LayananItemVue from '@/components/LayananItem.vue'
import PenilaianItemVue from '@/components/PenilaianItem.vue'
import UndanganItemVue from '@/components/UndanganItem.vue'
</script>

<template>
  <main>
    <HeroItemVue />
    <LayananItemVue />
    <UndanganItemVue />
    <PenilaianItemVue />
    <KonsultasiItemVue />
    <RouterView />
  </main>
</template>
