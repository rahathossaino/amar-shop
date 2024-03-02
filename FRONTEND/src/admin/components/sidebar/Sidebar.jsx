import React from 'react'
import './sidebar.scss';
import {Link} from 'react-router-dom';
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
                  <Link to='/admin/dashboard' className="nav-link">
                    <MdDashboard className='icon'/>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <p className='title'>LIST</p>
                <li>
                  <Link to='/admin/products' className="nav-link">
                    <MdProductionQuantityLimits className='icon'/>
                    <span>Products</span>
                  </Link> 
                </li>
                <li>
                  <Link to='/admin/orders' className="nav-link">
                      <BsCreditCardFill className='icon'/>
                      <span>Orders</span>
                  </Link>
                </li>
                <li>
                  <Link to='/admin/delivary' className="nav-link">
                    <MdLocalShipping className='icon'/>
                    <span>Delivary</span>
                  </Link>
                </li>
                <li>
                  <Link to='/admin/users' className="nav-link">
                    <FaUser className='icon'/>
                    <span>Users</span>
                  </Link>
                </li>
                <p className='title'>ADMIN</p>
                <li>
                  <Link to='/admin/settings' className="nav-link">
                    <IoSettings className='icon'/>
                    <span>Setings</span>
                  </Link>
                </li>
                <li>
                  <Link to='/admin/profile' className="nav-link">
                    <FaUserCircle className='icon'/>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                 <Link to='/admin/logout' className="nav-link">
                    <IoLogOut className='icon'/>
                    <span>Logout</span>
                  </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default sidebar;