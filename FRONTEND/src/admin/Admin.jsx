import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const Admin = () => {
  const navigate=useNavigate();
  const getAdminToken=()=>{
    const tokenString=sessionStorage.getItem('admin_token');
    const userToken=JSON.parse(tokenString);
    return userToken;
  }
  const getAdmin=()=>{
    const userString=sessionStorage.getItem('admin');
    const user_datail=JSON.parse(userString);
    return user_datail;
  }
  const[admin_token,setToken]=useState(getAdminToken());
  const[admin,setAdmin]=useState(getAdmin());
  const logout=()=>{
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin');
    navigate('/admin/sign-in');
  }
  const saveToken=(admin,token)=>{
    sessionStorage.setItem('admin_token',JSON.stringify(token));
    sessionStorage.setItem('admin',JSON.stringify(admin));
    setToken(token);
    setAdmin(admin);
    navigate('/admin/dashboard');
  }
  const http=axios.create({
    baseURL:'http://localhost:8000/api',
    headers:{
        'Content-type':'application/json',
        'Authorization': `Bearer ${getAdminToken()}`
    }
  })
  return{
    setToken:saveToken,
    admin_token,
    admin,
    getAdminToken,
    logout,
    http
  }
}

export default Admin;