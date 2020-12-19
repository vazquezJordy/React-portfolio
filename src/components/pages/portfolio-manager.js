import React, { Component } from "react";
import axios from "axios";


export default class PortfolioManager extends Component {
  constructor(){
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      currentTime: String(new Date()),
      data: []

  };

  };

  getData() {
    axios.get('https://jvazquez.devcamp.space/portfolio/portfolio_items')
    .then(response => {
      console.log(response.data.portfolio_items)
    })
    .catch(error => {
      // handle error
      console.log(error);
  })
  }

  componentDidMount() {
    this.getData();
}

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <h1>portfolio form...</h1>
          
        </div>

        <div className="right-column">
          <h1>Portfolio sidebar...</h1>
         
        </div>
      </div>
    );
  }
}
