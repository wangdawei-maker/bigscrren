import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';
const px = (n) => n / 1552 * (window as any).pageWidth
export default function Timeinterval() {
    const chartRef = useRef(null)

    useEffect(() => {
        var myChart = echarts.init((chartRef.current) as any);
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
            },
            yAxis: {
                type: 'value',
                splitLine:{lineStyle:{color:'#073E78'}},
                axisLabel:{
                    formatter(val){
                        return val*100+'%'
                    }
                }
            },
            grid: {
                x: px(10),
                y: px(20),
                x2: px(20),
                y2: px(20),
                containLabel:true
              },
            series: [
                {
                    data: [0.15, 0.13, 0.11,
                        0.13, 0.14, 0.15,
                        0.16, 0.18, 0.21,
                        0.19, 0.17, 0.16,
                        0.15],
                    type: 'line',
                    name: '故意伤人',
                    symbol: 'circle',
                    lineStyle: { width: px(2) },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }])
                    },

                }
            ]
        })
    }, [])

    return (
        <div className='statistics'>
            <Chartheader text='案发时段分析' />
            <div ref={chartRef} className='chart'></div>
        </div>
    )
}
