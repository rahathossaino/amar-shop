import React from 'react'
import './dashboard.scss';
import SideBar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';


const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideBar/>
      <div className='dashboardContainer'>
        <Navbar/>
        <div className='widgets'>
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;