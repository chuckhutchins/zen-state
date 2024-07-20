<template>
  <div v-if="hasCategoryList" class="category-list">
    <CategoryItem
      v-for="category in categoryList"
      :category="category"
      :typeId="typeId"
      :key="category.id"
    />
  </div>
  <div v-else>
    <p>There are no categories in this type. Categorize your distractions and return to the present moment.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMeditationStore } from '@/stores/MeditationStore.js';
import CategoryItem from '@/components/category/CategoryItem.vue';

const meditationStore = useMeditationStore();
const { typeId } = defineProps(['typeId']);

const hasCategoryList = computed(() => categoryList.value.length > 0);
const categoryList = computed(() => meditationStore.getCategoryList(typeId));
</script>

<style scoped lang="scss">
.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
}
</style>
