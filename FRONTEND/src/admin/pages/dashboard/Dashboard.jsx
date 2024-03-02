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
        <Chart/>
      </div>
      <div className='latest'>
        <div className="latestTitle">
          <div>Latest Transaction</div>
        </div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard;