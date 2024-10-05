import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
export const RouteLayout = () => {
  return (
    <>
      <Navigation/>
        <Outlet/>
    </>
  )
}
