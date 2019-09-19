import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div  className="App">
                 <div className="leftHalf">
                    <Link to="/shop" style={{textDecoration:"none"}}>
                    <div className="leftHalf__clickBox">
                        <h1>Online Shop</h1>
                    </div>
                    </Link>
                </div>
                <div className="rightHalf">
                    <Link to="/about" style={{textDecoration:"none"}}>
                    <div className="rightHalf__clickBox">
                        <img className="brandLogo" src="./logo.jpg" alt=""/>
                        <h1>Biahmin</h1>
                        <p>About us</p>
                    </div>
                    </Link>
                </div>
            </div>
            
        )
    }
}
