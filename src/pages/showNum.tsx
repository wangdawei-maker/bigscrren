import React from 'react'
import Num from './num.tsx'


export default function ShowNum() {



    return (
        <div className='ShowNum'>
            <Num txt='地方公安站点' num={2876} />
            <Num txt='违法案件总数' num={46475} />
            <Num txt='违法人员总数' num={366696} />
        </div>
    )
}
