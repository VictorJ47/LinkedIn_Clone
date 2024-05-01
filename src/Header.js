import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedinImage from "/Users/victorjimenez/Desktop/linkedin-clone/src/assets/images/linkedin.png";
import avatarImage from "/Users/victorjimenez/Desktop/linkedin-clone/src/assets/images/avatar-1577909_1280.png";
import HeaderOption from './HeaderOption';
import HomeIcon from "@mui/icons-material/Home";
import SurpervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/counter/userSlice';

//nav bar
//header split in two
function Header() {
  const dispatch = useDispatch();


  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className= 'header'>

        <div className="header__left">
        <img src={linkedinImage} alt="LinkedIn Logo" />
            <div className="header__search">
                <SearchIcon/>
                <input placeholder='Search' type="text"/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SurpervisorAccountIcon} title = "My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption 
            avatar = {true}
            title="me"
            onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header
