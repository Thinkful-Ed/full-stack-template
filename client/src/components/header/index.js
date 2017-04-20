import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FaCog from 'react-icons/lib/fa/cog';
import FaUserTimes  from 'react-icons/lib/fa/user-times';
import { logOut } from '../../actions';

export function Header(props) {
  function renderSettingsIcon(){
    if(props.loggedInShelter){
       return  <li><FaCog /></li>
    }
  }
  function renderLogOutIcon(){
    if(props.loggedInShelter){
      return <li onClick={()=> handleLogOut()}><FaUserTimes  /></li>
    }
  }

  function handleLogOut(){
    props.dispatch(logOut());
  }
  
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li><Link style={{ textDecoration: 'none' }}to='/'>adoptME</Link></li>
          <li>About</li>
          <li><Link style={{ textDecoration: 'none' }} to='/search'>Search</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to='/shelters'>Shelters</Link></li>
          {renderSettingsIcon()}
          {renderLogOutIcon()}
        </ul>
      </div>
    </header>
  );
}

const mapPropsToState = state => ({
  loggedInShelter: state.logIn.loggedInShelter
})

export default connect(mapPropsToState)(Header);