import React from 'react'
import Wrapper from './style'
import { useSelector } from 'react-redux'

const Pr = () => {
    const users = useSelector(state => state.users)
    return (
        <Wrapper>
            <div className="inner">
                {users.map(user => (
                    <div key={user.id} className='user_container'>
                        <div className='personal_container'>
                            <div className='img_container'>
                                <h1>Personal Details</h1>
                                <img src={user.img} alt='user_img' />
                            </div>
                            <div className='details container'>
                                <p className='top_info'>Name</p>
                                <p className='user_info'>{user.name}</p>
                                <p className='top_info'>Gender</p>
                                <p className='user_info'>{user.gender}</p>
                                <p className='top_info'>DoB</p>
                                <p className='user_info'>{user.dob}</p>
                            </div>
                        </div>
                        <div className='address_container'>
                            <h1>Address Details</h1>
                            <p className='top_info'>Address</p>
                            <p className='user_info'>{user.address}</p>
                            <p className='top_info'>City</p>
                            <p className='user_info'>{user.city}</p>
                            <p className='top_info'>State</p>
                            <p className='user_info'>{user.state}</p>
                            <p className='top_info'>Country</p>
                            <p className='user_info'>{user.country}</p>
                        </div>
                        <div className='contact_container'>
                            <h1>Contact Details</h1>
                            <p className='top_info'>Phone Number</p>
                            <p className='user_info'>{user.contact}</p>
                            <p className='top_info'>Email</p>
                            <p className='user_info'>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Wrapper>
    )
}

export default Pr
