import React, { Component } from 'react';
import './Authentication.css';

class Authentication extends Component {
    render() {
        return (
            <div class="row auth">
                <div className="col-sm-6 col-xs-12">
                    <div className="header">
                        <h3><i className="fas fa-fingerprint fa-2x"></i> Login</h3>
                        <hr/>
                    </div>
                    <div className="row">
                        <fieldset>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-at"></i></div>
                                    </div>
                                    <input name="Email" type="email" placeholder="Email" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input name="Password" type="text" placeholder="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <label htmlFor="Remember">Remember me</label>
                                    <input name="Remember" type="checkbox" className="form-control"/>
                                </div>
                            </div>
                            <button className="btn btn-primary">Sign In</button>
                        </fieldset>
                    </div>
                </div>
                
                <div className="col-sm-6 col-xs-12">
                    <div className="header">
                        <h3><i className="fas fa-user-plus fa-2x"></i> Sign up</h3>
                        <hr/>
                    </div>
                    <div className="row">
                        <fieldset>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-signature"></i></div>
                                    </div>
                                    <input name="Username" type="text" placeholder="Username" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-at"></i></div>
                                    </div>
                                    <input name="Email" type="email" placeholder="Email" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input name="Password" type="password" placeholder="Password" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input name="ConfirmPassword" type="password" placeholder="Confirm password" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-phone"></i></div>
                                    </div>
                                    <input name="Phone" type="text" placeholder="Phone number" className="form-control"/>
                                </div>
                            </div>
                            <button className="btn btn-primary">Sign In</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;