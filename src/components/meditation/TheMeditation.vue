<template>
  <div class="meditation-wrapper">
    <div class="meditation-selector">
      <h2 id="selection-header" class="sr-only">Meditation Selector</h2>
      <div
        aria-labelledby="selection-header"
        role="radiogroup"
        class="selection-list"
      >
        <label
          v-for="file in fileList"
          :for="generateSelectionId(file)"
          :class="{ 'active': isActive(file) }"
        >
          <template v-if="isCourse">
            Day {{ file }}
          </template>
          <template v-else>
            {{ file }}m
          </template>
          <input
            v-model="meditation"
            class="sr-only"
            :id="generateSelectionId(file)"
            name="selection"
            type="radio"
            :value="file"
          >
        </label>
      </div>
    </div>
    <figure class="meditation">
      <figcaption>
        <h3>
          <template v-if="isCourse">
            Meditation for Day {{ meditation }}
          </template>
          <template v-else>
            {{ meditation }} Minute Meditation:
          </template>
        </h3>
      </figcaption>
      <audio controls :src="meditationUrl" />
    </figure>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const { typeId, categoryId, focusId } = useRoute().params;
const { fileList } = defineProps(['fileList']);

const isCourse = computed(() => typeId === 'courses');
const isActive = (file: number) => meditation.value === file;

const generateSelectionId = (file: number) => `file-${file}`;

const meditation = ref(10);
const meditationUrl = computed(() => `/media/${typeId}/${categoryId}/${focusId}/${meditation.value}.mp3`);

// TODO: figure out nicer styles for desktop
// TODO: probably center the audio player and have a good max width
// TODO: persist meditation selection in indexeddb
// TODO: keep screen awake
// TODO: figure out an audio player style
// TODO: look into a simple, calming animation
</script>

<style scoped lang="scss">
.meditation-wrapper {
  display: grid;
  gap: 1rem;

  > * {
    min-inline-size: 0;
  }
}

.meditation-selector {
  display: grid;
  gap: 0.5rem;

  h2 {
    font-size: 1rem;
  }

  .selection-list {
    --sand-shadow: rgba(200 135 55 / 0.3);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
    justify-content: start;
    gap: 0.25rem;
    background-color: var(--filter-background);
    box-shadow: inset 0 0.0625rem 0.25rem var(--sand-shadow);
    padding: 0.25rem;
    border-radius: 0.5rem;

    label {
      padding: 0.25rem;
      border-radius: 0.25rem;
      transition: background-color 0.25s;
      text-align: center;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
        background-color: var(--filter-hover);
      }

      &.active {
        background-color: var(--filter-active);
        box-shadow: 0 0.0625rem 0.25rem var(--sand-shadow);

        &:focus-within {
          box-shadow: 0 0 0 0.125rem var(--text);
        }
      }
    }
  }
}

.meditation {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    margin-block-end: 0.25rem;
  }

  audio {
    inline-size: 100%;
  }
}
</style>
