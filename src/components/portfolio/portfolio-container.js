import React, {Component} from "react"
import axios from 'axios';

import PortfolioItem from "./portfolio-Item"


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            currentTime: String(new Date()),
            data: []

        };

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
        this.handleFilter = this.handleFilter.bind(this);
    }

    getPortfolioItems() {
        axios.get('https://jvazquez.devcamp.space/portfolio/portfolio_items')
      .then( response => {
        // handle success
        
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch (error => {
        // handle error
        console.log(error);
      })
      }

    portfolioItems() {
       

        //
        return this.state.data.map(item => {
            return (<PortfolioItem
             key={item.id}
             item={item}

             />
            );
        });
    }

    // handlePageTitleUpdate()  {
    //     this.setState({
    //         pageTitle: "Something else"
    //     });
    // }
    // componentDidMount() {

    //     this.liveTime = setInterval(() => {
    //         //  console.log('New chat message')
    //          this.setState({currentTime: String(new Date())})
    //      },1000
    //      )
    //     }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.catagory === filter;
            })
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        
        if (this.state.isLoading) {
            return <div>Loading ....</div>;
        }

        return (
            <div>
                <h2> {this.state.pageTitle} </h2>

                <button onClick={() => this.handleFilter('Enterprise')}>Enterprice</button>
                <button onClick={() => this.handleFilter('Learning')}>Learning</button>
                <button onClick={() => this.handleFilter('Technology')}>Tech</button>

                {this.portfolioItems()}

                {/* <button onClick={this.handlePageTitleUpdate}>Change Title</button> */}
            </div>
        )
    }
}