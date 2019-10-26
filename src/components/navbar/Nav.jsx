import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Nav.css";

export default class extends Component {
    render() {
        return (
            <nav>
                <Link exact to="/" className="brandName">BIAHMIN</Link>
                <div>
                    <Link exact to="/shop/trending">Trending <i class="fas fa-sort-down"></i></Link>
                    <Link exact to="/shop/collections">Collections <i class="fas fa-sort-down"></i></Link>
                    <Link exact to="/shop/sale">Sale <i class="fas fa-sort-down"></i></Link>
                    <Link exact to="/shop/newProducts">New Products <i class="fas fa-sort-down"></i></Link>
                </div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <div>
                    <Link to="/search"><i class="fas fa-search"></i></Link>
                    <Link to="/profile"><i class="fas fa-user"></i></Link>
                    <Link><i class="far fa-heart"></i></Link>
                    <Link><i class="fas fa-shopping-cart"></i></Link>
                </div>
                
            </nav>
        )
    }
}
