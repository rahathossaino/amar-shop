import './singlecoupon.scss';
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Admin from '../../../Admin';


const SingleCoupon = () => {
    const {couponId} =useParams();
    const [data,setData]=useState({});
    const{http}=Admin();
    const singleData=(id)=>{
        try{
            http.get('/admin/coupons/'+id)
            .then(res=>{
                setData(res.data.coupon);
            })
          }catch(error){
            console.log(error);
          }
    }
    useEffect(()=>{
        singleData(couponId);       
    },[])
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <div className='singlecoupon'>
            <h3 className='header'>Coupon Information</h3>
            <div className="item">
                <span className='title'>Id:</span>
                <span className='value'>{data.id}</span>
            </div>
            <div className="item">
                <span className='title'>Name:</span>
                <span className='value'>{data.name}</span>
            </div>
            <div className="item">
                <span className='title'>Code:</span>
                <span className='value'>{data.code}</span>
            </div>
            <div className="item">
                <span className='title'>Description:</span>
                <span className='value'>{data.description}</span>
            </div>
            <div className="item">
                <span className='title'>Discount:</span>
                <span className='value'>{data.discount_amount}</span>
            </div>
            <div className="item">
                <span className='title'>Maximum User:</span>
                <span className='value'>{data.max_user}</span>
            </div>
            <div className="item">
                <span className='title'>Maximum Uses Per User:</span>
                <span className='value'>{data.max_uses}</span>
            </div>
            <div className="item">
                <span className='title'>Minimum Amount:</span>
                <span className='value'>{data.min_amount}</span>
            </div>
            <div className="item">
                <span className='title'>Discount Type</span>
                <span className='value'>{data.discount_type}</span>
            </div>
            
          </div>
        </div>
      </div>
    )
}
export default SingleCoupon;