import React, { FC, useEffect, useCallback } from 'react'
import './index.scss'

const Demo1: FC<any> = () => {
  const init = useCallback(() => {
    console.log('init')
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return <div>demo1</div>
}

export default Demo1
