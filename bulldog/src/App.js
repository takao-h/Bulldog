import React, { Component } from 'react';
import './App.css';
import chipLogo from './images/logo.png'
import home_icon from './images/home_icon.svg'
import present_icon from './images/present_icon.svg'
import mypage_icon from './images/mypage_icon.svg'
import icon from './images/clerk.png'

const header = () => {
  return(
    <header className="App-header">
      <div id="logo">
      <h1><img src={chipLogo}/></h1>
      </div>
    </header>

  )
}

const constent = () => {
  return(
    <a href="#">
    <div className="flex-contents list-inner">
      <div className="flex-list clerk-left">
        <img src={icon} alt="よっしー"/>
      </div>
      <div className="flex-list clerk-right">
        <div className="clerk-summary">
          <p className="clerk-summary-name">よっしー</p>
          <p className="clerk-summary-restaurant">居酒屋チップ  渋谷道玄坂店</p>
        </div>
        <div className="clerk-point">
          <p>134<span>ありがとう</span></p>
        </div>
      </div>
    </div>
  </a>
  )
}

const footer = () => {
  return(
    <footer id="footer">
      <ul className="flex-contents footer-list">
        <li className="flex-list">
          {/* <a href="#" class="active"> */}
            <img src={home_icon} alt="ホーム"/>>
            <p>ホーム</p>
          {/* </a> */}
        </li>
        <li className="flex-list">
          <div className="footer-main">
            {/* <a href="#"> */}
              <div className="footer-main-inner">
                <img src={present_icon} alt="贈る"/>
                <p>贈る</p>
              </div>
            {/* </a> */}
          </div>
        </li>
        <li className="flex-list">
          {/* <a href="#"> */}
            <img src={mypage_icon} alt="マイページ"/>>
            <p>マイページ</p>
          {/* </a> */}
        </li>
      </ul>
    </footer>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {header()}
        <section id="home">
        <div className="inner">
          <div className="home-title">
            <p>登録している店員さん</p>
          </div>
          <ul className='home-list'>
            <li>
              {constent()}
            </li>
          </ul>
          </div>
        </section>
        {footer()}
      </div>
    );
  }
}


export default App; 
