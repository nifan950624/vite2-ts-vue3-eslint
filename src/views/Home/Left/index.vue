<script setup lang="ts">
import {ref, reactive} from 'vue'
import PanelTitle from '@/components/PanelTitle/index.vue'
import CellBox from '@/components/CellBox/index.vue'
import ChartView from '@/components/Charts/index.vue'
import VTabs from '../Tabs/index.vue'

import {monitoringState, manualMonitoringEmissions, pollutionStatistics} from '@/components/charts/options/bar/index'
import {divisionSequencePollutants} from '@/components/charts/options/line/index'
import {testPie} from '@/components/charts/options/pie/index'

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

const chartOptios = reactive({
  testPie: testPie(),
  monitoringState: monitoringState(),
  manualMonitoringEmissions: manualMonitoringEmissions(),
  pollutionStatistics: pollutionStatistics(),
  divisionSequencePollutants: divisionSequencePollutants(),
})

const handleTabChange = () => {
  console.log('tab 切换了')
}
</script>

<template>
  <div class="left-container">
    <panel-title>废气管理</panel-title>
    <v-tabs v-model:value="tabData.currentValue" :tabs="tabData.tabs" @chang="handleTabChange" />
    <div class="flex-box main">
      <cell-box title="排放口状态" height="14%">
        <div class="cell-1">
          <div class="chart">
            <chart-view :chart-option="chartOptios.testPie" height="100%" />
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
        <chart-view :chart-option="chartOptios.monitoringState" height="100%" />
      </cell-box>

      <cell-box title="污染物排放统计" height="26%">
        <chart-view :chart-option="chartOptios.pollutionStatistics" height="100%" />
      </cell-box>

      <cell-box title="排放手工监测" height="20%">
        <chart-view :chart-option="chartOptios.manualMonitoringEmissions" height="100%" />
      </cell-box>

      <cell-box title="分工序污染物排放统计" height="20%">
        <chart-view :chart-option="chartOptios.divisionSequencePollutants" height="100%" />
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
    padding: 10px 20px 0 20px;
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
          margin-bottom: 6px;
        }
      }
    }
  }
}

.flex-box {
  flex: 1;
}
</style>
