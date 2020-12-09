import React, { Component } from 'react';
import axios from "axios"


export default class Login extends Component {
    constructor(probs){
        super(probs);

        this.state= {
            email: "",
            password: "",
            errorText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""

        })
    }
    
    clearEntries = () => {
        this.setState({email: "", password: "" });
    }

    handleSubmit(event) {
        axios
        .post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        }, 
        { withCredentials: true }
        )
        .then(response => {
            if (response.data.status === 'created') {
                console.log("you can log in")
            }else {
                this.setState({
                    errorText: "Wrong email or password"
                })
            }
        })
        .catch(error => {
            this.setState({
                errorText: "An error accurd"
            });
        });

        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Your email goes here"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    
                    <input 
                    type="password"
                    name="password"
                    placeholder="Your password goes here"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    
                    <div>
                        <button type="submit">Login</button>
                        <button onClick={this.clearEntries}> Clear Journal Entries </button>
                    </div>
                </form>

            </div>
        );
    }
}