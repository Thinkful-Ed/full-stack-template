import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li><Link style={{ textDecoration: 'none' }}to='/'>adoptME</Link></li>
          <li>About</li>
          <li><Link style={{ textDecoration: 'none' }} to='/search'>Search</Link></li>
          <li><Link style={{ textDecoration: 'none' }} to='/shelters'>Shelters</Link></li>
        </ul>
      </div>
    </header>
  );
}