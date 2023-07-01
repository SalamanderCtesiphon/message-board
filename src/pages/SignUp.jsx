import React, { useState } from 'react'

function SignUp() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    console.log(userName);
  }


  return (
    <div className="sign-up-page">
      <h1>Sign Up for Message Board</h1>
      <form onSubmit={(e) => createUser(e)}>
        <label htmlFor="user-name">Enter a user name:</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)}/>
        <p>Upload a profile picture</p>
        <button>Add File</button>
        <label htmlFor="info">Tell us something about yourself:</label>
        <textarea name="info" id="info" cols="30" rows="10"></textarea>
        <button className="bn">Submit</button>
      </form>
      <button className='bn'><a href="/">News Feed</a></button>
    </div>
  )
}

export default SignUp