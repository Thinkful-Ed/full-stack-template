import React from 'react';
import './header.css';

export default function Header(props) {
  return (
    <header>
      <div className='navbar'>
        <ul>
          <li>adoptme</li>
          <li>About</li>
          <li>Search</li>
          <li>Sign up</li>
        </ul>
      </div>
    </header>
  );
}