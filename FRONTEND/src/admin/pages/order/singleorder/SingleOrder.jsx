import "./singleorder.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"


const orders=[{
  title:"samsung 10",
  price:2400,
  qty:4,
  total:9000,
  status:"cancelled"
}]

const SigleOrder = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="singleorder">
          <div className="left">
            <div className="orderinfo">
              <div className="address">
                <h3>Shipping Address</h3>
                <p>Name:<span>Rahat Hossain</span></p>
                <p>Country:<span>Bangladesh</span></p>
                <p>City:<span>Dhaka</span></p>
                <p>Zip:<span>7802</span></p>
                <p>Apartment:<span>4-Hapar Road</span></p>
                <p>Phone:<span>01949395</span></p>
                <p>Email:<span>rahat@gmail.com</span></p>
              </div>
              <div className="orderstatus">
                <h3>Invoice:#837t635</h3>
                <p>Order ID:<span>89</span></p>
                <p>Total:<span>89480 tk</span></p>
                <p>Status:<span className={`Cellwithstatus ${orders[0].status}`}>{orders[0].status}</span></p>
              </div>
            </div>
            <div className="orderamountinfo">
              <div className="amountHeader">
                <p>Product</p>
                <p>Price</p>
                <p>Qty</p>
                <p>Total</p>
              </div>
              {
              orders.map((element)=>{
                return(
                  <div className="amountData">
                    <span>{element.title}</span>
                    <span>{element.price}</span>
                    <span>{element.qty}</span>
                    <span>{element.total}</span>
                  </div>
                  )
                })
              }
              <div className="totalamount">
                <div className="item">
                  <span className="title">Subtotal</span>
                  <span>6000</span>
                </div>
                <div className="item">
                  <span className="title">Shipping</span>
                  <span>150</span>
                </div>
                <div className="item">
                  <span className="title">Discound (dhe78)</span>
                  <span>500</span>
                </div>
                
                <div className="item">
                  <span className="title">Grand Total</span>
                  <span>7000</span>
                </div>
              </div>
              
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="status">
                <h3>Order Status</h3>
                <select className="statusOption">
                  <option>Update Status</option>
                  <option value='delivered'>Delivered</option>
                  <option value='shipped'>Shipped</option>
                  <option value='pending'>Pending</option>
                  <option value='canceled'>Canceled</option>
                </select>
              </div>
              <div className="shipdate">
                <h3>Shipping Date</h3>
                <input type='datetime-local'/>
              </div>
              <button type="submit" className="button">Update</button>
            </div>
            <div className="bottom">
              <h3>Send Invoice</h3>
              <select>
                <option>Admin</option>
                <option>Customer</option>
              </select>
              <button type="submit" className="button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SigleOrder;