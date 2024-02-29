import './widget.scss';
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";


const amount=7586;
const Widget = ({type}) => {
let data;
switch(type){
  case 'user':
    data={
      title:'USER',
      isMoney:false,
      link:'See all users',
      percentage:'50%',
      icon:<FaUser className='icon' style={{color:'crimson',backgroundColor:'rgba(255,0,0,0.2)'}}/>
    }
    break;
    case 'order':
    data={
      title:'ORDER',
      isMoney:false,
      link:'View all orders',
      percentage:'40%',
      icon:<MdOutlineShoppingCart className='icon' style={{color:'goldenrod',backgroundColor:'rgba(218,165,32,0.2)'}}/>
    }
    break;
    case 'earning':
    data={
      title:'EARNING',
      isMoney:true,
      link:'View net earnings',
      percentage:'10%',
      icon:<MdOutlineMonetizationOn className='icon' style={{color:'green',backgroundColor:'rgba(0,128,0,0.2)'}}/>
    }
    break;
    case 'balance':
    data={
      title:'BALANCE',
      isMoney:true,
      link:'See details',
      percentage:'50%',
      icon:<MdAccountBalance className='icon'style={{color:'purple',backgroundColor:'rgba(128,0,128,0.2)'}}/>
    }
    break;
    default:
      break;
}




  return (
    <div className="widget">
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && '৳'} {amount}</span>
        <span className='link'>{data.link}</span>

      </div>
      <div className='right'>
        <div className='percentage positive'>
          <MdKeyboardArrowUp/>
          {data.percentage}
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget;