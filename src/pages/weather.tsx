import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_3700257_qxp79tcw41o.js',
  ],
});
const px = (n: number) => n / 1552 * (window as any).pageWidth

export default function Weather({ area, des, temperature }) {


  const getIcon = (txt: string) => {
    switch (txt) {
      case '多云':
        return <IconFont type='icon-duoyun' style={{ fontSize: px(32) }} />
      case '晴':
        return <IconFont type='icon-qingtian' style={{ fontSize: px(32) }} />
      case '阴':
        return <IconFont type='icon-yintian' style={{ fontSize: px(32) }} />
      case '小雨':
        return <IconFont type='icon-xiaoyu' style={{ fontSize: px(32) }} />
      default:
        return <IconFont type='icon-duoyun' style={{ fontSize: px(32) }} />

    }

  }



  return (
    <div style={{ color: '#6D9291', display: 'flex', alignItems: 'center' }} className='weather'>
      <IconFont type="icon-diliweizhi" style={{ fontSize: px(32) }} />{area}
      <div style={{ marginLeft: px(10) }}>{getIcon(des)}</div>
      {temperature + '℃'}
      <div style={{ marginLeft: px(10) }}>{des}</div>
    </div>
  )
}
