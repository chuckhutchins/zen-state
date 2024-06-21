<template>
  <footer class="footer">
    <TheHr direction="left" />
    <p class="copyright">
      Made with 😌
    </p>
  </footer>
</template>

<script setup lang="ts">
import TheHr from '@/components/common/TheHr.vue';
</script>

<style scoped lang="scss">
.footer {
  display: grid;
  gap: 1rem;

  > * {
    min-inline-size: 0;
  }

  .copyright {
    line-height: 1;
    text-align: end;
  }
}
</style>
