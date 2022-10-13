import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';

const px = (n: number) => n / 1552 * (window as any).pageWidth
export default function Statistics() {
  const chartRef = useRef(null)
  const myChart=useRef(null)
  const init=(data1,data2)=>{
    (myChart.current as any).setOption({

      titel: { show: false },
      legend: { show: false },
      xAxis: {
        textStyle:{
          color:'white'
        },
        type: 'category',
        // data: ['陕西省', '辽宁省', '山东省', '河北省', '河南省', '甘肃省'],
        data:data1,
        axisLabel: {
          fontSize: px(12),
          color:'#454D5F',
          formatter(val: string) {
            if (val.length > 2) {
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val
            }

          }
        },
        axisTick: { show: false },
        axisLine: {
           lineStyle: {
            color:'#073360'
        }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: px(12),
          color:'#454D5F',
        },
        axisLine: {
           lineStyle: {
            color:'#073360'
        }
        },
        splitLine: { show: false }
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40)
      },
      series: [
        {
          type: 'bar',
          data: data2
        }
      ]
    });
  }
 
  useEffect(()=>{
    setInterval(() => {
      const newdata1=['湖南省','湖北省','江西省','黑龙江省','内蒙古省','广西省']
      const newdata2=[10,30,20,13,37,35]
      init(newdata1,newdata2)
    }, 3000);
  },[])
  useEffect(()=>{
    setInterval(() => {
      const newdata1=['陕西省', '辽宁省', '山东省', '河北省', '河南省', '甘肃省']
      const newdata2=[5, 20, 36, 10, 10, 20]
      init(newdata1,newdata2)
    }, 6000);
  },[])

  useEffect(()=>{
    setInterval(() => {
      const newdata1=['广东省', '浙江省', '重庆', '福建省', '北京', '上海']
      const newdata2=[13, 24, 26, 14, 12, 17]
      init(newdata1,newdata2)
    }, 9000);
  },[])



  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    (myChart.current as any) = echarts.init((chartRef.current) as any);
    init(['陕西省', '辽宁省', '山东省', '河北省', '河南省', '甘肃省'],[5, 20, 36, 10, 10, 20])
    // 绘制图表
    // myChart.setOption({

    //   titel: { show: false },
    //   legend: { show: false },
    //   xAxis: {
    //     textStyle:{
    //       color:'white'
    //     },
    //     type: 'category',
    //     data: ['陕西省', '辽宁省', '山东省', '河北省', '河南省', '甘肃省'],
    //     axisLabel: {
    //       fontSize: px(12),
    //       color:'#454D5F',
    //       formatter(val: string) {
    //         if (val.length > 2) {
    //           const array = val.split('')
    //           array.splice(2, 0, '\n')
    //           return array.join('')
    //         } else {
    //           return val
    //         }

    //       }
    //     },
    //     axisTick: { show: false },
    //     axisLine: {
    //        lineStyle: {
    //         color:'#073360'
    //     }
    //     },
    //   },
    //   yAxis: {
    //     axisLabel: {
    //       fontSize: px(12),
    //       color:'#454D5F',
    //     },
    //     axisLine: {
    //        lineStyle: {
    //         color:'#073360'
    //     }
    //     },
    //     splitLine: { show: false }
    //   },
    //   grid: {
    //     x: px(40),
    //     y: px(40),
    //     x2: px(40),
    //     y2: px(40)
    //   },
    //   series: [
    //     {
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // });
  }, [])



  return (
    <div className='statistics'>
      <Chartheader text='案发派出所管辖统计' />
      <div ref={chartRef} className='chart'></div>
    </div>
  )
}
