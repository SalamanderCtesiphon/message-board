import React, { useState } from 'react'
import UploadImage from '../components/UploadImage';


function SignUp() {
  const [users, setUsers] = useState([]);
  const [userPic, setUserPic] = useState({});
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    addUser({userName, userInfo, userPic});
    setUserInfo('');
    setUserName('');
    setUserPic('');
  }

  const addUser = () => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newUser = { id, userName, userInfo, userPic}
    setUsers([...users, newUser]);
  }


  return (
    <div className="sign-up-page">
      <h1>Create Your Profile</h1>
      <button onClick={() => console.log(users)} className='bn'>Users</button>
      <button className='bn'><a href="/">News Feed</a></button>
     
    
      <div className="login-box">
 
        <form >
          <div className="user-box">
            <input 
              type="text" 
              name="" 
              required="" 
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <label htmlFor='user-name'>Username</label>
          </div>
          <div className="user-box">
            <label>Bio:</label>
            <textarea 
            id='info'
            type="password" 
            cols="30" 
            rows="10"
            name="info" 
            required="" 
            value={userInfo}
            onChange={(e) => setUserInfo(e.target.value)}
          />
          </div>
          <a href="#"><button className='bn'>Add an image</button></a>
          <center>
            <a 
              onClick={(e) => createUser(e)}
              href="#">
              Create Profile
              <span></span>
            </a>
          </center>
        </form>
       
      </div>
   
    </div>
  )
}

export default SignUp