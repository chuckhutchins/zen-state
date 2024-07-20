<template>
  <main class="main">
    <div class="mission">
      <h1>Breathe in. Breathe out.</h1>
    </div>
    <TheHr size="small" />
    <div v-for="type in meditationList" class="type-list" :key="type.id">
      <h2>{{ type.name }}</h2>
      <CategoryList :typeId="type.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useMeditationStore } from '@/stores/MeditationStore';
import { storeToRefs } from 'pinia';
import CategoryList from '@/components/category/CategoryList.vue';
import TheHr from '@/components/common/TheHr.vue';

const meditationStore = useMeditationStore();
const { meditationList } = storeToRefs(meditationStore);
</script>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 2rem;

  .mission {
    padding: 1rem 1.5rem;
    background: repeating-linear-gradient(-45deg, var(--stripes), var(--stripes) 0.25rem, transparent 0.25rem, transparent 1.125rem);

    @media (min-width: 768px) {
      padding: 2.5rem 3rem;
    }

    h1 {
      font-size: 2rem;
      line-height: 1.4;
      text-shadow: 0 1px 1px var(--text-shadow);
    }
  }

  .type-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
