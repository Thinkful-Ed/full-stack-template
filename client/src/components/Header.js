import React from 'react';
import {Link} from 'react-router-dom;

export class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Title</h1></Link>
      </div>
    )
  }
}

export default Header;
