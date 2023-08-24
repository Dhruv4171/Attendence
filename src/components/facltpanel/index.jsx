import React from 'react'
import Wrapper from './style'
import { Link } from 'react-router-dom'

const Facltpanel = () => {
  return (
    <Wrapper>
     <div className='dashboard'>
     <h2>Faculty Dashboard</h2> 
     </div>
    <div className='links'>
    <Link className='link' to ='/Viewattendance'>View Attendance</Link>
    <Link className='link' to  ='/Markattendance'>Mark Attendance</Link>
    </div> 
    </Wrapper>
  )
}

export default Facltpanel
