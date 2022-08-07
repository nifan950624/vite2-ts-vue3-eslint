<script setup lang="ts">
import {reactive, inject, Ref} from 'vue'
import {Map} from 'mapbox-gl'
import CellBox from '@/components/CellBox/index.vue'
import ChartView from '@/components/Charts/index.vue'
import VTabs from '../Tabs/index.vue'
import useOptions from "@/components/Charts/options";

const chartOptions = useOptions()
const mapBoxRef = inject<Ref<Map>>('mapBox')
const map = (mapBoxRef as NoUndefinedField<Ref<Map>>).value

const tabData = reactive<{
  currentValue: number
  tabs: Tab[],
}>({
  currentValue: 1,
  tabs: [
    {
      value: 1,
      label: '有组织废气'
    },
    {
      value: 2,
      label: '无组织废气'
    }
  ]
})

const handleTabChange = () => {
  console.log('tab 切换了')
}

const handleChartClick = () => {
  map.flyTo({
    center: [114.371059, 30.620799]
  })
}
</script>

<template>
  <div class="left-container">
    <v-tabs v-model:value="tabData.currentValue" :tabs="tabData.tabs" @chang="handleTabChange" />
    <div class="flex-box main">
      <cell-box title="排放口状态" height="104px">
        <div class="cell-1">
          <div class="chart">
            <chart-view :chart-option="chartOptions.ventState" height="100%" />
          </div>
          <div class="text-wrapper">
            <div class="cell-1-title">排放口数量</div>
            <div class="cell-1-amount">
              <count-to
                :start-val="0"
                :end-val="2022"
                :duration="3000"
              />
              <span class="unit">个</span>
            </div>
          </div>
        </div>
      </cell-box>

      <cell-box title="在线监测状态分析" height="20%">
        <chart-view :chart-option="chartOptions.monitoringState" height="100%" />
      </cell-box>

      <cell-box title="污染物排放统计" class="flex-box" height="0">
        <chart-view :chart-option="chartOptions.pollutionStatistics" height="100%" @click="handleChartClick" />
      </cell-box>

      <cell-box title="排放手工监测" height="20%">
        <chart-view :chart-option="chartOptions.manualMonitoringEmissions" height="100%" />
      </cell-box>

      <cell-box title="分工序污染物排放统计" height="20%">
        <chart-view :chart-option="chartOptions.divisionSequencePollutants" height="100%" />
      </cell-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-container {
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: column;
  }

  .cell-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px 0 20px;
    height: 100%;
    box-sizing: border-box;

    .chart {
      height: 100%;
    }

    .text-wrapper {
      text-align: center;

      .cell-1-title {
        font-size: 16px;
        margin-bottom: 12px;
      }

      .cell-1-amount {
        font-size: 28px;
        color: #00FFFF;

        .unit {
          display: inline-block;
          font-size: 14px;
          padding-left: 6px;
        }
      }
    }
  }
}

.flex-box {
  flex: 1;
}
</style>
