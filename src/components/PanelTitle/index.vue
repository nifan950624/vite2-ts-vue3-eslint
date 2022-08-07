<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(defineProps<{ align: 'left' | 'center' | 'right' }>(), {
  align: 'left'
})
const className = computed<string>(() => `is-${props.align}`)
</script>
<template>
  <div class="panel-title" :class="className">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.panel-title {
  height: 28px;
  font-size: 24px;
  margin-bottom: 6px;
  font-style: italic;

  &.is-left {
    text-align: left;
  }

  &.is-center {
    text-align: center;
  }

  &.is-right {
    text-align: right;
  }
}
</style>
