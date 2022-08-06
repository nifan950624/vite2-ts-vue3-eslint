<script setup lang="ts">
defineProps<{
  title?: string,
  height?: string
}>()

</script>
<template>
  <div class="cell-box" :style="{height}">
    <div class="cell-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="cell-inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cell-box {
  display: flex;
  flex-direction: column;
  padding: 4px;
  box-sizing: border-box;

  .cell-title {
    font-size: 16px;
    font-weight: 700;
    padding-left: 8px;
    border-left: #00FFFF 4px solid;
  }

  .cell-inner {
    flex: 1;
  }
}
</style>
