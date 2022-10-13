import React, { useRef, useEffect } from 'react'
import Chartheader from './chartheader'
import * as echarts from 'echarts';
export default function Criminals() {
    const chartRef = useRef(null)
    useEffect(() => {
        var myChart = echarts.init((chartRef.current) as any)
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                type: 'scroll',
                orient: "vertical",
                top: '15%',
                left: 'left',
                textStyle: {
                    color: 'white'
                },
            },
            series: [
                {
                    name: '犯罪年龄',
                    type: 'pie',
                    radius: ['60%', '75%'],
                    center: ['65%', '50%'],
                    bottom: 10,
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: '{d}%',
                        color: 'white'
                    },
                    data: [
                        { value: 7, name: '10-20' },
                        { value: 10, name: '20-30' },
                        { value: 23, name: '30-40' },
                        { value: 28, name: '40-50' },
                        { value: 32, name: '50-60' },
                    ]
                }
            ]
        })
    }, [])



    return (
        <div className='statistics'>
            <Chartheader text='犯罪人员年龄分布' />
            <div ref={chartRef} className='chart' />
        </div>
    )
}
