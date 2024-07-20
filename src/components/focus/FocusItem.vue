<template>
  <RouterLink :to="{ name: 'FocusPage', params: routeParams }" class="focus-item">
    {{ focus.name }}
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { focus } = defineProps(['focus']);

const routeParams = ref({ focusId: focus.id });

// TODO: find a nice complimentary color palette
</script>

<style scoped lang="scss">
.focus-item {
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
