import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';


export default function Area() {
  const chartRef = useRef(null)
  const myChart = useRef(null)


  const init = (data) => {
    (myChart.current as any).setOption({
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: '5%',
        top: '10%',
        textStyle: {
          color: 'white'
        },
      },
      series: [
        {
          name: '地级市',
          type: 'pie',
          radius: '70%',
          bottom: 20,
          center: ['60%', '50%'],

          label: {
            show: true,
            position: 'inner',
            formatter: '{d}%',
            color: 'white'
          },
          data,
          // data: [
          //   { value: 14, name: '深圳' },
          //   { value: 15, name: '杭州' },
          //   { value: 13, name: '武汉' },
          //   { value: 28, name: '长沙' },
          //   { value: 30, name: '兰州' }
          // ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]

    })
  }

  useEffect(()=>{
    setInterval(() => {
      init([{ value: 21, name: '上海' },
      { value: 15, name: '北京' },
      { value: 13, name: '重庆' },
      { value: 21, name: '青岛' },
      { value: 30, name: '杭州' }])
    }, 3000);
  },[])

  useEffect(()=>{
    setInterval(() => {
      init(
        [{ value: 14, name: '深圳' },
        { value: 15, name: '杭州' },
        { value: 13, name: '武汉' },
        { value: 28, name: '长沙' },
        { value: 30, name: '兰州' }
        ]
      )
    }, 6000);
  },[])


  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    (myChart.current as any) = echarts.init((chartRef.current) as any);
    init(
      [{ value: 14, name: '深圳' },
      { value: 15, name: '杭州' },
      { value: 13, name: '武汉' },
      { value: 28, name: '长沙' },
      { value: 30, name: '兰州' }
      ]
    )
    // 绘制图表
    // myChart.setOption({
    //   title: {
    //     left: 'center'
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   legend: {
    //     orient: 'vertical',
    //     left: '5%',
    //     top: '10%',
    //     textStyle: {
    //       color: 'white'
    //     },
    //   },
    //   series: [
    //     {
    //       name: '地级市',
    //       type: 'pie',
    //       radius: '70%',
    //       bottom: 20,
    //       center: ['60%', '50%'],

    //       label: {
    //         show: true,
    //         position: 'inner',
    //         formatter: '{d}%',
    //         color: 'white'
    //       },
    //       data: [
    //         { value: 14, name: '深圳' },
    //         { value: 15, name: '杭州' },
    //         { value: 13, name: '武汉' },
    //         { value: 28, name: '长沙' },
    //         { value: 30, name: '兰州' }
    //       ],
    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.5)'
    //         }
    //       }
    //     }
    //   ]

    // });
  }, [])
  return (
    <div className='statistics'>
      <Chartheader text='案发地级市统计' />
      <div ref={chartRef} className='chart'></div>
    </div>
  )
}
