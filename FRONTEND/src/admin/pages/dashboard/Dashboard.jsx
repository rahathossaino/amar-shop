import React from 'react'
import './dashboard.scss';
import SideBar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar/>
      <div className='dashboardContainer'>
        <Navbar/>
        home container
      </div>
    </div>
  )
}

export default Dashboard;