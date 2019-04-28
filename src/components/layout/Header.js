import React, { Component } from 'react';
import logo from '../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create_expense/" className="nav-link">Adicionar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;
