
<script setup>
import { inject } from 'vue'

const primaryColor = inject('primaryColor')
</script>

<template>
  <div class="right-container">
    <dv-decoration7
      class="title"
      :color="[primaryColor, primaryColor]"
    >
      清洁运输
    </dv-decoration7>
  </div>
</template>

<style lang="scss" scoped>
.right-container {
    .title {
        height: 28px;
        font-size: 24px;
    }
}
</style>