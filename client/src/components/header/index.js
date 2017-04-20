import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li>adoptme</li>
          <li>About</li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/shelters'>Shelters</Link></li>
        </ul>
      </div>
    </header>
  );
}