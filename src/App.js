import React, { } from 'react';
import './App.scss';

function App() {
  return (
    <div className="mainContainer">
      <div className="scroll-btn">
        <a className="scrollBtn-Common oneBtn" href='#one'>one</a>
        <a className="scrollBtn-Common oneBtn" href='#tow'>tow</a>
        <a className="scrollBtn-Common oneBtn" href='#three'>three</a>
        <a className="scrollBtn-Common oneBtn" href='#four'>four</a>
      </div>
      <section id="one" className="common one">
        <div>
          <h1>Abu Hasan</h1>
          <h1>Abu Hasan</h1>
          <h1>Abu Hasan</h1>
          <h1>Abu Hasan</h1>
          <h1>Abu Hasan</h1>
          <h1>Abu Hasan</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
        </div>
      </section>
      <section id="tow" className="common tow">
        <h1>Section Tow</h1>
      </section>
      <section id="three" className="common three">
        <h1>Section Three</h1>
      </section>
      <section id="four" className="common four">
        <h1>Section Four</h1>
      </section>
    </div >
  );
}

export default App;