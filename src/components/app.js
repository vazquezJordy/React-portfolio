import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home';
import About  from "./pages/about";
import Contact from "./pages/contact";
import Blog  from "./pages/blog";
import PortfolioDetail  from "./portfolio/porfolio-detail";
import Auth  from "./pages/auth";
import NoMatch  from "./pages/no-match";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this)
    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this)
    this.handleSuccesfulLogout = this.handleSuccesfulLogout.bind(this)
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  handleUnsuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccesfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in",{
       withCredentials: true
      }).then(response => {
        const loggedIN = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN  => return data
        // IF loggedIn status NO_LOGGED_IN => update state 
        // If not loggedIn and status LOGGED_IN => update state to be logged out

        if (loggedIN && loggedInStatus === "LOGGED_IN") {
          return loggedIN
        } else if (loggedIN && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIN && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("error", error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route exact path="/blog" component ={Blog} />];
  }

  render() {
    
    return (
      <div className='container'>
      
         <Router>
          <div>
            <NavigationContainer 
              loggedInStatus={this.state.loggedInStatus} 
              handleSuccesfulLogout={this.handleSuccesfulLogout}
              />

            <h2>{this.state.loggedInStatus}</h2>

            <Switch>
              <Route exact path="/" component ={Home} />

              <Route
              path="/auth" 
              render={props => (
                <Auth
                  {...props}
                  handleSuccesfulLogin={this.handleSuccesfulLogin}
                  handleUnsuccesfulLogin={this.handleUnsuccesfulLogin}
                  />
              )} 
              />

              <Route exact path="/about-me" component ={About} />
              <Route exact path="/contact" component ={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN" ?  this.authorizedPages() : null}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        
        
      </div>
    );
  }
}
