import React, { Component } from 'react';
import Nav from "../navbar/Nav";
import Footer from "../footer/Footer";
import "./Mainlayout.css";

export default class Mainlayout extends Component {
    render() {
        return (
            <div className="mainlayout">
                <Nav {...this.props} />
                <div className="wrapper">
                    {this.props.children}
                </div>                
                <Footer />
            </div>
        )
    }
}
