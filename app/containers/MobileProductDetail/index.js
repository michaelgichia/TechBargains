import MproductDetail from 'components/MproductDetail';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectMobileProductDetail from './selectors';

export class MobileProductDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MproductDetail />
    );
  }
}

MobileProductDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  MobileProductDetail: makeSelectMobileProductDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileProductDetail);
