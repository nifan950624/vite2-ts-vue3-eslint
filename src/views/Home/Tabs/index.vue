<script setup lang="ts">
import {defineEmits, nextTick, watch} from "vue";

const props = defineProps<{
  size?: string,
  value: CurrentTabValue,
  tabs: Tab[]
}>()

const emit = defineEmits<{
  (e: 'update:value', v: CurrentTabValue): void
  (e: 'change', v: CurrentTabValue): void
}>()

watch(() => props.value, (val) => {
  nextTick(() => {
    emit('change', val)
  })
})

const handleClick = (value: CurrentTabValue) => {
  emit('update:value', value)
}
</script>

<template>
  <div class="tabs" :style="{fontSize: size}">
    <div
      v-for="item in tabs"
      :key="item.value"
      class="tab"
      :class="{
        active: item.value === value
      }"
      @click="handleClick(item.value)"
    >
      {{ item.label }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  font-size: 20px;

  .tab {
    padding: 12px;
    padding-left: 0;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
       opacity: 0.8;
    }

    &.active {
      color: #00FFFF;
    }
  }
}
</style>


