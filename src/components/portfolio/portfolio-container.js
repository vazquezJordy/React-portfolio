import React, {Component} from "react"

import PortfolioItem from "./portfolio-Item"


export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            currentTime: String(new Date()),
            data: [
               {title: "DOMO", catagory:"Tech"}, 
               {title:" Pluralsight", catagory:"Learning"},
               {title: "Divvy", catagory: "Enterprise" },
               {title: "MX", catagory: "Enterprise"},
               {title: "Jobnimbus", catagory: "Enterprise"}
            ]

        };

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    // handlePageTitleUpdate()  {
    //     this.setState({
    //         pageTitle: "Something else"
    //     });
    // }
    componentDidMount() {

        this.liveTime = setInterval(() => {
             console.log('New chat message')
             this.setState({currentTime: String(new Date())})
         },1000
         )
        }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.catagory === filter;
            })
        });
    }

    render() {
        const {currentTime} = this.state;
        if (this.state.isLoading) {
            return <div>Loading ....</div>;
        }

        return (
            <div>
                <h2> {this.state.pageTitle} </h2>

                <div>{currentTime}</div>

                <button onClick={() => this.handleFilter('Enterprise')}>Enterprice</button>
                <button onClick={() => this.handleFilter('Learning')}>Learning</button>
                <button onClick={() => this.handleFilter('Tech')}>Tech</button>

                {this.portfolioItems()}

                {/* <button onClick={this.handlePageTitleUpdate}>Change Title</button> */}
            </div>
        )
    }
}