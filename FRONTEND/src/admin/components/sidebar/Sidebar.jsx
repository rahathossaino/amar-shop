import React from 'react'
import './sidebar.scss';
import {NavLink} from 'react-router-dom';
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
                  <NavLink to='/admin/dashboard' className="nav-link">
                    <MdDashboard className='icon'/>
                    <span>Dashboard</span>
                  </NavLink>
                </li>
                <p className='title'>LIST</p>
                <li>
                  <NavLink to='/admin/products' className="nav-link">
                    <MdProductionQuantityLimits className='icon'/>
                    <span>Products</span>
                  </NavLink> 
                </li>
                <li>
                  <NavLink to='/admin/orders' className="nav-link">
                      <BsCreditCardFill className='icon'/>
                      <span>Orders</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/admin/delivary' className="nav-link">
                    <MdLocalShipping className='icon'/>
                    <span>Delivary</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/admin/users' className="nav-link">
                    <FaUser className='icon'/>
                    <span>Users</span>
                  </NavLink>
                </li>
                <p className='title'>ADMIN</p>
                <li>
                  <NavLink to='/admin/settings' className="nav-link">
                    <IoSettings className='icon'/>
                    <span>Setings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/admin/profile' className="nav-link">
                    <FaUserCircle className='icon'/>
                    <span>Profile</span>
                  </NavLink>
                </li>
                <li>
                 <NavLink to='/admin/logout' className="nav-link">
                    <IoLogOut className='icon'/>
                    <span>Logout</span>
                  </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default sidebar;