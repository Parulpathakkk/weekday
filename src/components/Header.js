import React from 'react'
import { Toolbar } from '@mui/material'
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
    <div className="right-arrow"><KeyboardArrowLeftIcon fontSize='small'/></div>
    </div>
    </>
  )
}

export default Header
