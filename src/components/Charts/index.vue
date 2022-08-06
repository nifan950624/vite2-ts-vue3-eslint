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
const chartRef = ref<echarts.EChartsType | null>(null)

// 点击echarts
const handleClick = (params: any) => {
  emit('click', params)
}

const initChart = () => {
  chartRef.value = echarts.init(chartRenderRef.value as HTMLElement, '', {
    renderer: props.type,  // 设置渲染器类型,
  })
  chartRef.value.setOption(props.chartOption)
  chartRef.value.on('click', handleClick)
}

const setOptions = (option: echarts.EChartsOption) => {
  clearChart()
  resizeHandler()
  chartRef.value?.setOption(option)
}

const refresh = () => {
  setOptions(props.chartOption)
}

const clearChart = () => {
  chartRef.value?.clear()
}

const resizeHandler = () => {
  if(!props.autoResize) return;
  try {
    (chartRef.value as echarts.ECharts)?.resize()
  }catch (_) {

  }
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
