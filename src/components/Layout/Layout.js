import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>LAYOUT</div>
        <div id="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}