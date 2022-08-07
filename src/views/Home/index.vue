<script setup lang="ts">
import {ref} from 'vue'
import Layout from '@/components/Layout/index.vue'
import PanelTitle from '@/components/PanelTitle/index.vue'
import VTitle from './Title/index.vue'
import VLeft from './Left/index.vue'
import VRight from './Right/index.vue'
import VideoTable from './VideoTable/index.vue'

const isFold = ref<boolean>(false)

const handleFoldBtnClick = () => {
  isFold.value = !isFold.value
}
</script>
<template>
  <layout>
    <div class="container">
      <v-title class="title" />
      <div class="left">
        <panel-title>废气管理</panel-title>
        <v-left class="block" />
      </div>
      <div class="right">
        <panel-title align="right">清洁运输</panel-title>
        <v-right class="block" />
      </div>
      <div class="bottom block" :class="{'is-fold': isFold}">
        <video-table />
        <div class="fold-button" @click="handleFoldBtnClick">{{ isFold ? '展开' : '收起' }}</div>
      </div>
    </div>
  </layout>
</template>

<style lang="scss" scoped>
$grid: 20px;
$leftBlockWidth: 18%;
$rightBlockWidth: 18%;
$bottomBottomRectTopToBottom: 250px;
$bottomBlockWidth: calc(100% - ($leftBlockWidth + $rightBlockWidth + 4 * $grid));
$blockBgColor: rgba(77, 124, 99, 0.5);
$blockBorderRadius: 4px;
$defaultColor: #fff;
$blockPadding: 8px;

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

  .block {
    background-color: $blockBgColor;
    padding: $blockPadding;
    flex: 1;
    height: 0;
    border-radius: $blockBorderRadius;
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
    display: flex;
    flex-direction: column;
    left: $grid;
    top: $grid;
    width: $leftBlockWidth;
    height: calc(100vh - $grid * 2);
    padding-top: 40px;
    box-sizing: border-box;
  }

  .right {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: $grid;
    top: $grid;
    width: $rightBlockWidth;
    height: calc(100vh - $grid * 2);
    padding-top: 40px;
    box-sizing: border-box;
  }

  .bottom {
    position: absolute;
    left: calc($leftBlockWidth + 2 * $grid);
    width: 400px;
    height: calc($bottomBottomRectTopToBottom - $grid);
    top: calc(100vh - $bottomBottomRectTopToBottom);
    background-color: $blockBgColor;
    border-radius: $blockBorderRadius 0 $blockBorderRadius $blockBorderRadius;
    padding: $blockPadding;;
    transition: all .3s ease-in;
    transform: none;
    box-sizing: border-box;

    &.is-fold {
      transform: translateY($bottomBottomRectTopToBottom);
    }

    .fold-button {
      position: absolute;
      bottom: 100%;
      right: 0;
      background-color: $blockBgColor;
      border-radius: $blockBorderRadius $blockBorderRadius 0 0;
      font-size: 14px;
      padding: 4px 8px;
      cursor: pointer;
      color: #00FFFF;
    }
  }
}
</style>
