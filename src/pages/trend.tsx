import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';
const px = (n) => n / 1552 * (window as any).pageWidth
export default function Trend() {
    const chartRef = useRef(null)

    useEffect(() => {
        var myChart = echarts.init((chartRef.current) as any)
        myChart.setOption({
            legend:{
                bottom:px(20),
                textStyle:{color:'white'},
                itemWidth:px(30),
                itemHeight:px(16)
            },
            grid: {
                x: px(10),
                y: px(20),
                x2: px(20),
                y2: px(50),
                containLabel:true
              },
            xAxis: {
                type: 'category',
                boundaryGap:false,
                data: [2015,2016,2017,2018,2019,2020,2021],
                splitLine:{show:true,lineStyle:{color:'#073E78'}},
                axisTick:{show:false},
                axisLine:{show:false},
                axisLabel:{interval:'auto'}
            },
            yAxis: {
                type: 'value',
                splitLine:{show:true,lineStyle:{color:'#073E78'}},
                axisLabel:{
                    formatter(val:number){
                        return val*100+'%'
                    }
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            series: [
                {
                    data: [0.07, 0.05, 0.03, 0.04, 0.03, 0.02, 0.01],
                    type: 'line',
                    name:'抢劫'
                },
                {
                    data: [0.05, 0.03, 0.05, 0.06, 0.06, 0.03, 0.04],
                    type: 'line',
                    name:'醉驾'
                },
                {
                    data: [0.08, 0.06, 0.05, 0.05, 0.03, 0.02, 0.01],
                    type: 'line',
                    name:'盗窃'
                },
                {
                    data: [0.09, 0.06, 0.07, 0.05, 0.04, 0.02, 0.01],
                    type: 'line',
                    name:'故意杀人'
                }
            ]
        })

    }, [])


    return (
        <div className='statistics'>
            <Chartheader text='发案趋势统计' />
            <div ref={chartRef} className='chart' />
        </div>
    )
}
