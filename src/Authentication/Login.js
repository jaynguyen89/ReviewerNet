import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Username: "",
            Email: "",
            Password: "",
            Remember: false,
            fields: {},
            errors: {},
            IsSubmitable: true,
            ResMessage: "",
            ResType: 0
        }

        this.submitLoginData = this.submitLoginData.bind(this);
    }

    handleInputs(field, event) {
        let fields = this.state.fields;
        let input = event.target.value;

        if (input.indexOf("@") !== -1)
            fields["Email"] = input;
        else
            fields[field] = input;

        this.setState({ fields });
    }

    submitLoginData() {
        if (this.state.IsSubmitable)
            fetch('https://localhost:5001/Account/Login/', {
                method: 'POST',
                body: JSON.stringify({
                    UserName: this.state.Username,
                    Email: this.state.Email,
                    Password: this.state.Password,
                    Remember: this.state.Remember,
                    ConfirmPassword: this.state.ConfirmPassword,
                    PhoneNumber: this.state.Phone
                })
            })
                .then(response => response.json())
                .then(
                    (result) => {
                        if (result.result == "failed")
                            this.setState({
                                ResMessage: result.message,
                                ResType: 1
                            });
                        else
                            this.setState({
                                ResMessage: "You have submitted your Login information. Please check email to activate your account.",
                                ResType: 2
                            });
                    }
                );
        else
            this.setState({
                ResMessage: "Login information is incomplete or contains errors. Unable to login.",
                ResType: 1
            });
    }

    render() {
        return (
            <div className="auth-form">
                <div className="header">
                    <h3><i className="fas fa-fingerprint fa-2x"></i> Login</h3>
                    <hr />
                    <div className={this.state.ResMessage && this.state.ResType == 1 ? "alert alert-danger" : "hidden"}>{this.state.ResMessage}</div>
                    <div className={this.state.ResMessage && this.state.ResType == 2 ? "alert alert-success" : "hidden"}>{this.state.ResMessage}</div>
                </div>
                <fieldset>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-at"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Email")} placeholder="Email or Username" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Email}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-key"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Password")} type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Password}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <label For="Remember">Remember me</label>
                            <input onClick={this.handleInputs.bind(this, "Remember")} type="checkbox" className="form-control" />
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={this.submitLoginData}>Submit</button>
                    <button className="btn btn-secondary right" onClick={() => this.props.switchForm()}>Sign Up</button>
                </fieldset>
            </div>    
        );
    }
}

export default Login;