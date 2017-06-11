/*
 *
 * MerchantPages
 *
 */

import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MerchantInfo from 'components/MerchantInfo';
import MerchantProfile from 'components/MerchantProfile';
import MerchantCoupon from 'components/MerchantCoupon';
import CouponHeader from 'components/CouponHeader';
import ProductDetail from 'components/ProductDetail';
import shortid from 'shortid';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

import { fetchMerchandize, fetchSpecificCoupons } from './actions';


export class MerchantPages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    merchandize: [],
    open: false,
    errors: '',
  }

  componentDidMount() {
    const { storeId } = this.props.params;
    this.props.fetchMerchandize(storeId);
    this.props.fetchSpecificCoupons(storeId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.merchandize !== this.state.merchandize) {
      this.setState({ merchandize: nextProps.merchandize });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  
  render() {
    return (
      <Grid fluid className="show-grid">
        <Row className="show-info-grid">
          <MerchantInfo />
        </Row>
        <div className="show-product-grid">
          <Row className="show-dealss-grid">
            <Col id="merchant-id"xs={12} sm={12} md={12} lg={8}>
              <CouponHeader title="29 AMAZON COUPONS" />
              <MerchantCoupon />
              <MerchantCoupon />
              <MerchantCoupon />
              <CouponHeader title="29 AMAZON COUPONS" />
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {
                this.state.merchandize.map((product) => (
                  <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
                    <LazyLoad height={200} offset={200}>
                      <ProductDetail
                        product={product}
                        onTouchTap={this.handleOpen}
                      />
                    </LazyLoad>
                  </li>
                ))
                }
              </ul>
            </Col>
            <MerchantProfile />
          </Row>
        </div>
      </Grid>
    );
  }
}

MerchantPages.propTypes = {
};

const mapStateToProps = ({ merchantPages }) => ({
  merchandize: merchantPages.merchandize,
  errors: merchantPages.errors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMerchandize: (storeId) => dispatch(fetchMerchandize(storeId)),
  fetchSpecificCoupons: (couponId) => dispatch(fetchSpecificCoupons(couponId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantPages);
