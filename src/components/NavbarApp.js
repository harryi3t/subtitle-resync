import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Subtitle Resync" />
        <div style={{marginTop: '130px'}} className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
