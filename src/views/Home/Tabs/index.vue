<script setup lang="ts">
import {defineEmits, nextTick, watch} from "vue";

const props = defineProps<{
  value: CurrentTabValue,
  tabs: Tab[]
}>()

const emit = defineEmits<{
  (e: 'update:value', v: CurrentTabValue): void
  (e: 'change', v: CurrentTabValue): void
}>()

watch(() => props.value, (val) => {
  emit('change', val)
})

const handleClick = (value: CurrentTabValue) => {
  emit('update:value', value)
}
</script>

<template>
  <div class="tabs">
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

    &.active {
      color: #00FFFF;
    }
  }
}

</style>


