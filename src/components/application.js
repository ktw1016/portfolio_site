import './application.scss';
import React from 'react';
import About from './about.js';

export default class Application extends React.Component {
  render() {
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-center mobile-scale">
        <div style={{display: "inline-block"}}>
          <About />
        </div>
      </div>
    );
  }
}