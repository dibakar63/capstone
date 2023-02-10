import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({user}) => {
  return (
    <div className='navbar'>
      <span className='logo'><Link className="link" to="/">Dibakar App</Link></span>
      {
        user ? (
      
      <ul className='list'>
        <li className='listItem'>
            <img src="https://th.bing.com/th?id=OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className='avatar'/>
        </li>
        <li className='listItem'>Dibakar Dey</li>
        <li className='listItem'>Logout</li>
      </ul>
      ) : (<Link className="link" to="/login">Login</Link>)
      }
    </div>
  )
}

export default Navbar
