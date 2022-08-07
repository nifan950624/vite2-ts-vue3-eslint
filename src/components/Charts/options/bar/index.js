import * as echarts from 'echarts'
import {commonGrid, fontSize} from "@/components/Charts/options/config";

const tooltip = {
  trigger: 'axis',
  borderColor: '#62FFFF',
  axisPointer: {
    type: 'shadow',
  },
}

const splitNumber = 4

// 在线监测状态
const monitoringState = (customOption) => {
  const defaultConfig = {
    backgroundColor: 'transparent',
    grid: commonGrid,
    tooltip,
    xAxis: {
      axisLabel: {
        color: '#c0c3cd',
        fontSize,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: ['01-01', '01-05', '01-10', '01-15', '01-20', '01-25', '01-30'],
      type: 'category',
    },
    yAxis: {
      axisLabel: {
        color: '#c0c3cd',
        fontSize,
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      name: '',
    },
    series: [
      {
        data: [353, 66, 112, 270, 315, 418, 500],
        type: 'bar',
        barMaxWidth: 'auto',
        barWidth: 18,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(115, 212, 243, 1)'
          },
          {
            offset: 1,
            color: 'rgba(76, 137, 221, 1.00)'
          }
          ]),
          barBorderRadius: [2, 2, 0, 0]
        },
        label: {
          show: false,
          // position: 'top',
          // distance: 10,
          // color: '#fff'
        },
      },
    ],
  };

  const opt = Object.assign(defaultConfig, customOption)
  return opt
}

// 排放手工监测
const manualMonitoringEmissions = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip,
    grid: commonGrid,
    xAxis: [{
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      axisLine: {
        show: false,
      },
      axisLabel: {
        margin: 10,
        color: '#ffffff',
        textStyle: {
          fontSize
        },
      },
      axisTick: {
        show: false
      }
    }],
    yAxis: [
      {
        splitNumber,
        type: "value",
        name: '',
        nameTextStyle: {
          color: '#C1C6CF',
          fontSize,
          align: "right",
          padding: 5
        },
        axisLabel: {
          formatter: '{value}',
          color: '#ffffff',
          fontSize
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#D1D9EB',
            type: 'dashed'
          }
        }
      },
    ],
    series: [{
      type: 'bar',
      data: [80, 80, 97, 53, 95, 26, 72],
      barWidth: '18px',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: 'rgba(103, 61, 222, 0.1)'
        },
        {
          offset: 0.9,
          color: 'rgba(103, 61, 222, 1.00)'
        }
        ]),
        barBorderRadius: [2, 2, 0, 0]
      },
    }]
  };

  return option
}

// 污染物排放统计
const pollutionStatistics = () => {
  let yLabel = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  let yData = [63, 75, 70, 65, 65, 64, 82, 79]
  const maxVal = Math.max(...yData)
  const bgData = yData.map(() => maxVal + 10)

  const option = {
    backgroundColor: 'transparent',
    grid: {commonGrid, top: 5, bottom: 0},
    tooltip,
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        margin: 15,
        textStyle: {
          color: '#ffffff',
          fontSize
        },
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: yLabel
    }, {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#7ba99e',
          fontSize
        },
      },
      data: yData
    }],
    series: [
      {
        name: '人数',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: [6, 6, 6, 6],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#58b0cb'
            },
            {
              offset: 0.6,
              color: '#5ecbd9'
            },
            {
              offset: 0.9,
              color: '#a7fadd'
            }
            ]),
          },
        },
        barWidth: 12,
        data: yData
      },
      {
        data: bgData,
        type: 'bar',
        barWidth: 12,
        barMaxWidth: 'auto',
        barGap: '-100%',
        zlevel: -1,
        itemStyle: {
          barBorderRadius: [6, 6, 6, 6],
          color: '#ffffff33'
        },
      },
    ]
  };
  return option
}

// 车辆车次情况统计
const vehicleTrainsStatistics = () => {
  const option = {
    backgroundColor: 'transparent',
    animation: true,
    grid: commonGrid,
    tooltip,
    xAxis: {
      data: ['A1', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
      axisLine: {
        show: false //隐藏X轴轴线
      },
      axisTick: {
        show: false //隐藏X轴轴线
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: "rgba(77, 128, 254, 0.2)",
          width: 2
        }
      },
      axisLabel: {
        show: true,
        interval: 0,
        // margin: 14,
        fontSize,
        textStyle: {
          color: "#ffffff" //X轴文字颜色
        }
      }
    },
    yAxis: [
      {
        type: "value",
        gridIndex: 0,
        min: 0,
        interval: 100,
        splitNumber,
        splitLine: {
          show: false,
          lineStyle: {
            color: "rgba(77, 128, 254, 0.2)",
            width: 2
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          margin: 14,
          fontSize,
          textStyle: {
            color: '#fff'
          }
        }
      }
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(146, 225, 255, 1)"
              },
              {
                offset: 1,
                color: "rgba(0, 151, 251, 1)"
              }
            ]),
            barBorderRadius: [2, 2, 0, 0],
          },
        },
        data: [498, 520, 568, 432, 464, 332, 344, 458, 470, 468, 398, 310, 421],
        z: 10,
        zlevel: 0
      }
    ],
  }

  return option
}

// 环卫车状态统计
const sanitationCarStateStatistics = () => {
  var attaData1 = [62, 52, 34, 61, 15, 25, 50, 60, 90, 100];
  var attaData2 = [162, 152, 134, 161, 115, 60, 90, 10, 30, 125];
  const option = {
    backgroundColor: 'transparent',
    tooltip,
    grid: {commonGrid, top: 5, bottom: 0},
    xAxis: {
      show: false,
    },
    yAxis: {
      data: ['A1', 'A2', 'A3', 'B1', 'C1'],
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.79)',
        },
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.79)',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: 'A',
        type: 'bar',
        barWidth: 6,
        zlevel: 2,
        itemStyle: {
          barBorderRadius: [0, 20, 20, 0],
          color: {
            colorStops: [
              {
                offset: 0,
                color: 'rgba(92, 137, 215, 0.3)' // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: 'rgba(92, 137, 215, 0.5)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(92, 137, 215, 1.00)', // 100% 处的颜色
              },
            ],
          },
        },
        data: attaData1,
      },
      {
        name: 'B',
        type: 'bar',
        barWidth: 6,
        zlevel: 2,
        itemStyle: {
          barBorderRadius: [0, 20, 20, 0],
          color: {
            colorStops: [
              {
                offset: 0,
                color: 'rgba(109, 61, 229, 0.30)', // 0% 处的颜色
              },
              {
                offset: 0.2,
                color: 'rgba(109, 61, 229, 0.50)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(109, 61, 229, 1.00)', // 100% 处的颜色
              },
            ],
          },
        },
        data: attaData2,
      },
    ],
  };

  return option
}

export {
  monitoringState,
  manualMonitoringEmissions,
  pollutionStatistics,
  vehicleTrainsStatistics,
  sanitationCarStateStatistics
}
