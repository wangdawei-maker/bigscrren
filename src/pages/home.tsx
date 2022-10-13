import React, { useEffect, useState } from 'react'
// import { Modal } from './modal'
import './home.scss'
import { reqWeather } from './tool'
import Header from './header.tsx'
import Statistics from './statistics.tsx'
import Criminals from './criminals.tsx'
import Trend from './trend.tsx'
import Timeinterval from './timeinterval.tsx'
import CaseType from './caseType.tsx'
import Area from './area.tsx'
import ChinaMap from './chinaMap.tsx'
import ShowNum from './showNum.tsx'

export const Home = () => {
  const [weathermsg, setWeathermsg] = useState({ area: '', des: '', temperature: '' })
  const getWeatherNow = () => {
    var myCity = new (window as any).BMapGL.LocalCity();
    myCity.get(async (res) => {
      //获取到本地城市信息

      //对城市名称处理一下去掉'市',因为天气的api入参不能带这个
      const cityName=res.name.split('市')[0]

      //获取到近七天的天气情况,data[0]就是今天的天气情况
      const { city, data } = await reqWeather(cityName)
      const wetherObj=data[0]
      setWeathermsg({
        area:city,//城市名
        des:wetherObj.wea_day,//天气情况
        temperature:wetherObj.tem//温度
      })
    })

  }
  useEffect(() => {
    getWeatherNow()
  }, [])

  return (
    <div className='home'>
      <header className='x'>
        <Header area={weathermsg.area} des={weathermsg.des} temperature={weathermsg.temperature} />
      </header>
      <main>
        <section className='section1'>
          <Statistics />
        </section>
        <section className='section2'>
          <ShowNum />
        </section>
        <section className='section3'>
          <CaseType />
        </section>
        <section className='section4'>
          <Criminals />
        </section>
        <section className='section5'>
          <Trend />
        </section>
        <section className='section6'>
          <Timeinterval />
        </section>
        <section className='section7'>
          <Area />
        </section>
        <section className='section8'>
          <ChinaMap />
        </section>
      </main>
    </div>
  )
}
