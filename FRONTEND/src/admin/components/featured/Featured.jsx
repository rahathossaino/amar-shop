import './featured.scss';
import { MdOutlineMoreVert,MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MdOutlineMoreVert />
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={70} text={`70%`} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">৳ 4240</p>
        <p className="desc">Previous transaction processing.Last payment may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp/>
              <div className="resultAmount">৳64886.47k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <MdKeyboardArrowDown/>
              <div className="resultAmount">৳5476.47k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <MdKeyboardArrowUp/>
              <div className="resultAmount">৳123886.47k</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Featured;