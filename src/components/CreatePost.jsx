import React from 'react'
import bladeRunner from '../images/vlcsnap-2023-01-14-18h24m02s588.png'



function CreatePost({ toggleShowModal }) {
  

  return (
    <div className="post-card">
      <img className='profile-pic' src={bladeRunner} alt="profile" />
      <button className='post-btn' onClick={toggleShowModal}>Start a Post</button>
      
      
    </div>
  )
}

export default CreatePost