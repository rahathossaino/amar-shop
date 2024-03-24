import './sidebar.scss';
import { FaShoppingBag,FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import User from '../components/User';


const Sidebar = () => {
    const {user_token}=User();
    const navigate=useNavigate();
    const handleLogout=()=>{
        if (sessionStorage.getItem('user_token')) {
            sessionStorage.removeItem('user_token');
            sessionStorage.removeItem('user');
            navigate('/account/login')
        }
    }
  return (
    <div className='profilesidebar'>
        <ul className='sidebarList'>
            <li className='side-link'>
                <Link to='/account/profile' className='link'>
                    <FaUser/>
                    <span>My Profile</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/account/orders' className='link'>
                    <FaShoppingBag/>
                    <span>My Orders</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/account/wishlist' className='link'>
                    <FavoriteIcon/>
                    <span>Wishlist</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/account/change-password' className='link'>
                    <LockIcon/>
                    <span>Change Password</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link onClick={handleLogout} className='link'>
                    <LogoutIcon/>
                    <span>Logout</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;