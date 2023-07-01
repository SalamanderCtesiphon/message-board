import React from 'react'
import bladeRunner from '../images/vlcsnap-2023-01-14-18h24m02s588.png'

function CreatePost() {
  return (
    <div className="post-card">
      <img className='profile-pic' src={bladeRunner} alt="profile" />
      <button id='post-btn'>Start a Post</button>
    </div>
  )
}

export default CreatePost