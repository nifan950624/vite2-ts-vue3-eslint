<template>
  <div
    ref="hipeChart"
    class="chart-container"
  />
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const hipeChart = ref<HTMLElement | null>(null)
const option = {
  grid: {
    left: '5%',
    top: '10%',
    right: '5%',
    bottom: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['承运商1', '承运商2', '承运商3', '承运商4', '承运商5'],
    axisLine: { 
      lineStyle: {
        color: 'rgba(52, 51, 51, 1)'
      }
    },
    splitLine: { show: false },
    axisLabel: {
      margin: 20,
      textStyle: {
        fontFamily: 'MicrosoftYaHei',
        fontSize: 12,
        color: 'rgba(113, 113, 113, 1)'
      }
    },
    axisTick: { show: false }
  },
  yAxis: {
    type: 'value',
    name: '辆',
    nameTextStyle: {
      fontFamily: 'MicrosoftYaHei',
      fontSize: 12,
      color: 'rgba(113, 113, 113, 1)'
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(52, 51, 51, 1)'
      }
    },
    splitLine: { show: false },
    axisLabel: {
      margin: 20,
      textStyle: {
        fontFamily: 'MicrosoftYaHei',
        fontSize: 12,
        color: 'rgba(113, 113, 113, 1)'
      }
    },
    axisTick: { show: false }
  },
  series: [
    {
      name: '报警',
      type: 'pictorialBar',
      animationDuration: 0,
      legendHoverLink: false,
      symbolRepeat: 'true',
      symbolMargin: '20%',
      symbol: 'rect',
      symbolSize: [20, 5],
      itemStyle: {
        color: 'RGBA(196, 160, 114, 1)'
      },
      data: [33, 45, 30, 23, 60],
      z: 1,
      animationEasing: 'elasticOut'
        
    },
    {
      name: "背景",
      type: 'pictorialBar',
      animationDuration: 0,
      symbolRepeat: 'fixed',
      symbolMargin: '20%',
      symbol: 'rect',
      symbolSize: [20, 5],
      itemStyle: {
        color: 'RGBA(62, 62, 62, 0.8)'
      },
      label: {
        show: false
      },
      data: [0, 0, 0, 0, 0],
      z: 0,
      animationEasing: 'elasticOut'
    }
  ]
};

onMounted(() => {
  const myChart = echarts.init(hipeChart.value as HTMLElement);
  console.log('myChart', myChart);
  myChart.setOption(option)
})
</script>

<style lang="scss" scoped>
.chart-container {
    width: 100%;
    height: 100%;
    padding: 16px;
    box-sizing: border-box;
}
</style>