import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../admin/pages/login/Login';
import Dashboard from '../admin/pages/dashboard/Dashboard';
import UserList from '../admin/pages/user/userlist/UserList';
import CategoryList from '../admin/pages/category/categorylist/CategoryList';
import NewCategory from '../admin/pages/category/newcategory/NewCategory';
import SubCategoryList from '../admin/pages/subcategory/subcategorylist/SubCategoryList';
import NewSubCategory from '../admin/pages/subcategory/newsubcategory/NewSubCategory';
import BrandList from '../admin/pages/brand/brandlist/BrandList';
import NewBrand from '../admin/pages/brand/newbrand/NewBrand';
import ProductList from '../admin/pages/product/productlist/ProductList';
import SingleProduct from '../admin/pages/product/singleproduct/SingleProduct';
import OrderList from '../admin/pages/order/orderlist/OrderList';

import Single from '../admin/components/single/Single';
import New from '../admin/components/new/New';




const AdminLayout = () => {
  return (
    <>
      <Routes>
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<NewCategory />} />
          </Route>
          <Route path="sub-categories">
            <Route index element={<SubCategoryList />} />
            <Route path="create" element={<NewSubCategory />} />
          </Route>
          <Route path="brands">
            <Route index element={<BrandList />} />
            <Route path="create" element={<NewBrand />} />
          </Route>
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<SingleProduct />} />
            <Route path="create" element={<New />} />
          </Route>
          <Route path="orders">
            <Route index element={<OrderList />} />
            <Route path=":productId" element={<SingleProduct />} />
            <Route path="create" element={<New />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<Single />} />
            <Route path="create" element={<New />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AdminLayout;
