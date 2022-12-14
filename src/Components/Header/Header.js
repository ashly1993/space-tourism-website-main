import React from 'react'
import TabContainer from '../TabContainer/TabContainer'
import Logo from '../../images/starter-code/assets/shared/logo.svg'
import './Header.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';




function Header() {

  const [show, setShow] = useState(false)

  return (
    <div className='header'>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="horizontalLine"></div>  
        <div className="navBar">
            <TabContainer/>
        </div>
        <div className="menuIcon">
        <i class="fa-solid fa-bars" onClick={()=>{
           setShow(true)
        }}></i>
        </div> 

        {
          show ?
          <div className="hideBar">
            <div className="closeBtn">
            <i class="fa-solid fa-xmark" onClick={()=>{
           setShow(false)
        }}></i>
            </div>
            <ul>
            <Link to="/"> <li> <a href="">00 HOME</a> </li></Link>
            <Link to="/destination_page"><li> <a href="">01 DESTINATION</a> </li></Link>
            <Link to="/crew_page"><li> <a href="">02 CREW</a> </li></Link>
            <Link to="/technology_page"><li> <a href="">03 TECHNOLOGY</a> </li></Link>
            </ul>
          
         </div>: null
        }     
    </div>
  )
}

export default Header