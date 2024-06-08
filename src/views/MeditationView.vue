<template>
  <main class="main">
    <div class="meditation">
      <h1>Meditation Name</h1>
      <PlaybackLengthSelector @changeLength="handleChangeLength" />
    </div>
    <TheHr />
    <div class="playback">
      <figure>
        <figcaption>{{ playbackLength}} minute meditation:</figcaption>
        <audio controls :src="meditationUrl" />
      </figure>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import PlaybackLengthSelector from '@/components/common/PlaybackLengthSelector.vue';
import TheHr from '@/components/common/TheHr.vue';

const playbackLength = ref('10');
const meditationUrl = computed(() => `/media/singles/classics/guided/${playbackLength.value}.mp3`);

const handleChangeLength = (length: string) => {
  playbackLength.value = length;
}

// TODO: persist meditation length in indexeddb
// TODO: dynamically pull in the meditation type and all that
// TODO: keep screen awake
// TODO: find a way to keep streaming audio when screen turns off
// TODO: figure out an audio player style
// TODO: look into a simple, calming animation
// TODO: need to ditch the black theme
// TODO: change mission to look like a rock zen garden
// TODO: change hr to be a tilde squiggle
// TODO: change header/footer hr to slowing fade out
// TODO: change mission text on refresh
</script>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 2rem;

  h1 {
    font-size: 2rem;
    line-height: 1.4;
    text-shadow: 0 1px 2px var(--text-shadow);
  }

  .meditations {
    display: grid;
    gap: 1rem;
  }
}
</style>
