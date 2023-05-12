import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="header___left">
            <p className='header___left--p'>REDUX STORE</p>
        </div>
        <div className="header___right">
            <div className="header___right___text">
                <Link to="/" >Home</Link>
                <Link to="/card" >Card</Link>
            </div>
        </div>
    </div>
  )
}

export default Header