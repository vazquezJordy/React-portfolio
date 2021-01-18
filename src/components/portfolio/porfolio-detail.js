import React, { Component } from 'react';
import axios from 'axios';


export default class PorfolioDetail extends Component {
    constructor(props){
        super(props);

    }

    getPortfolioItem() {
        axios.get(`https://jvazquez.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true})
        .then(response => {
            console.log("items", response);
        }).catch(error => {
            console.log("getting Item detail", error);
        });
    }
    componentWillMount() {
        this.getPortfolioItem()
    }

    render() {
        return (
            <div>
                <h2>portfolio detail for  {this.props.match.params.slug}</h2>
            </div>
        );
    }
}
