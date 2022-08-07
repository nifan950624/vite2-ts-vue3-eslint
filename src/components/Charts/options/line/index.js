import * as echarts from 'echarts'
import {commonGrid, fontSize} from "@/components/Charts/options/config";

const tooltip = {
  trigger: 'axis',
  type: 'line',
  lineStyle: {
    color: 'rgb(126,199,255)',
  },
}

// 分工序污染物排放统计
const divisionSequencePollutants = () => {
  let dataC1 = [20, 30, 60, 40, 50];
  let xData = ['00:00', '04:00', '08:00', '12:00', '16:00'];

  const option = {
    backgroundColor: 'transparent',
    tooltip,
    grid: commonGrid,
    xAxis: {
      type: 'category',
      boundaryGap: true, //顶头显示
      axisLine: {
        show: false,
        lineStyle: {
          color: '#3585d5',
        },
      },
      axisTick: {
        show: false,
        // alignWithLabel: true,
        lineStyle: {
          color: '#3585d5',
        },
      },
      axisLabel: {
        fontSize,
        show: true,
        color: '#ffffff'
      },
      data: xData,
    },
    yAxis: {
      type: 'value',
      splitNumber: 2,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#3585d5',
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dotted',
          color: '#3585d5',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontSize,
        color: '#ffffff'
      },
    },
    series: [
      {
        name: 'a',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbol: 'none',
        showSymbol: true,
        symbolSize: 80,
        itemStyle: {
          normal: {
            lineStyle: {
              color: 'rgba(133, 228, 231, 1)',
              width: 2,
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(133, 228, 231, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(133, 228, 231,0.9)',
                },
              ]),
            },
          },
        },
        data: dataC1,
      },
    ],
  };

  return option
}

// 大宗物料阶段数据统计
const bulkMaterial = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip,
    grid: {...commonGrid, top: 10, bottom: 0},
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#fff',
        },
        splitLine: {
          show: false,
        },
        axisTick: {       //y轴刻度线
          show: false
        },
        boundaryGap: true,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        splitNumber: 2,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#fff',
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '数量',
        type: 'line',
        smooth: true, //是否平滑
        symbol: 'none',
        lineStyle: {
          color: 'rgba(133, 228, 231, 1)',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(133, 228, 231, 0)',
            },
            {
              offset: 1,
              color: 'rgba(133, 228, 231,0.9)',
            },
          ]),
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      },
    ],
  };

  return option
}

const vehicleEmissions = () => {
  let xLabel = ['周一', '周二', '周三', '周四', '周五', '周六', '周天'];
  let dataValue = ['1450', '1550', '1540', '1430', '1600', '1650', '1530'];

  const option = {
    backgroundColor: 'transparent',
    tooltip,
    grid: commonGrid,
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: false,
          lineStyle: {
            color: 'rgb(41,188,245)',
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize,
          },
          formatter: function (data) {
            return data;
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#cccccc',
          },
        },
        axisTick: {
          show: false,
        },
        data: xLabel,
      },
    ],
    yAxis: [
      {
        min: 1200,
        max: 1700,
        interval: 100,
        type: 'value',
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgb(41,188,245)',
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#233653',
          },
        },
        axisLabel: {
          show: false,
          textStyle: {
            color: '#ffffff',
          },
          formatter: function (value, index) {
            // value大于1000时除以1000并拼接k，小于1000按原格式显示
            if (value >= 100) {
              value = value / 100 + "00";
            } else if (value < 100) {
              value;
            }
            return value;
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '数量',
        type: 'line',
        smooth: true,
        showAllSymbol: false,
        symbol: 'none',
        lineStyle: {
          color: 'rgba(133, 228, 231, 1)',
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: 'rgba(133, 228, 231, 0)',
            },
            {
              offset: 1,
              color: 'rgba(133, 228, 231,0.9)',
            },
          ]),
        },
        data: dataValue,
      },
    ],
  };

  return option
}

export {
  divisionSequencePollutants,
  bulkMaterial,
  vehicleEmissions,
}
