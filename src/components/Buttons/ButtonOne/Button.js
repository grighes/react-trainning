import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <div className="padding10">
        <button className="button-one">Click me</button>
      </div>
    );
  }
}