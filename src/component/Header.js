import React from 'react'
import "../styles/Header.css"

const Header = ( {setIsAdding} ) => {
  return (
    <div className='header'>
      <h1 >Employee Management System</h1>

      <button  onClick={()=> setIsAdding(true)} >Add Employee </button>
    </div>
  )
}

export default Header
