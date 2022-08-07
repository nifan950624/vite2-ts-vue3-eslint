<script setup lang="ts">
import * as echarts from 'echarts'
import {defineEmits, onMounted, ref} from "vue";
import useWindowResize from "@/hooks/useWindowResize";

const props = withDefaults(defineProps<{
  width?: string
  height?: string
  autoResize?: boolean
  chartOption: echarts.EChartsOption
  type?: 'canvas' | 'svg'
}>(), {width: '100%', height: '350px', autoResize: true, type: 'canvas'})

const emit = defineEmits<{
  (e: 'click', p: any): void
}>()

const chartRenderRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts

// 点击echarts
const handleClick = (params: any) => {
  emit('click', params)
}

const initChart = () => {
  chart = echarts.init(chartRenderRef.value as HTMLElement, '', {
    renderer: props.type,  // 设置渲染器类型,
  })
  chart.setOption(props.chartOption)
  chart.on('click', handleClick)
}

const setOptions = (option: echarts.EChartsOption) => {
  clearChart()
  resizeHandler()
  chart.setOption(option)
}

const refresh = () => {
  setOptions(props.chartOption)
}

const clearChart = () => {
  chart.clear()
}

let resizeTimer: number

const resizeHandler = () => {
  if (!props.autoResize) return;
  resizeTimer && clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    chart?.resize()
  })
}

useWindowResize(resizeHandler)

onMounted(() => {
  initChart()
})
// 父组件可以使用的方法
defineExpose({
  setOptions,
  refresh,
  clearChart
})
</script>
<template>
  <div
    ref="chartRenderRef"
    :style="{width: props.width, height: props.height}"
  />
</template>
