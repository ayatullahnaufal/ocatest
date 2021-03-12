import './App.css';
import './Style.css';
import './Home.css';
import React, { Component } from 'react';
import {Router,Route, Switch} from 'react-router-dom';

// import React from 'react';
import Login from './Component/Login';
import Home from './Component/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/cars" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
