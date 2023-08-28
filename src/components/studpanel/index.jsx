import React ,{ useState , useEffect } from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router'
import axios from 'axios'

const StudPanel = () => {
  const [users, setUsers] = useState([]);
  const [curruser, setCurruser] = useState({});
  const userContact = JSON.parse(window.localStorage.getItem('USERINFO')).user.contact;
  const navigate = useNavigate()
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

  const displayAttd = () => {
    navigate('/attdlist')
  }

  const displayProfile = () => {
    navigate('/updateprofile')
  }

  const imgSrc =curruser.img ? curruser.img : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <Wrapper>

            <div className="inner">
                <div key={curruser.id} className='user_container'>
                    <div className='personal_container'>
                        <div className='img_container'>
                            <h1>Welcome</h1>
                            <img src={imgSrc} alt='user_img' />
                        </div>
                        <div className='details container'>
                            <h2 className='user_info'>{curruser.name}</h2>
                            <h3 className='user_info'>{curruser.sectionId}</h3>
                        </div>
                        <div className='panel_btn'>
                            <form>
                              <input type="button" value="View Attendance" onClick={displayAttd} />
                              <input type="button" value="Update Profile" onClick={displayProfile}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
  )
}

export default StudPanel
