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
                            <img src={URL.createObjectURL(user.img.files[0])} alt='user_img' />
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
