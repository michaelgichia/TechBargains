/*
 *
 * MerchantPage
 *
 */
import MerchantInfo from 'components/MerchantInfo';
import MerchantProfile from 'components/MerchantProfile';
import MerchantProducts from 'containers/MerchantProducts';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import { createStructuredSelector } from 'reselect';
import makeSelectMerchantPage from './selectors';


export class MerchantPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid fluid className="show-grid">
        <Row className="show-info-grid">
          <MerchantInfo />
        </Row>
        <div className="show-product-grid">
          <Row>
            <MerchantProducts />
            <MerchantProfile />
          </Row>
        </div>
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
