import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/root' className={({isActive})=>isActive?'is_active':'is_not_active'} end>Home</NavLink></li>
            <li><NavLink to='product'  className={({isActive})=>isActive?'is_active':'is_not_active'}>Product</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation