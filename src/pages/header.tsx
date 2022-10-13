import React from 'react'
import Weather from './weather.tsx'
export default function header({area, des, temperature}) {
  return (
    <div className='header'>
      <div></div>
      <div>兰州市公安局合成作战平台 </div>
      <div><Weather area={area} des={des} temperature={temperature}/> </div>
    </div>
  )
}
