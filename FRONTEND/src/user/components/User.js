import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const User = () => {
  const navigate=useNavigate();
  const getToken=()=>{
    const tokenString=sessionStorage.getItem('user_token');
    const userToken=JSON.parse(tokenString);
    return userToken;
  }
  const getUser=()=>{
    const userString=sessionStorage.getItem('user');
    const user_datail=JSON.parse(userString);
    return user_datail;
  }
  const[user_token,setToken]=useState(getToken());
  const[user,setUser]=useState(getUser());
  const logout=()=>{
    sessionStorage.clear();
    navigate('/account/login');
  }
  const saveToken=(user,token)=>{
    sessionStorage.setItem('user_token',JSON.stringify(token));
    sessionStorage.setItem('user',JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate('/account/profile');
  }
  const http=axios.create({
    baseURL:'http://localhost:8000/api',
    headers:{
        'Content-type':'application/json',
        'Authorization': `Bearer ${getToken()}`
    }
  })
  return{
    setToken:saveToken,
    user_token,
    user,
    getToken,
    logout,
    http
  }
}

export default User;