import React, { Component } from 'react';
import './Authentication.css';
import Login from './Login';
import SignUp from './SignUp';

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstForm : "Login",
            formComponent: <Login switchForm={() => this.switchForm()} />
        };

        this.switchForm = this.switchForm.bind(this);
    }

    switchForm() {
        if (this.state.firstForm == "Login")
            this.setState({
                firstForm: "SignUp",
                formComponent: <SignUp switchForm={() => this.switchForm()} />
            });
        else
            this.setState({
                firstForm: "Login",
                formComponent: <Login switchForm={() => this.switchForm()} />
            });
    }

    render() {
        return (
            <div className="row auth">
                { this.state.formComponent }
            </div>
        );
    }
}

export default Authentication;