import React, { Component } from 'react';
import Login from "../auth/login"
import LoginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccesfulAuth() {
        this.props.handleSuccesfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnseccessfulLogin();
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
                    handleUnsuccessfulAuth = {this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}