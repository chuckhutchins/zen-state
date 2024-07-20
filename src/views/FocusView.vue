<template>
  <main class="main">
    <template v-if="hasFocus">
      <div class="breadcrumbs">
        <RouterLink :to="{ name: 'HomePage' }">
          Home
        </RouterLink>
        <div class="separator">/</div>
        <RouterLink :to="{ name: 'TypePage', params: { typeId } }">
          {{ typeName }}
        </RouterLink>
        <div class="separator">/</div>
        <RouterLink :to="{ name: 'CategoryPage', params: { categoryId, typeId } }">
          {{ categoryName }}
        </RouterLink>
        <div class="separator">/</div>
        <div class="active">{{ focusName }}</div>
      </div>
      <TheHr size="small" />
      <div>
        <h1>{{ focusName }}</h1>
        <TheMeditation :fileList="fileList" />
      </div>
    </template>
    <template v-else>
      <div class="not-found">
        <h1>Focus not found</h1>
        <p>This focus only exists in your mind.</p>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMeditationStore } from '@/stores/MeditationStore';
import TheHr from '@/components/common/TheHr.vue';
import TheMeditation from '@/components/meditation/TheMeditation.vue';

const { typeId, categoryId, focusId } = useRoute().params;
const meditationStore = useMeditationStore();

const typeName = computed(() => {
  const type = meditationStore.getType(typeId);
  return type?.name;
});

const categoryName = computed(() => {
  const category = meditationStore.getCategory(typeId, categoryId);
  return category?.name;
});

const hasFocus = computed(() => !!focus);
const focus = computed(() => meditationStore.getFocus(typeId, categoryId, focusId));
const focusName = computed(() => focus.value?.name);

const fileList = computed(() => focus.value?.fileList);
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
