import React from 'react'
import './dashboard.scss';
import SideBar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';



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
      <div className='charts'>
        <Featured/>
        <Chart aspect={2/1} title="Last 6 months (Revenue)"/>
      </div>
      <div className='latest'>
        <div className="latestTitle">Latest Transaction</div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;