import React from 'react'
import style from './Navigation.module.css'
const Navigation = () => {
  return (
    <div className="contener">
      <nav className={`${style.navg}`}>
          <div className="logo">
            <img src="/Images/download.png" alt="" />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    </div>


  )
}

export default Navigation
