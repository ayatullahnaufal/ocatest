import './App.css';
import './Style.css';
import './Home.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Component/Login';
import Home from './Component/Home';

class routes extends Component {
    render() {
        return (
        <div className="">
        <Router>
            <div>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            </div>
        </Router>
        </div>
    );
}
}

export default routes;