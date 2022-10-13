import React from 'react'

export default function Num({ txt, num }) {
 
const toThousands = (nums = 0) => {
    return nums.toString().replace(/\d+/, function(n) {
       return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    });
 };
    return (
        <div className='num'>
            <div className='num_num'>{toThousands(num)}</div>
            <div className='num_txt'>{txt}</div>
        </div>
    )
}
