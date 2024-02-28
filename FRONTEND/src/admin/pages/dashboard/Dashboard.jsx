import React from 'react'
import './dashboard.scss';
import SideBar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar/>
      <div className='dashboardContainer'>container</div>
    </div>
  )
}

export default Dashboard;