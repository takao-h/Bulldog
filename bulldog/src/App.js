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

const list = [];
const data = [
  {name: "さざえ", point: "4000", shop: "居酒屋磯野　渋谷店"},
  {name: "なみへい", point: "9090", shop: "居酒屋磯野　新宿ゴールデン街店"},
  {name: "ますお", point: "0", shop: "居酒屋磯野　渋谷東口店"},
  {name: "ふね", point: "19000", shop: "居酒屋チップ  自由が丘東口店"},
  {name: "たらお", point: "280", shop: "Bistro ISONO"},
  {name: "かつお", point: "10", shop: "BAR Orsan"},
  {name: "いくら", point: "80", shop: "海鮮居酒屋わかめ"},
  {name: "あなご", point: "200", shop: "居酒屋チップ  渋谷道玄坂店"},
  {name: "たいこ", point: "400", shop: "BAR hgoehuga"},
  {name: "わかめ", point: "90", shop: "居酒屋チップ  渋谷道玄坂店"},
  {name: "のりすけ", point: "190", shop: "居酒屋チップ  渋谷道玄坂店"},
]

const constent = (data) => {
  return(
    <li>
    <a href="#">
    <div className="flex-contents list-inner">
      <div className="flex-list clerk-left">
        <img src={icon} alt="よっしー"/>
      </div>
      <div className="flex-list clerk-right">
        <div className="clerk-summary">
          <p className="clerk-summary-name">{data.name}</p>
          <p className="clerk-summary-restaurant">{data.shop}</p>
        </div>
        <div className="clerk-point">
          <p>{data.point}<span>ありがとう</span></p>
        </div>
      </div>
    </div>
  </a>
  </li>
  )
}
const cardList = data.map(e => constent(e));

const footer = () => {
  return(
    <footer id="footer">
      <ul className="flex-contents footer-list">
        <li className="flex-list">
          <a href="#" className="active">
            <img src={home_icon} alt="ホーム"/>
            <p>ホーム</p>
          </a>
        </li>
        <li className="flex-list">
          <div className="footer-main">
            <a href="#">
              <div className="footer-main-inner">
                <img src={present_icon} alt="贈る"/>
                <p>贈る</p>
              </div>
            </a>
          </div>
        </li>
        <li className="flex-list">
          <a href="#">
            <img src={mypage_icon} alt="マイページ"/>
            <p>マイページ</p>
          </a>
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
              {cardList}
          </ul>
          </div>
        </section>
        {footer()}
      </div>
    );
  }
}


export default App; 
