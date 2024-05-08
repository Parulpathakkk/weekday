import React from 'react'
import { Divider, Toolbar } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Header = () => {
  return (
    <>
    <div className='header-main'>
     <div className="left-arrow"><KeyboardArrowRightIcon fontSize='small'/></div>
    <Toolbar>
    
      👋  Parul
      
    </Toolbar>
    <div className="right-arrow"><KeyboardArrowLeftIcon/></div>
    </div>
    <Divider/>
    </>
  )
}

export default Header
