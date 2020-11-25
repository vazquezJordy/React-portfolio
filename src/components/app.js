import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About  from "./pages/about";

export default class App extends Component {

  render() {
    return (
      <div className='app'>
      
         <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component ={Home} />
              <Route exact path="/about-me" component ={About} />
            </Switch>
          </div>
        </Router>
        <h1>Jordy Vazquez Portfolio</h1>

        <div>

        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
