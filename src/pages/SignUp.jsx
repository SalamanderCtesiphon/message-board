import React, { useState } from 'react'

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
      <h1>Sign Up for Message Board</h1>
      <form onSubmit={(e) => createUser(e)}>
        <label htmlFor="user-name">Enter a user name:</label>
        <input 
          type="text" 
          placeholder='Enter a user name..'
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <label htmlFor="myFile"></label>
        <input 
          type="file" 
          name="profile-pic" 
          id="user-pic"
        />
        <label htmlFor="info">Tell us something about yourself:</label>
        <textarea 
          name="info" 
          id="info" 
          cols="30" 
          rows="10"
          value={userInfo}
          onChange={(e) => setUserInfo(e.target.value)}
        ></textarea>
        <button className="bn">Submit</button>
      </form>
      <button onClick={() => console.log(users)}>Users</button>
      <button className='bn'><a href="/">News Feed</a></button>
    </div>
  )
}

export default SignUp