import './singlecoupon.scss';
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"

const SingleCoupon = () => {
    return (
      <div className="list">
        <Sidebar/>
        <div className="listContainer">
          <Navbar/>
          <div className='singlecoupon'>
            <h3 className='header'>Coupon Information</h3>
            <div className="item">
                <span className='title'>Id:</span>
                <span className='value'>10</span>
            </div>
            <div className="item">
                <span className='title'>Name:</span>
                <span className='value'>hello</span>
            </div>
            <div className="item">
                <span className='title'>Code:</span>
                <span className='value'>xrds34</span>
            </div>
            <div className="item">
                <span className='title'>Discount:</span>
                <span className='value'>986</span>
            </div>
            <div className="item">
                <span className='title'>Maximum User:</span>
                <span className='value'>67</span>
            </div>
            <div className="item">
                <span className='title'>Maximum Uses Per User:</span>
                <span className='value'>2</span>
            </div>
            <div className="item">
                <span className='title'>Minimum Amount:</span>
                <span className='value'>10</span>
            </div>
            <div className="item">
                <span className='title'>Discount Type</span>
                <span className='value'>Fixed</span>
            </div>
            
          </div>
        </div>
      </div>
    )
}
export default SingleCoupon;