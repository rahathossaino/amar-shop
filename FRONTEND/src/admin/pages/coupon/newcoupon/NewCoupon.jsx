import "./newcoupon.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import CouponForm from "./CouponForm";

const NewCoupon = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CouponForm/>
      </div>
    </div>
  )
}

export default NewCoupon;