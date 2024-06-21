<template>
  <main class="main">
    <div class="mission">
      <h1>You need to calm down. You're being too loud.</h1>
    </div>
    <TheHr size="small" />
    <div class="meditations">
      <ul class="list">
        <li>Breathe in</li>
        <li>Breathe out</li>
        <li><router-link :to="{name: 'MeditationPage'}">Guided</router-link></li>
      </ul>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheHr from '@/components/common/TheHr.vue';
</script>

<style scoped lang="scss">
.main {
  display: grid;
  gap: 2rem;

  .mission {
    padding: 1rem 1.5rem;
    background: repeating-linear-gradient(-45deg, var(--stripes), var(--stripes) 0.25rem, transparent 0.25rem, transparent 1.125rem);

    @media (min-width: 768px) {
      padding: 2.5rem 3rem;
    }

    h1 {
      font-size: 2rem;
      line-height: 1.4;
      text-shadow: 0 1px 1px var(--text-shadow);
    }
  }

  .meditations {
    display: grid;
    gap: 1rem;
  }
}
</style>
