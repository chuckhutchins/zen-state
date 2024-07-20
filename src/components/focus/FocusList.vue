<template>
  <div v-if="hasFocusList" class="focus-list">
    <FocusItem
      v-for="focus in focusList"
      :focus="focus"
      :key="focus.id"
    />
  </div>
  <div v-else>
    <p>There are no areas of focus in this category. If you focus hard enough, maybe the paths will reveal themselves to you.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import FocusItem from '@/components/focus/FocusItem.vue';

const { focusList } = defineProps(['focusList']);

const hasFocusList = computed(() => focusList.length > 0);
</script>

<style scoped lang="scss">
.focus-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
}
</style>
