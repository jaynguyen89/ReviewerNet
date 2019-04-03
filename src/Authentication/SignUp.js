import React, { Component } from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Username : "",
            Email : "",
            Password : "",
            ConfirmPassword : "",
            Phone : "",
            fields : {},
            errors : {},
            IsSubmitable: false,
            ResMessage: "",
            ResType : 0
        };

        this.validateSignUpData = this.validateSignUpData.bind(this);
        this.submitSignUpData = this.submitSignUpData.bind(this);
    }

    validateSignUpData() {
        let fields = this.state.fields;
        let errors = {};

        let unCheck = false, emCheck = false, pwCheck = false, cfCheck = false, pCheck = false;

        //Check Username field
        if (fields.Username == null || fields.Username.length == 0) { // field is empty
            this.setState({ IsSubmitable: false });
            errors.Username = "";
            unCheck = false;
        }
        else if (fields.Username.match(/^[\w]{4,12}$/)) {
            errors.Username = "";
            unCheck = true;
        }
        else { // field is wrong
            this.setState({ Username: "" });
            errors.Username = "Username contains 4-12 characters including alphabets, digits and underscore.";
            unCheck = false;
        }

        //Check Email field
        if (fields.Email == null || fields.Email.length == 0) { // field is empty
            errors.Email = "";
            emCheck = false;
        }
        else if (fields.Email.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/)) {
            this.setState({ Email: fields.Email });
            errors.Email = "";
            emCheck = true;
        }
        else { // field is wrong
            this.setState({ Email: "" });
            errors.Email = "Email seems to be invalid.";
            emCheck = false;
        }

        //Check Password field
        if (fields.Password == null || fields.Password.length == 0) { // field is empty
            errors.Password = "";
            pwCheck = false;
        }
        else if (fields.Password.match(/^([\w\d-!@/%_=`~';:><,&\.\#\$\*\+\^\\\(\)\[\]\{\}\|\?])+$/)) {
            this.setState({ Password: fields.Password });
            errors.Password = "";
            pwCheck = true;
        }
        else { // field is wrong
            this.setState({ Password: "" });
            errors.Password = "Password can not have white space and double quote.";
            pwCheck = false;
        }

        //Check ConfirmPassword field
        if (fields.ConfirmPassword == null || fields.ConfirmPassword.length == 0) { // field is empty
            errors.ConfirmPassword = "";
            cfCheck = false;
        }
        else if (fields.Password != null && fields.ConfirmPassword == fields.Password) {
            this.setState({ ConfirmPassword: fields.ConfirmPassword });
            errors.ConfirmPassword = "";
            cfCheck = true;
        }
        else if (fields.Password == null && fields.ConfirmPassword != null) {
            this.setState({ ConfirmPassword: "" });
            errors.ConfirmPassword = "Password is empty. Please set your Password first.";
            pwCheck = false;
        }
        else{ // field is wrong
            this.setState({ ConfirmPassword: "" });
            errors.ConfirmPassword = "Password and Confirm Password do not match.";
            pwCheck = false;
        }

        if (fields.Phone == null || fields.Phone.length == 0) { // field is empty
            errors.Phone = "";
            pCheck = false;
        }
        else if (fields.Phone.match(/^([\d\s-\#\(\)\+\*])+$/)) {
            this.setState({ Phone: fields.Phone });
            errors.Phone = "";
            pCheck = true;
        }
        else { // field is wrong
            this.setState({ Phone: "" });
            errors.Phone = "Phone Number can only contains digits, white spaces and # * - + ) (";
            pCheck = false;
        }

        this.setState({ IsSubmitable: unCheck && emCheck && pwCheck && cfCheck && pCheck });
        this.setState({ errors : errors });
    }

    handleInputs(field, event) {
        let fields = this.state.fields;
        fields[field] = event.target.value;
        this.setState({ fields });
    }

    submitSignUpData() {
        if (this.state.IsSubmitable)
            fetch('https://localhost:5001/Account/Register/', {
                method: 'POST',
                body: JSON.stringify({
                    UserName: this.state.Username,
                    Email: this.state.Email,
                    Password: this.state.Password,
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
                                ResMessage: "You have submitted your Sign-up information. Please check email to activate your account.",
                                ResType: 2
                            });
                    }
                );
        else
            this.setState({
                ResMessage: "Sign-up information is incomplete or contains errors. Unable to submit.",
                ResType: 1
            });
    }

    render() {
        return (
            <div className="auth-form">
                <div className="header">
                    <h3><i className="fas fa-fingerprint fa-2x"></i> Sign Up</h3>
                    <hr />
                    <div className={this.state.ResMessage && this.state.ResType == 1 ? "alert alert-danger" : "hidden"}>{this.state.ResMessage}</div>
                    <div className={this.state.ResMessage && this.state.ResType == 2 ? "alert alert-success" : "hidden"}>{this.state.ResMessage}</div>
                </div>
                <fieldset>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-signature"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Username")} onBlur={this.validateSignUpData} type="text" placeholder="Username" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Username}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-at"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Email")} onBlur={ this.validateSignUpData } type="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Email}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-key"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Password")} onBlur={ this.validateSignUpData } type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Password}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-key"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "ConfirmPassword")} onBlur={ this.validateSignUpData } type="password" placeholder="Confirm password" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.ConfirmPassword}</div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-phone"></i></div>
                            </div>
                            <input onKeyUp={this.handleInputs.bind(this, "Phone")} onBlur={ this.validateSignUpData } type="text" placeholder="Phone number" className="form-control" />
                        </div>
                        <div className="text-danger small">{this.state.errors.Phone}</div>
                    </div>
                    <button class={this.state.IsSubmitable ? "btn btn-primary" : "btn btn-primary disabled"} onClick={this.submitSignUpData}>Submit</button>
                    <button className="btn btn-secondary right" onClick={() => this.props.switchForm()}>Login</button>
                </fieldset>
            </div>
        );
    }
}

export default SignUp;