import "./singleorder.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"




const SigleOrder = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="singleproduct">
          <div className="left">
            <div className="titleItem">Order Information</div>
            <div className="item">
              <span className="title">Order ID:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">User:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Sub Total:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Shipping:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Discount:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Grand Total:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Payment method:</span>
              <span></span>
            </div>
          </div>

          <div className="right">
            <div className="titleItem">Shipping Address</div>
          <div className="item">
              <span className="title">Name:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Email:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Mobile:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Country:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">City:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Zip:</span>
              <span></span>
            </div>
            <div className="item">
              <span className="title">Apartment:</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigleOrder;