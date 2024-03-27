import React from 'react'
import Profile from '../profile/Profile';
import ForgetPassword from './ForgetPassword';
import { Routes,Route } from "react-router-dom";

export const AuthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="me" element={<Profile />} />
        <Route path="forgot-password" element={<ForgetPassword />} />
      </Routes>
    );
  };

