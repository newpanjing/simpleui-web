import React, { Component } from 'react';
import Header from '../../components/Header';
import ProductFeature from './components/ProductFeature';
import SoftwareDownload from './components/SoftwareDownload';
import BrandList from './components/BrandList';
import FullFooter from './components/FullFooter';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page" style={styles.homepage}>
        <Header/>
        <SoftwareDownload/>
        <div id="feature">
          <ProductFeature
            title="内置多款模板"
            desc="提供多种流行模板，快速切换风格，满足个性化需求"
            img={{
              url:
                require('./images/s2.png'),
              width: 1816 / 2,
              height: 878 / 2,
            }}
          />
        </div>
        <BrandList/>
        <FullFooter/>
      </div>
    );
  }
}

const styles = {
  homepage: {
    background: '#fff',
    overflow: 'hidden',
  },
};
