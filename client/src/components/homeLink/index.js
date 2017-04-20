import React from 'react'
import {Link} from 'react-router-dom';
import './home-link.css';

export default function HomeLink(props){
  return(
    <div className="home-link">
      <h2>{props.title}</h2>
      <div className="blurb-conainer">
        <p>{props.blurb}</p>
      </div>
      <Link to={`${props.route}`}>
        <button>Go</button>
      </Link>
    </div>  
  )
}