import React from 'react'

function SideNavBar() {
  return (
    <div className='side-bar'>
      <ul>
        <li><a href="/">News Feed</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </div>
  )
}

export default SideNavBar