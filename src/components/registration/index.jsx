import React from 'react'
import Wrapper from './style'

const Registration = () => {
  return (
    <Wrapper>
        <div className="inner">
            <h1>Create your Account here</h1>
            <input type="text" placeholder='Name *' required />
            <input type="text" placeholder='Contact *' required />
            <input type="password" placeholder='Password *' />
            <input type="password" placeholder='Confirm Password *' />
            <select>
                <option value={null} selected disabled> -- Select Role --</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
            </select>
            <input type="button" value="Register" />
        </div>
    </Wrapper>
  )
}

export default Registration
