import React, { Component } from 'react'

export class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    render() {
        return (
            <div>
                <h1>Auth</h1>
                <input type='text' placeholder='Username'></input>
                <input type='text' placeholder='Password'></input>
                <button>Login</button>
            </div>
        )
    }
}

export default Auth
