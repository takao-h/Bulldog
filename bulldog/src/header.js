import React, { Component } from 'react';
import chipLogo from './images/logo.png'

class Header extends Comment{
  render(){
        return(
      <header className="App-header">
        <div id="logo">
        <h1><img src={chipLogo}/></h1>
        </div>
      </header>
    )
  }
}
export default Header