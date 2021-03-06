/* eslint react/jsx-no-bind:0 */
import { Button, Message } from '@alifd/next';
import React, { Component } from 'react';
import './index.scss';

export default class ReleaseIntro extends Component {
  static displayName = 'ReleaseIntro';

  download = () => {
    Message.success('立即使用');
  };

  render() {

    return (
      <div style={styles.wrapperContainer}>
        <div style={styles.bgImage2}/>
        <div style={styles.wrapper}>
          <div style={styles.bgImage}>
            <div style={styles.bgImageMask}/>
          </div>
          <div style={styles.wrapperBody}>
            <div style={styles.softwareIntro}>
              <div style={styles.title}>
                Simpleui
              </div>
              <div style={styles.slogan}>让Django Admin简单而友好</div>
              <div
                style={{
                  marginLeft: -45,
                  paddingTop: 45,
                  textAlign: 'center',
                }}
              >
                <a href="https://github.com/newpanjing/simpleui" target="_blank">
                  <Button
                    size="large"
                    className="iceworks-download-btn"
                  >
                    立即使用
                  </Button>
                </a>
              </div>
              <div style={styles.softwareDetail}>
                <div style={styles.version}>
                  <span style={{ display: 'block' }}>
                    2.0
                  </span>
                  <span style={{ display: 'block', fontSize: 12 }}>
                    当前版本
                  </span>
                </div>
                <div style={styles.separator}/>
                <div style={styles.history}>
                  <span style={{ display: 'block' }}>
                    2019年04月16日
                  </span>
                  <span style={{ display: 'block', fontSize: 12 }}>
                    发布日期
                  </span>
                </div>
              </div>
              <div style={{ paddingTop: 20, width: 200, textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#fff' }}>
                  运行环境：Python3.7，Django 2.0
                </div>
                <div style={{ fontSize: 12, color: '#fff' }}>
                  安装：pip install django-simpleui
                </div>
              </div>

            </div>
            <div style={styles.software}/>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapperContainer: {
    marginBottom: -400,
    height: 750 + 400,
    position: 'relative',
  },
  bgImage2: {
    width: 1400,
    height: 782,
    borderRadius: 782 / 2,
    background:
      'linear-gradient(135deg, rgba(94,136,255,1) 0%,rgba(111,48,254,1) 100%)',
    transform: 'rotate(-45deg)',
    boxShadow: '2px 2px 60px rgba(0,0,0,0.06)',
    position: 'absolute',
    left: '35%',
    bottom: 550,
    zIndex: 1,
  },
  wrapper: {
    height: 750,
    backgroundColor: '#f6f6f6',
    position: 'relative',
    width: '100%',
  },
  wrapperBody: {
    maxWidth: 1190,
    height: 750,
    position: 'relative',
    margin: '0 auto',
    zIndex: 2,
  },
  softwareIntro: {
    position: 'absolute',
    left: '5%',
    paddingTop: '230px',
    zIndex: 3,
  },
  title: {
    fontSize: 46,
    color: '#fff',
    fontWeight: 500,
    lineHeight: '66px',
    textShadow: '0 0 3px rgba(0,0,0,0.3)',
    marginBottom: 16,
  },
  slogan: {
    fontSize: 24,
    color: '#fff',
    lineHeight: '34px',
    textShadow: '0 0 3px rgba(0,0,0,0.3)',
  },
  softwareDetail: {
    paddingTop: 24,
    display: 'flex',
    flexDirection: 'row',
    color: '#fff',
    fontSize: 16,
    fontWeight: 300,
    width: 200,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  software: {
    backgroundImage: `url(${require('./images/s1.png')})`,
    width: 723,
    height: 446,
    backgroundSize: 'cover',
    position: 'absolute',
    top: 100,
    left: '38%',
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#fff',
  },
  version: {
    width: 80,
    lineHeight: '20px',
    textAlign: 'center',
  },
  history: {
    width: 80,
    lineHeight: '20px',
    textAlign: 'center',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: 750,
    backgroundSize: 'cover',
    // backgroundImage: `url(${require('./images/TB1eoehpKOSBuNjy0FdXXbDnVXa-3798-1500.jpg')})`,
  },
  bgImageMask: {
    width: '100%',
    height: 750,
    background:
      'linear-gradient(135deg, rgba(94,136,255,0.85) 0%,rgba(111,48,254,0.85) 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
  },
};
