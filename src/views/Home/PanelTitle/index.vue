<script setup lang="ts">
import {computed} from 'vue'
import { inject } from 'vue'

const primaryColor = inject('primaryColor')
const props = withDefaults(defineProps<{ align?: 'left' | 'center' | 'right' }>(), {
  align: 'left'
})
const className = computed<string>(() => `is-${props.align}`)
</script>
<template>
  <div class="panel-title" :class="className">
    <slot />
    <dv-decoration4
      class="decoration"
      reverse
      :dur="5"
      :color="[primaryColor, primaryColor]"
      style="width:200px;height:5px;"
    />
  </div>
</template>

<style scoped lang="scss">
.panel-title {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  margin-bottom: 6px;
  font-style: italic;

  &.is-left {
    align-items: start;
  }

  &.is-center {
    align-items: center;
  }

  &.is-right {
    align-items: flex-end;

    .decoration {
      transform: rotateZ(180deg);
    }
  }

  .decoration {
    margin-top: 6px
  }
}
</style>
