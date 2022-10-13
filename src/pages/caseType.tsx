import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';
const px = (n: number) => n / 1552 * (window as any).pageWidth
export default function CaseType() {
    const chartRef = useRef(null)
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init((chartRef.current) as any);
        myChart.setOption({
            legend:{
                bottom:px(5),
                textStyle:{color:'white'},
                itemWidth:px(30),
                itemHeight:px(16)
            },
              toolbox: {
                show: true,
                feature: {
                  mark: { show: true },
                  restore: { show: true },
                  saveAsImage: { show: true }
                }
              },
              series: [
                {
                  name: 'Nightingale Chart',
                  type: 'pie',
                  radius: [10, 50],
                  center: ['50%', '50%'],
                  roseType: 'radius',
                  bottom:50,
                  itemStyle: {
                    borderRadius: 0
                  },
                  label: {
                    show: true,
                    position: 'outside',
                    formatter: '{d}%',
                },
                  data: [
                    { value: 36, name: '刑事案件' },
                    { value: 22, name: '民事案件' },
                    { value: 18, name: '经济案件' },
                    { value: 24, name: '其他案件' },
                  ]
                }
              ]  
        })
       }, [])
    return (
        <div className='statistics'>
            <Chartheader text='案发派出所管辖统计' />
            <div ref={chartRef} className='chart'></div>
        </div>
    )
}
