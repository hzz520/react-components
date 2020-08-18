import React, { FC } from 'react'
import s from './index.scss'

const Demo: FC<{ demo?: string }> = () => {
  return <div className={s.demo}>demo</div>
}

export default Demo
