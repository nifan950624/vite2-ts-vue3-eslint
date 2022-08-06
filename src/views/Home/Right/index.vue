<script setup>
import {ref} from 'vue'
import PanelTitle from '@/components/PanelTitle/index.vue'
import CellBox from '@/components/CellBox/index.vue'
import ChartView from '@/components/Charts/index.vue'
import {vehicleTrainsStatistics, sanitationCarStateStatistics} from '@/components/charts/options/bar/index'
import {bulkMaterial, vehicleEmissions} from '@/components/charts/options/line/index'
import {cleanTransportRatio} from '@/components/charts/options/pie/index'

const cleanTransportRatioOptions = ref(cleanTransportRatio())
const vehicleTrainsStatisticsOptions = ref(vehicleTrainsStatistics())
const bulkMaterialOptions = ref(bulkMaterial())
const vehicleEmissionsOptions = ref(vehicleEmissions())
const sanitationCarStateStatisticsOptions = ref(sanitationCarStateStatistics())
</script>

<template>
  <div class="right-container">
    <panel-title align="right">清洁运输</panel-title>
    <div class="flex-box main">
      <div class="row" style="height: 12%">
        <cell-box title="运输总量" class="flex-box">
          <div class="cell-1">
            <div class="item">
              <image class="item-icon" />
              <div class="item-right">
                <div class="name">大宗物料</div>
                <count-to
                  class="count"
                  :style="{color: '#00FFFF'}"
                  :start-val="0"
                  :end-val="7798"
                  :duration="1000"
                />
              </div>
            </div>
            <div class="item">
              <image class="item-icon" />
              <div class="item-right">
                <div class="name">产品</div>
                <count-to
                  class="count"
                  :style="{color: '#4F86EB'}"
                  :start-val="0"
                  :end-val="4638"
                  :duration="1000"
                />
              </div>
            </div>
          </div>
        </cell-box>
        <cell-box title="车辆总数" class="flex-box">
          <div class="cell-2">
            <div class="item">
              <div class="item-amount-wrapper">
                <count-to :start-val="0" :end-val="1000" :duration="1000" />
                <div class="bg">
                  <div class="bg-inner" />
                </div>
              </div>
              <div class="item-name">运输车数量</div>
            </div>
            <div class="item">
              <div class="item-amount-wrapper">
                <count-to :start-val="0" :end-val="43000" :duration="1000" />
                <div class="bg">
                  <div class="bg-inner" />
                </div>
              </div>
              <div class="item-name">环卫车数量</div>
            </div>
          </div>
        </cell-box>
      </div>
      <cell-box title="大宗物料阶段数据统计" height="12%">
        <chart-view :chart-option="bulkMaterialOptions" height="100%" />
      </cell-box>
      <cell-box title="产品阶段数据统计" height="12%">
        <chart-view :chart-option="bulkMaterialOptions" height="100%" />
      </cell-box>
      <cell-box title="车辆车次情况统计" height="20%">
        <chart-view :chart-option="vehicleTrainsStatisticsOptions" height="100%" />
      </cell-box>
      <div class="row" style="height: 15%">
        <cell-box title="清洁运输比例" style="width: 8em" height="100%">
          <chart-view :chart-option="cleanTransportRatioOptions" height="100%" />
        </cell-box>
        <cell-box title="车辆排放阶段统计" class="flex-box" height="100%">
          <chart-view :chart-option="vehicleEmissionsOptions" height="100%" />
        </cell-box>
      </div>
      <cell-box title="环卫车状态统计" class="flex-box">
        <chart-view :chart-option="sanitationCarStateStatisticsOptions" height="100%" />
      </cell-box>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-container {
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
    }

    .cell-1 {
      padding-top: 4px;
      height: 100%;
      box-sizing: border-box;

      .item {
        display: flex;
        padding: 4px 0;

        .item-icon {
          margin-right: 10px;
          width: 30px;
          height: 30px;
          background: #ccc;
        }

        .item-right {
          font-weight: 700;

          .name {
            padding-bottom: 4px;
            font-size: 12px;
          }

          .count {
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }

    @keyframes rotate360 {
      0% {
        transform: none;
      }
      100% {
        transform: rotateZ(360deg);
      }
    }

    .cell-2 {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 0 8px;
      justify-content: space-between;
      align-items: center;

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        .item-amount-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          height: 40px;
          align-items: center;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 8px;
          perspective: 80px;
          perspective-origin: center top;

          .bg {
            position: absolute;
            left: 50%;
            top: 10%;
            width: 50px;
            height: 50px;
            transform: translateX(-50%) rotateX(90deg);
            z-index: -1;

            .bg-inner {
              width: 100%;
              height: 100%;
              border: 4px solid red;
              border-left-color: green;
              border-radius: 50%;
              box-sizing: border-box;
              animation: 1s rotate360 infinite linear;
            }
          }
        }

        .item-name {
          font-size: 12px;
          white-space: nowrap;
        }
      }
    }
  }

  .flex-box {
    flex: 1;
  }
}
</style>
