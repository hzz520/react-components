import React, { FC } from 'react'
import ReactDom from 'react-dom'
import Demo from '../index'
const Layout: FC<any> = () => <Demo />
ReactDom.render(<Layout />, document.getElementById('root'))
