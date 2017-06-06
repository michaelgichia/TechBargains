/*
 *
 * Cuopon
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CouponDetail from 'components/CouponDetail';

export class Cuopon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
