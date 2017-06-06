/*
 *
 * Cuopon
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CouponDetail from 'components/CouponDetail';

export class Cuopon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
  	coupons: [],
  	errors: '',
  }
  componentDidMount() {
    axios.get('/public-api/all/featured-coupons')
    .then((response) => {
      if (response.data.confirmation === 'success') {
      	console.log('coupons', response.data.results)
        this.setState({ coupons: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.message });
        console.error(response.data);
      }
    });
  }

  render() {
    return (
      <CouponDetail />
    );
  }
}

Cuopon.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Cuopon);
