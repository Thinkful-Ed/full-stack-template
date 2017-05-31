import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';
import Searchbar from './components/Searchbar';

export default function App(props) {
  return (
    <Router>
      <div>
        <Searchbar/>
      </div>
    </Router>
  )
}
