import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const Admin = () => {

  const navigate=useNavigate();
  const getToken=()=>{
    const tokenString=sessionStorage.getItem('token');
    const userToken=JSON.parse(tokenString);
    return userToken;
  }
  const getUser=()=>{
    const userString=sessionStorage.getItem('user');
    const user_datail=JSON.parse(userString);
    return user_datail;
  }
  const[token,setToken]=useState(getToken());
  const[user,setUser]=useState(getUser());
  const logout=()=>{
    sessionStorage.clear();
    navigate('/admin/login');
  }
  const saveToken=(token,user)=>{
    sessionStorage.setItem('token',JSON.stringify(token));
    sessionStorage.setItem('user',JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate('/admin/dashboard');
  }
  const http=axios.create({
    baseURL:'http://localhost:8000/v1',
    headers:{
        'Content-type':'application/json'
    }
  })
  return{
    setToken:saveToken,
    token,
    user,
    getToken,
    logout,
    http
  }
}

export default Admin;