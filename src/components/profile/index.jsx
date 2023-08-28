import React, { useState, useEffect } from 'react'
import Wrapper from './style'
import axios from 'axios'

const Pr = () => {
    const [users, setUsers] = useState([]);
    const [curruser, setCurruser] = useState({});
    const userContact = JSON.parse(window.localStorage.getItem('USERINFO')).user.contact;
    var foundUser = null;

    useEffect(() => {
        axios.get('https://quizattendace.onrender.com/api/user/read')
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    useEffect(() => {
        foundUser = users.find(user => user.contact === userContact);
        if (foundUser) {
            setCurruser(foundUser);
        }
    }, [users, userContact]);

    const imgSrc = curruser.img ? curruser.img : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

    return (
        <Wrapper>
            <div className="inner">
                <div key={curruser.id} className='user_container'>
                    <div className='personal_container'>
                        <div className='img_container'>
                            <h1>Personal Details</h1>
                            <img src={imgSrc} alt='user_img' />
                        </div>
                        <div className='details container'>
                            <p className='top_info'>Name</p>
                            <p className='user_info'>{curruser.name}</p>
                            <p className='top_info'>Gender</p>
                            <p className='user_info'>{curruser.gender}</p>
                            <p className='top_info'>DoB</p>
                            <p className='user_info'>{curruser.dob}</p>
                        </div>
                    </div>
                    <div className='address_container'>
                        <h1>Address Details</h1>
                        <p className='top_info'>Address</p>
                        <p className='user_info'>{curruser.address}</p>
                        <p className='top_info'>City</p>
                        <p className='user_info'>{curruser.city}</p>
                        <p className='top_info'>State</p>
                        <p className='user_info'>{curruser.state}</p>
                        <p className='top_info'>Country</p>
                        <p className='user_info'>{curruser.country}</p>
                    </div>
                    <div className='contact_container'>
                        <h1>Contact Details</h1>
                        <p className='top_info'>Phone Number</p>
                        <p className='user_info'>{curruser.contact}</p>
                        <p className='top_info'>Email</p>
                        <p className='user_info'>{curruser.email}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Pr;
