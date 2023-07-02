import React, { useState } from 'react'


function SignUp() {
  const [users, setUsers] = useState([]);
  const [userPic, setUserPic] = useState({});
  const [userName, setUserName] = useState('');
  const [userInfo, setUserInfo] = useState('');
  const [file, setFile] = useState();

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


 

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };


  const handleUploadClick = (e) => {
    e.preventDefault();
    setUserPic(file);
    setFile();
  };

  return (
    <div className="sign-up-page">
      <h1>Create Your Profile</h1>    
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
          <h3>Profile Picture:</h3>
          <div className='file-upload'>
            <input type="file" onChange={handleFileChange} />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>
          </div>
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