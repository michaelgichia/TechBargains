/*
 *
 * MerchantPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import RaisedButton from 'material-ui/RaisedButton';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import { createStructuredSelector } from 'reselect';
import makeSelectMerchantPage from './selectors';
// Material-ui
import CouponIcon from 'material-ui/svg-icons/action/shopping-cart';
import DealsIcon from 'material-ui/svg-icons/maps/local-offer';


export class MerchantPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
            <Col xs={12} sm={4} md={3} lg={3}>
              <div className="amazon-first">
                <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg" />
              </div>
            </Col>
            <Col xs={12} sm={8} md={6} lg={6}>
              <div className="amazon-second">
                <div className="amazon-h1"><h1>Amazon Deals & Coupons</h1></div>
                <div className="amazon-description">
                  <div className="amazon-text">
                    <p>Amazon consistently offers ultra-low prices on everything from electronics to groceries, and shoppers may also come across online coupons to "clip" for additional savings on a rotating selection of items.
                    </p>
                  </div>
                  <div className="amazon-button">
                    <RaisedButton
                      label="29 Coupons"
                      primary
                      icon={<CouponIcon />}
                      className="amazon-coupon-btn"
                    />
                    <RaisedButton
                      label="30 Deals"
                      primary
                      icon={<DealsIcon />}
                      className="amazon-coupon-btn"
                    />
                  </div>
                </div>
              </div>
            </Col>
        </Row>
      </Grid>
    );
  }
}

MerchantPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MerchantPage: makeSelectMerchantPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantPage);
