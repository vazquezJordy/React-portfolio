import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About  from "./pages/about";
import Contact from "./pages/contact";
import Blog  from "./pages/blog";
import PortfolioDetail  from "./portfolio/porfolio-detail";
import Auth  from "./pages/auth";
import NoMatch  from "./pages/no-match";

export default class App extends Component {
  constructor(probs) {
    super(probs);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleUnSuccesfulLogin = this.handleUnSuccesfulLogin.bind(this)
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  handleUnSuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    
    return (
      <div className='container'>
      
         <Router>
          <div>
            <NavigationContainer />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path="/" component ={Home} />

              <Route
              path="/auth" 
              render={props => (
                <Auth
                  {...props}
                  handleSuccesfulLogin={this.handleSuccesfulLogin}
                  handleUnSuccesfulLogin={this.handleUnSuccesfulLogin}
                  />
              )} 
              />

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
