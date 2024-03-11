import './sidebar.scss';
import { FaShoppingBag,FaUserCircle } from "react-icons/fa";
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
            <li>
                <Link to='/user/profile' className='link'>
                    <FaUserCircle/>
                    <span>My Profile</span>
                </Link>
            </li>
            <li>
                <Link to='/user/orders' className='link'>
                    <FaShoppingBag/>
                    <span>My Orders</span>
                </Link>
            </li>
            <li>
                <Link to='/user/wishlist' className='link'>
                    <FavoriteIcon/>
                    <span>Wishlist</span>
                </Link>
            </li>
            <li>
                <Link to='/user/change-password' className='link'>
                    <LockIcon/>
                    <span>Change Password</span>
                </Link>
            </li>
            <li>
                <Link onClick={handleLogout} className='link'>
                    <LogoutIcon/>
                    <span>Change Password</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;