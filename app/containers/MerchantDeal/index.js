/*
 *
 * MerchantDeal
 *
 */

import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import ProductDetail from 'components/ProductDetail';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
// Custom
import SecondDiv from 'components/SecondDiv';
import FirstDiv from 'components/FirstDiv';
import ThirdDiv from 'components/ThirdDiv';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectMerchantDeal from './selectors';
 
const features = [
  '<li>#1 Best Seller in Door Bell Kits</li>',
  '<li>Amazon rated 4.1 out of 5 stars with over 6200 reviews</li>',
  '<li>2.4 GHz or 5 GHz WiFi to a home wireless network</li>',
  '<li>wide-angle night vision, infrared LED with 1080p video</li>',
  '<li>2 Way audio with noise cancellation</li>',
  '<li>Compatible with iOS or Android Smartphones</li>',
]

export class MerchantDeal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    product: {
      name: 'Ring Video Doorbell Pro w/ 1080p Camera & 2-Way Audio $199 Ring Video Doorbell Pro w/ 1080p Camera & 2-Way Audio $199 Ring Video Doorbell Pro w/ 1080p Camera & 2-Way Audio $199',
      description: '',
      merchant: 'Amazon',
      backlink: '#',
      themeColor: '#9BF0E9',
      image: 'https://static.ring.com/assets/static/showcase-images/ring-doorbell-pro/colors/ve-678b46c2a8ad59ecd55784fe0a18d683.jpg',
      features: features,
      id: 'wdkjnjnndjnknd',
    },
  }

  handleOpen = (id) => {
    const selectedItem = this.state.products.filter((product) => product.id === id);
    this.setState({ open: true, selected: selectedItem[0] });
  };

  render() {
    return (
      <div>
       <Panel header="Here we are again" className="merchant-panel">
          <FirstDiv 
            product={this.state.product}
          />
          <Row>
            <SecondDiv
              product={this.state.product}
            />
            <ThirdDiv
              product={this.state.product}
              handleOpen={this.state.handleOpen}
            />
          </Row>
        </Panel>
      </div>
    );
  }
}

MerchantDeal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MerchantDeal: makeSelectMerchantDeal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDeal);
