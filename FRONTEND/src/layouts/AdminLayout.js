import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../admin/pages/login/Login';
import Dashboard from '../admin/pages/dashboard/Dashboard';
import List from '../admin/components/list/List';
import Single from '../admin/components/single/Single';
import New from '../admin/components/new/New';

const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="create" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="create" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AdminLayout;
