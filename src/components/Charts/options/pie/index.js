const ventState = (customOption) => {
  let angle = 0;//角度，用来做简单的动画效果的
  let value = 78; //图上角度数据

  const defaultConfig = {
    backgroundColor: "transparent",
    title: {
      text: '{a|' + value + '}{c|%}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 14,
            color: '#ffffff',
            fontWeight: 'bold'
          },
          c: {
            fontSize: 14,
            color: '#ffffff',
            fontWeight: 'normal'
          }
        }
      }
    },
    series: [
      //内环
      {
        name: "",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params, api) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.65,
              startAngle: (0 + -angle) * Math.PI / 180,
              endAngle: (360 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#0CD3DB",
              fill: "transparent",
              lineWidth: 0.5
            },
            silent: true
          };
        },
        data: [0]
      },
      //外环
      {
        name: '',
        type: 'pie',
        radius: ['90%', '70%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          normal: {
            position: "center",
          }
        },
        data: [
          {
            value: value,
            name: "",
            itemStyle: {
              normal: {
                //外环发光
                borderWidth: 0.5,
                shadowBlur: 10,
                borderColor: '#4bf3f9',
                shadowColor: '#9bfeff',
                color: { // 圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#4bf3f9', // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#4bf3f9', // 100% 处的颜色
                  }]
                },
              }
            }
          },
          {
            value: 100 - value,
            name: "",
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#173164"
              }
            }
          }
        ]
      },
    ]
  }

  const opt = Object.assign(defaultConfig, customOption)
  return opt
}

// 清洁运输比例
const cleanTransportRatio = () => {
  const colors = ["#1879f6", "#03e0ff", "#4963ff", "#03e080"].reverse();
  const datas = [
    {
      name: "形式主义",
      value: 2
    },
    {
      name: "官僚主义",
      value: 2
    },
    {
      name: "享乐主义",
      value: 3
    },
    {
      name: "奢靡之风",
      value: 4
    }
  ];
  const option = {
    backgroundColor: 'transparent',
    color: colors,
    legend: {
      show: false
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: "风险预警",
        type: "pie",
        radius: ["0", "90%"],
        center: ["50%", "50%"],
        roseType: "radius",
        minShowLabelAngle: 60,
        label: {
          show: false,
        },
        labelLine: {
          length: 1,
          length2: 10,
          smooth: true
        },
        data: datas
      }
    ]
  };

  return option
}

export {
  ventState,
  cleanTransportRatio
}
