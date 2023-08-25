import React from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router'

const StudPanel = () => {
  const user = JSON.parse(window.localStorage.getItem("userinfo")).user
  const navigate = useNavigate()

  const displayAttd = () => {
    navigate('/attdlist')
  }
  return (
    <Wrapper>

            <div className="inner">
                <div key={user.id} className='user_container'>
                    <div className='personal_container'>
                        <div className='img_container'>
                            <h1>Welcome</h1>
                            <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='user_img' />
                        </div>
                        <div className='details container'>
                            <p className='user_info'>{user.name}</p>
                            <p className='user_info'>{user.email}</p>
                            <p className='user_info'>{user.sectionId}</p>
                        </div>
                        <div className='panel_btn'>
                            <form>
                              <input type="button" value="View Attendance" onClick={displayAttd} />
                              <input type="button" value="" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
  )
}

export default StudPanel
