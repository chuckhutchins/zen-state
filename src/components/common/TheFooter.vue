<template>
  <footer class="footer">
    <p class="copyright">
      Made with 😌
    </p>
  </footer>
</template>

<script setup lang="ts" />

<style scoped lang="scss">
.footer {
  display: grid;
  gap: 1rem;
  border-block-start: 2px solid;
  padding-block-start: 1rem;

  .copyright {
    line-height: 1;
    text-align: end;
  }
}
</style>
