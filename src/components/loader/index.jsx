import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Wrapper from './style';


const Loader = () => {
  
  return (
    <Wrapper>
      <div className='loader'>
      <ClipLoader color='#292' size='200px' />
      </div>
    </Wrapper>
  )
}

export default Loader
