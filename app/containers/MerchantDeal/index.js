/*
 *
 * MerchantDeal
 *
 */

import React, { PropTypes } from "react";
import ProductDetail from "components/ProductDetail";
import Row from "react-bootstrap/lib/Row";
import Panel from "react-bootstrap/lib/Panel";
// Custom
import SecondDiv from "components/SecondDiv";
import FirstDiv from "components/FirstDiv";
import ThirdDiv from "components/ThirdDiv";
import Topper from "components/Topper";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import makeSelectMerchantDeal from "./selectors";

export class MerchantDeal extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Panel className="merchant-panel" header={<Topper />}>
          <FirstDiv product={this.props.product} />
          <Row>
            <SecondDiv product={this.props.product} />
            <ThirdDiv
              product={this.props.product}
              handleOpen={this.props.handleOpen}
            />
          </Row>
        </Panel>
      </div>
    );
  }
}

MerchantDeal.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  MerchantDeal: makeSelectMerchantDeal()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDeal);
