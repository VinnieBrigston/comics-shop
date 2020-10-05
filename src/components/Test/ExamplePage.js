import React, { Component } from 'react';
import axios from '../../vendor/axios/private';

export class Example extends Component {
  sendPrivateRequest = () => {
    axios.get('/api/example');
  }

  render() {
    return (
      <button onClick={this.sendPrivateRequest}>Send private request</button>
    );
  }
}
