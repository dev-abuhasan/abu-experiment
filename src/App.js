import React, { } from 'react';
import './App.scss';
import AnchorScroll from './Component/AnchorScroll/AnchorScroll';
import FullPageScroll from './Component/FullPageScroll/FullPageScroll';

function App() {
  return (
    <>
      <AnchorScroll>
        <a className="common" href='#one'>one</a>
        <a className="common" href='#tow'>tow</a>
        <a className="common" href='#three'>three</a>
        <a className="common" href='#four'>four</a>
        <a className="common" href='#five'>Five</a>
      </AnchorScroll>
      <FullPageScroll>
        <section id="one" className="scroll_common_section">
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
          <h1>Sec One</h1>
        </section>
        <section id="tow" className="scroll_common_section">
          <h1>Section Tow</h1>
        </section>
        <section id="three" className="scroll_common_section">
          <h1>Section Three</h1>
        </section>
        <section id="four" className="scroll_common_section">
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
          <h1>Section Four</h1>
        </section>
        <section id="five" className="scroll_common_section">
          <h1>Section Five</h1>
        </section>
      </FullPageScroll>
    </>
  );
}

export default App;