<template>
  <header class="header">
    <nav class="nav">
      <RouterLink :to="{name: 'HomePage'}" class="main">Zen State</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts" />

<style scoped lang="scss">
header {
  border-block-end: 2px solid;
  padding-block-end: 1rem;

  .nav {
    display: flex;
    gap: 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .main {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -0.0125em;
      text-decoration: none;
      border-block-end: transparent;
    }
  }
}
</style>
