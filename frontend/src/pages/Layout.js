import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Box } from '@mui/material'

export const Layout = () => {
  return (
    <>
      <Box sx={{minHeight:"100vh"}}  className='p-0 m-0 h-100'>
        <Outlet />
      </Box>
      <Footer /> 
    </>
  )
}
