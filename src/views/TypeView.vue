<template>
  <main class="main">
    <template v-if="hasType">
      <div class="breadcrumbs">
        <RouterLink :to="{ name: 'HomePage' }">Home</RouterLink>
        <div class="separator">/</div>
        <div class="active">{{ typeName }}</div>
      </div>
      <TheHr size="small" />
      <div>
        <h1>{{ typeName }}</h1>
        <CategoryList :typeId="typeId" />
      </div>
    </template>
    <template v-else>
      <div>
        <h1>Type not found</h1>
        <p>This type only exists in your mind.</p>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMeditationStore } from '@/stores/MeditationStore';
import CategoryList from '@/components/category/CategoryList.vue';
import TheHr from '@/components/common/TheHr.vue';

const { typeId } = useRoute().params;
const meditationStore = useMeditationStore();

const hasType = computed(() => !!type);
const type = computed(() => meditationStore.getType(typeId));
const typeName = computed(() => type.value?.name);
</script>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 2rem;

  .breadcrumbs {
    display: flex;
    gap: 0.5rem;

    .active {
      font-weight: 700;
    }
  }

  h1 {
    margin-block-end: 0.5rem;
  }
}
</style>
