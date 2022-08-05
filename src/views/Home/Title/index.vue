<script setup>
import { inject } from 'vue'

const primaryColor = inject('primaryColor')
</script>
<template>
  <div class="title-container">
    企业环保智慧管控平台
    <dv-decoration5
      :dur="2"
      style="width:11em;height:40px;"
      :color="[primaryColor, primaryColor]"
    />
  </div>
</template>

<style lang="scss" scoped>
.title-container {
    text-align: center;
    font-weight: bold;
    letter-spacing: 4px;
    text-shadow: 3px 3px 3px rgb(0 0 0 / 30%);
    font-size: 40px;
    background-image: linear-gradient(180deg, #95d8d9, #6c9ea3);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    user-select: none;
}
</style>