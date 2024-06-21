<template>
  <div class="playback-length-selector">
    <h2 id="playback-length">Playback Length</h2>
    <div
      aria-labelledby="playback-length"
      role="radiogroup"
      class="lengths"
    >
      <label for="ten-minute" :class="{ 'active': length === '10' }">
        10m
        <input
          v-model="length"
          class="sr-only"
          id="ten-minute"
          name="playback-length"
          type="radio"
          value="10"
        >
      </label>
      <label for="fifteen-minute" :class="{ 'active': length === '15' }">
        15m
        <input
          v-model="length"
          class="sr-only"
          id="fifteen-minute"
          name="playback-length"
          type="radio"
          value="15"
        >
      </label>
      <label for="twenty-minute" :class="{ 'active': length === '20' }">
        20m
        <input
          v-model="length"
          class="sr-only"
          id="twenty-minute"
          name="playback-length"
          type="radio"
          value="20"
        >
      </label>
      <label for="thirty-minute" :class="{ 'active': length === '30' }">
        30m
        <input
          v-model="length"
          class="sr-only"
          id="thirty-minute"
          name="playback-length"
          type="radio"
          value="30"
        >
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['changeLength']);

const length = ref('10');

watch(length, () => {
  console.log('length has changed', length.value);
  emit('changeLength', length.value);
});
</script>

<style scoped lang="scss">
.playback-length-selector {
  display: grid;
  gap: 0.5rem;

  h2 {
    font-size: 1rem;
  }

  .lengths {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    justify-content: start;
    gap: 0.25rem;
    background-color: var(--filter-background);
    box-shadow: inset 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
    padding: 0.25rem;
    border-radius: 0.5rem;

    label {
      padding: 0.25rem;
      border-radius: 0.25rem;
      transition: background-color 0.25s;
      text-align: center;
      font-size: 1rem;
      //min-inline-size: 5rem;

      &:hover {
        cursor: pointer;
        background-color: var(--filter-hover);
      }

      &.active {
        background-color: var(--filter-active);
        box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);

        &:focus-within {
          box-shadow: 0 0 0 0.125rem var(--text);
        }
      }
    }
  }
}
</style>
