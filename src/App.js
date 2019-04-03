import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Authentication from './Authentication/Authentication';
import './App.css';

const UserContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ActiveUser: {}
        }
    }

    componentDidMount() {
        fetch("https://localhost:5001/Account/TransferSessionInformation/")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({ ActiveUser: result });
                }
            );
    }

    render() {
        return (
            <UserContext.Provider value={this.state.ActiveUser}>
                <Authentication />
            </UserContext.Provider>
        );
    }
}

export default App;