import React from 'react'
import './sidebar.scss';
import { MdDashboard } from "react-icons/md";
import { FaUser,FaUserCircle } from "react-icons/fa";
import { MdProductionQuantityLimits,MdOutlineLogout,MdLocalShipping } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";


const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">amarshop</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
              <p className='title'>MAIN</p>
                <li>
                  <MdDashboard className='icon'/>
                  <span>Dashboard</span>
                </li>
                <p className='title'>LIST</p>
                <li>
                  <MdProductionQuantityLimits className='icon'/>
                  <span>Products</span>
                </li>
                <li>
                  <BsCreditCardFill className='icon'/>
                  <span>Orders</span>
                </li>
                <li>
                  <MdLocalShipping className='icon'/>
                  <span>Delivary</span>
                </li>
                <li>
                  <FaUser className='icon'/>
                  <span>User</span>
                </li>
                <p className='title'>ADMIN</p>
                <li>
                  <IoSettings className='icon'/>
                  <span>Setings</span>
                </li>
                <li>
                  <FaUserCircle className='icon'/>
                  <span>Profile</span>
                </li>
                <li>
                  <IoLogOut className='icon'/>
                  <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default sidebar;