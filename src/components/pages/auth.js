import React, { Component } from 'react';
import Login from "../auth/login"
import LoginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    constructor(probs){
        super(probs);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
        this.handleUnSuccesfulAuth = this.UnhandleUnSuccesfulAuth.bind(this);
    }

    handleSuccesfulAuth() {
        this.props.handleSuccesfulLogin();
        this.props.history.push("/");
    }

    handleUnSuccesfulAuth() {
        this.props.handleUnSuccesfulLogin();
    }
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                className="left-column"
                style={{backgroundImage: `url(${LoginImg})`}}
                 />


                <div className="right-column">
                    <Login 
                    handleSuccesfulAuth = {this.handleSuccesfulAuth}
                    handleUnSuccesfulAuth = {this.handleUnSuccesfulAuth}
                    />
                </div>
            </div>
        );
    }
}