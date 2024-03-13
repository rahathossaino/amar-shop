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
import NewProduct from '../admin/pages/product/newproduct/NewProduct';
import EditProduct from '../admin/pages/product/editproduct/EditProduct';
import OrderList from '../admin/pages/order/orderlist/OrderList';
import SingleOrder from '../admin/pages/order/singleorder/SingleOrder';
import SingleCoupon from '../admin/pages/coupon/singlecoupon/SingleCoupon';
import NewCoupon from '../admin/pages/coupon/newcoupon/NewCoupon';
import Single from '../admin/components/single/Single';
import CouponList from '../admin/pages/coupon/couponlist/CouponList';
import SignIn from '../admin/pages/login/Login';
import Setting from '../admin/pages/settings/Setting';
import Admin from '../admin/Admin';


const AdminLayout = () => {

  const {getToken}=Admin();
  // if(!getToken()){
  //   return <Login/>
  // }
  return (
    <>
      <Routes>
        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sign-in" element={<Login />} />
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
            <Route path="view/:productId" element={<SingleProduct />} />
            <Route path="create" element={<NewProduct />} />
            <Route path="edit/:productId" element={<EditProduct />} />
          </Route>
          <Route path="orders">
            <Route index element={<OrderList />} />
            <Route path=":orderId" element={<SingleOrder />} />
          </Route>
          <Route path="coupons">
            <Route index element={<CouponList />} />
            <Route path=":couponId" element={<SingleCoupon />} />
            <Route path="create" element={<NewCoupon />} />
          </Route>
          <Route path="users">
            <Route index element={<UserList />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path='sign-in' element={<SignIn/>}/>
          <Route path='settings' element={<Setting/>}/>

        </Route>
      </Routes>
    </>
  );
};

export default AdminLayout;
