import React from 'react';
import "./HeaderOption.css";
import Avatar from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {
  const user = useSelector(selectUser);
  const emailInitial = user?.email ? user.email[0] : ''; // Check if user.email is defined

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && ( 
        <Avatar className="headerOption__icon">{emailInitial}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
