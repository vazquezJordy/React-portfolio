import React, { Component } from "react";
import axios from "axios";

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';


export default class PortfolioManager extends Component {
  constructor(){
    super();

    this.state = {
      portfolioItems: []
    };
    this.handleSuccessfulForSubmission = this.handleSuccessfulForSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  }

  handleSuccessfulForSubmission(portfolioItem) {
    //  TODO
    // update the portfolioItem state
    //  and add the portfolio to the list
  }

  handleFormSubmissionError(error){
    console.log("handleFormSubmissionError error",error);
  }

  getPortfolioItems() {
    axios.get('https://jvazquez.devcamp.space/portfolio/portfolio_items', 
      {withCredentials: true
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        })
      console.log(response.data.portfolio_items)
    })
    .catch(error => {
      // handle error
      console.log(error);
  })
  }

  componentDidMount() {
    this.getPortfolioItems();
}

  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm 
            handleSuccessfulForSubmission={this.handleSuccessfulForSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
          />
          
        </div>

        <div className="right-column">
          <PortfolioSidebarList data={this.state.portfolioItems}/>
         
        </div>
      </div>
    );
  }
}
