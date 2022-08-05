<script setup>
import HipeCharts from './HipeCharts/index.vue'
import { inject } from 'vue'

const primaryColor = inject('primaryColor')

</script>

<template>
  <div class="left-container">
    <dv-decoration7
      class="title"
      :color="[primaryColor, primaryColor]"
    >
      废气管理
    </dv-decoration7>
    <div class="flex-box main">
      <div class="flex-box cell">
        <dv-border-box4 :color="[primaryColor, '#fff']">
          有组织废气
          <HipeCharts />
        </dv-border-box4>
      </div>
      <div class="flex-box cell">
        <dv-border-box-13 :color="[primaryColor]">
          无组织废气
          <HipeCharts />
        </dv-border-box-13>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-container {
    display: flex;
    flex-direction: column;

    .title {
        height: 28px;
        font-size: 24px;
    }

    .main {
        display: flex;
        flex-direction: column;
    }

    .cell {
        padding: 8px;
        box-sizing: border-box;
    }
}

.flex-box {
    flex: 1;
}
</style>