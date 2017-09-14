import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import './styles/custom-style.css';
class Fullstack extends Component {
  render() {

    return (
      <div className="Fullstack">
        <div className="header">
          <img src={logo} className="logo-class" alt="logo" />
          <h2>Payoda Full Stack</h2>
        </div>
        <div className="section">
         <h3>Hello World!</h3>
        </div>
      </div>
    );
  }
}
export default Fullstack;
