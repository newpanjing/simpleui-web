import React, { Component } from 'react';
import Logo from '../Logo';
import './index.scss';

const MENUS = [
  {
    name: 'Django中文网',
    path: 'https://www.django.cn',
  }, {
    name: '博客',
    path: 'https://www.88cto.com',
  }, {
    name: '特点',
    path: '#feature',
  },
  {
    name: '项目',
    path: '#project',
  },
  {
    name: '文档',
    path: 'https://github.com/newpanjing/simpleui/blob/master/QUICK.md',
  }, {
    name: '源码',
    path: 'https://github.com/newpanjing/simpleui/',
  },
];

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo/>
          <div className="header-navbar">
            {
              MENUS.map((item, idx) => {
                return (
                  <a key={idx} className="header-menu-item" href={item.path}>{item.name}</a>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
