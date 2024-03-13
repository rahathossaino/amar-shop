import './sidebar.scss';
import { FaShoppingBag,FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';



const Sidebar = () => {
    const handleLogout=()=>{

    }
  return (
    <div className='profilesidebar'>
        <ul className='sidebarList'>
            <li className='side-link'>
                <Link to='/user/profile' className='link'>
                    <FaUser/>
                    <span>My Profile</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/user/orders' className='link'>
                    <FaShoppingBag/>
                    <span>My Orders</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/user/wishlist' className='link'>
                    <FavoriteIcon/>
                    <span>Wishlist</span>
                </Link>
            </li>
            <li className='side-link'>
                <Link to='/user/change-password' className='link'>
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