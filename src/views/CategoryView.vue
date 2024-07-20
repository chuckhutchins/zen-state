<template>
  <main class="main">
    <template v-if="hasCategory">
      <div class="breadcrumbs">
        <RouterLink :to="{ name: 'HomePage' }">
          Home
        </RouterLink>
        <div class="separator">/</div>
        <RouterLink :to="{ name: 'TypePage', params: { typeId } }">
          {{ typeName }}
        </RouterLink>
        <div class="separator">/</div>
        <div class="active">{{ categoryName }}</div>
      </div>
      <TheHr size="small" />
      <div>
        <h1>{{ categoryName }}</h1>
        <FocusList :focusList="focusList" />
      </div>
    </template>
    <template v-else>
      <div>
        <h1>Category not found</h1>
        <p>This category only exists in your mind.</p>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMeditationStore } from '@/stores/MeditationStore';
import FocusList from '@/components/focus/FocusList.vue';
import TheHr from '@/components/common/TheHr.vue';

const { typeId, categoryId } = useRoute().params;
const meditationStore = useMeditationStore();

const typeName = computed(() => {
  const type = meditationStore.getType(typeId);
  return type?.name;
});

const hasCategory = computed(() => !!category);
const category = computed(() => meditationStore.getCategory(typeId, categoryId));
const categoryName = computed(() => category.value?.name);

const focusList = computed(() => category.value?.focusList);
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
