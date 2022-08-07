import {EChartsOption} from 'echarts'
import {ventState, cleanTransportRatio} from './pie/index'
import {divisionSequencePollutants, bulkMaterial, vehicleEmissions} from './line/index'
import {
  monitoringState,
  manualMonitoringEmissions,
  pollutionStatistics,
  vehicleTrainsStatistics,
  sanitationCarStateStatistics
} from './bar/index'
import {reactive} from "vue";

interface ChartsOptions {
  ventState: EChartsOption                    // 排气口状态
  divisionSequencePollutants: EChartsOption   // 分工序污染物排放统计
  bulkMaterial: EChartsOption                 // 大宗物料阶段数据统计
  vehicleEmissions: EChartsOption             // 车辆排放
  monitoringState: EChartsOption              // 在线监测状态
  manualMonitoringEmissions: EChartsOption    // 排放手工监测
  pollutionStatistics: EChartsOption          // 污染物排放统计
  vehicleTrainsStatistics: EChartsOption      // 车辆车次情况统计
  sanitationCarStateStatistics: EChartsOption // 环卫车状态统计
  cleanTransportRatio: EChartsOption          // 清洁运输比例
}

const options = {
  ventState: ventState(),
  divisionSequencePollutants: divisionSequencePollutants(),
  bulkMaterial: bulkMaterial(),
  vehicleEmissions: vehicleEmissions(),
  monitoringState: monitoringState(),
  manualMonitoringEmissions: manualMonitoringEmissions(),
  pollutionStatistics: pollutionStatistics(),
  vehicleTrainsStatistics: vehicleTrainsStatistics(),
  sanitationCarStateStatistics: sanitationCarStateStatistics(),
  cleanTransportRatio: cleanTransportRatio()
} as ChartsOptions

const useOptions = () => {
  return reactive<ChartsOptions>(options)
}

export default useOptions

