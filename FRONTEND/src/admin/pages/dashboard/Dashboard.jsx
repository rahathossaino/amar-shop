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
      </div>
      <div className='widgets'>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
      </div>
    </div>
  )
}

export default Dashboard;