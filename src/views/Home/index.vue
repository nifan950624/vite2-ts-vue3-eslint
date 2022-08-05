<script setup lang="ts">
import { inject } from 'vue'
import Title from './Title/index.vue'
import Left from './Left/index.vue'
import Right from './Right/index.vue'

const primaryColor = inject('primaryColor')

</script>
<template>
  <div class="container">
    <dv-decoration8
      style="width:300px;height:48px;"
      class="left-decoration"
      :color="[primaryColor, primaryColor]"
    />
    <dv-decoration8
      style="width:300px;height:48px;"
      :reverse="true"
      class="right-decoration"
      :color="[primaryColor, primaryColor]"
    />
    <Title class="title" />
    <Left class="left" />
    <Right class="right" />
  </div>
</template>


<style lang="scss" scoped>
$grid: 20px;
$leftBlockWidth: 20%;
$rightBlockWidth: 20%;
$bottomBottomRectTopToBottom: 250px;
$bottomBlockWidth: calc(100% - ($leftBlockWidth + $rightBlockWidth + 4 * $grid));
$blockBgColor: transparent;
$blockBorderRadius: 16px;
$defaultColor: #fff;
$blockPadding: 0;

.container {
    position: relative;
    color: $defaultColor;

    .left-decoration {
        position: absolute;
        top: 0;
        left: 0;
    }

    .right-decoration {
        position: absolute;
        top: 0;
        right: 0;
    }

    .title {
        position: absolute;
        top: $grid;
        left: 50%;
        transform: translateX(-50%);
        font-size: 32px;
        font-weight: 700;
    }

    .left {
        position: absolute;
        left: $grid;
        top: $grid;
        width: $leftBlockWidth;
        height: calc(100vh - $grid*2);
        background-color: $blockBgColor;
        border-radius: $blockBorderRadius;
        overflow: hidden;
        padding: $blockPadding;
        box-sizing: border-box;
        padding-top: 60px;
    }

    .right {
        position: absolute;
        right: $grid;
        top: $grid;
        width: $rightBlockWidth;
        height: calc(100vh - $grid*2);
        background-color: $blockBgColor;
        border-radius: $blockBorderRadius;
        padding: $blockPadding;
        box-sizing: border-box;
        padding-top: 60px;
    }

    .bottom {
        position: absolute;
        top: calc(100vh - $bottomBottomRectTopToBottom);
        left: 50%;
        transform: translateX(-50%);
        width: $bottomBlockWidth;
        height: calc($bottomBottomRectTopToBottom - $grid);
        background-color: $blockBgColor;
        border-radius: $blockBorderRadius;
        padding: $blockPadding;
        box-sizing: border-box;
    }
}
</style>
