<template>
  <RouterLink :to="{ name: 'CategoryPage', params: routeParams }" class="category-item">
    {{ categoryName }}
  </RouterLink>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const { category, typeId } = defineProps(['category', 'typeId']);

const routeParams = ref({ categoryId: category.id, typeId });
const categoryName = computed(() => category.name);

// TODO: find a nice complimentary color palette
</script>

<style scoped lang="scss">
.category-item {
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 1rem;
  background-color: var(--color-sand);
  border-block-end: none;
  border-radius: 0.125rem;
  transition: background-color .2s;
  block-size: 5rem;

  &:hover {
    background-color: var(--color-sand-dark);
  }
}
</style>
