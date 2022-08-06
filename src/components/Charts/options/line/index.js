import * as echarts from 'echarts'
import {commonGrid, fontSize} from "@/components/Charts/options/config";

// 分工序污染物排放统计
const divisionSequencePollutants = () => {
  let dataC1 = [20, 30, 60, 40, 50];
  let xData = ['00:00', '04:00', '08:00', '12:00', '16:00'];

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#57617B',
        },
      },
    },
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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(0, 255, 233,0)',
              },
              {
                offset: 0.5,
                color: 'rgba(255, 255, 255,1)',
              },
              {
                offset: 1,
                color: 'rgba(0, 255, 233,0)',
              },
            ],
            global: false,
          },
        },
      },
    },
    grid: commonGrid,
    xAxis: [
      {
        type: 'category',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#56a4cd',
          },
        },
        splitArea: {
          // show: false,
          color: '#f00',
          lineStyle: {
            color: '#f00',
          },
        },
        axisLabel: {
          show: false,
          color: '#fff',
        },
        splitLine: {
          show: false,
        },
        "axisTick": {       //y轴刻度线
          "show": false
        },
        boundaryGap: true,
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
      },
    ],

    yAxis: [
      {
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '示范',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: false,
        symbol: 'none',
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: '#00b3f4',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#00b3f4',
          },
        },
        itemStyle: {
          color: '#00b3f4',
          borderColor: '#fff',
          borderWidth: 3,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0,179,244,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,179,244,0)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(0,179,244, 0.9)',
            shadowBlur: 20,
          },
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      },
      {
        name: '一级',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'none',
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: '#00ca95',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#00ca95',
          },
        },

        itemStyle: {
          color: '#00ca95',
          borderColor: '#fff',
          borderWidth: 3,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0,202,149,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,202,149,0)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(0,202,149, 0.9)',
            shadowBlur: 20,
          },
        },
        data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
      },
      {
        name: '二级',
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'none',
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: '#ffde32',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: '#ffde32',
          },
        },

        itemStyle: {
          color: '#ffde32',
          borderColor: '#fff',
          borderWidth: 1,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: true,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(255,222,50,0.3)',
                },
                {
                  offset: 1,
                  color: 'rgba(255,222,50,0.3)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(255,222,50,0.3)',
            shadowBlur: 20,
          },
        },
        data: [181.55, 298.35, 114.02, 79.55, 189.57, 256.14],
      }
    ],
  };

  return option
}

const vehicleEmissions = () => {
  let xLabel = ['周一', '周二', '周三', '周四', '周五', '周六', '周天'];
  let dataValue = ['1450', '1550', '1540', '1430', '1600', '1650', '1530'];

  const option = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgb(253,233,42)',
      axisPointer: {
        lineStyle: {
          color: 'rgb(126,199,255)',
        },
      },
      formatter: (p) => {
        let dom = `<div style="width: 50px;height: 15px;;color:#fff;position: relative;">
            <div>
                <span style="font-size:18px;color:#000000;padding:0px 4px;line-height:15px">${p[0] ? p[0].data : ''}</span>
            </div>
    </div>`;
        return dom;
      },
    },

    grid: commonGrid,
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: false,
          lineStyle: {
            color: 'rgb(41,188,245)',
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          show: false,
          textStyle: {
            color: '#78bdf5',
            padding: 16,
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
          show: true,
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
            color: '#78bdf5',
            padding: 16,
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
        name: '',
        type: 'line',
        // symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        // showAllSymbol: false,
        // symbolSize:8,
        lineStyle: {
          normal: {
            width: 4,
            color: 'rgb(42,191,250)', // 线条颜色
          },
        },
        itemStyle: {
          color: 'rgb(42,191,250)',
        },
        areaStyle: {
          normal: {
            //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(42,191,250,.4)',
                },
                {
                  offset: 1,
                  color: 'rgba(242,191,250, 0)',
                },
              ],
              false
            ),
          },
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
