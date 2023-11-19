import React from 'react'
import './CSS/Button.css';
import { Link } from 'react-router-dom';
const Button = ( { children , to }) => {
  return (
    <Link to={to}>
      <button className='button'>
      {children}
      </button>
    </Link>
  )
}

export default Button;