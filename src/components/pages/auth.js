import React, { Component } from 'react';
import LoginImg from "../../../static/assets/images/auth/login.jpg";

export default class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <div 
                className="left-column"
                style={{backgroundImage: `url(${LoginImg})`}}
                 />


                <div className="right-column">
                    <h1>Login component goes here..</h1>
                </div>
            </div>
        );
    }
}