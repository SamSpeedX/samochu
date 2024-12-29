import './assets/css/App.css';
// import Header from './header';
import Developer from './developer';
import Webshow from './electrician';
import Footer from './footer';
import Me from './assets/img/sam.png'
// import React, { useState } from "react";

 
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
 
      <header>
        <div className="logo"><h2>SAM OCHU</h2></div>
       {/* <div className="pc-nav">
          <nav>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/">development</a></li>
              <li><a href="/">Electrician</a></li>
            </ul>
          </nav>
        </div> */}
        <div className="nav-btn">
          <a href="/" download="simon_cv.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </header>

      <div className="hero">
        <div className="container">
          <div className="content">
            <div className='c'>
              <h2>hello world!</h2>
              <p>I'm SIMON CHIKIRA.</p>
              <p>I'm website developer and Electrician from Tanga, Tanzania.</p>
              <p>I'm looking for website development or Electrician job anyware.</p>
              <p>Web created from react js and my php framework.</p>
              <a href="/"><button className="more-btn">Read more</button></a>
            </div>
          </div>
          <div className="hero-pic">
            <img src={ Me } alt='sam'/> 
          </div>
        </div>
      </div>
      <Webshow />
      <Developer />
      <Footer />
    </div>
  );
}

export default App;
