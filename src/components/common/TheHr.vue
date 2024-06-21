<template>
<!--  <div class="hr" />-->
  <div class="hr">
    <div v-if="isNormal" class="hr-normal" :class="{left: isLeft}" />
    <IconTilde v-if="isSmall" class="hr-small" />
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import IconTilde from '@/components/icons/IconTilde.vue';

const props = defineProps(['size', 'direction']);

const isNormal = computed(() => !isSmall.value);
const isSmall = computed(() => props.size === 'small');
const isLeft = computed(() => props.direction === 'left');
</script>

<style scoped lang="scss">
.hr {
  color: var(--color-sand-dark);

  .hr-normal {
    --hr-size: 4px;
    --hr-direction: right;
    block-size: var(--hr-size);
    border-radius: var(--hr-size);
    background: linear-gradient(to var(--hr-direction), currentColor, transparent);

    &.left {
      --hr-direction: left;
    }
  }

  .hr-small {
    inline-size: 2rem;
  }
}
</style>
