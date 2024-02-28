import React from 'react'
import './navbar.scss';
import { FaSearch } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { RiFullscreenExitLine } from "react-icons/ri";
import { IoListOutline } from "react-icons/io5";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search....'/>
          <FaSearch className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <MdLanguage className='icon'/>
            English
          </div>
          <div className="item">
            <RiFullscreenExitLine className='icon'/>
          </div>
          <div className="item">
            <IoMdNotificationsOutline className='icon'/>
          </div>
          <div className="item">
            <MdChatBubbleOutline className='icon'/>
          </div>
          <div className="item">
            <IoListOutline className='icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar