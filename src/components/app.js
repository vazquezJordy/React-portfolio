import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from './portfolio/portfolio-container'
import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About  from "./pages/about";
import Contact from "./pages/contact";
import Blog  from "./pages/blog";
import PortfolioDetail  from "./portfolio/porfolio-detail";
import NoMatch  from "./pages/no-match";

export default class App extends Component {
  constructor() {
    super();
    
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  getPortfolioItems() {
    axios.get('https://jvazquez.devcamp.space/portfolio/portfolio_items')
  .then( response => {
    // handle success
    console.log(response);
  })
  .catch (error => {
    // handle error
    console.log(error);
  })
  }

  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
      
         <Router>
          <div>
          <h1>Jordy Vazquez Portfolio</h1>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component ={Home} />
              <Route exact path="/about-me" component ={About} />
              <Route exact path="/contact" component ={Contact} />
              <Route exact path="/blog" component ={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        
        
      </div>
    );
  }
}
