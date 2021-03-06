import React, { Component } from 'react';

const LIGHT =
  require('./images/logo.png');
const DARK =
  require('./images/logo.png');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="150"  alt="logo" />
        </a>
      </div>
    );
  }
}
