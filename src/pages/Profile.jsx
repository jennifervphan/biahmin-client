import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
    render() {
        if(this.state.user){
            return (
                <div>
                    
                </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
        
    }
}
