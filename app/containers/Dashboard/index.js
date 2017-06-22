import AddDeal from "containers/AddDeal";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// Actions
import { getCategories, getSubCategories, getMerchants } from "./actions";

export class Dashboard extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getCategories();
    this.props.getSubCategories();
    this.props.getMerchants();
  }

  render() {
    return (
      <div>
        <AddDeal />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getMerchants: PropTypes.func.isRequired,
  getSubCategories: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getSubCategories: () => dispatch(getSubCategories()),
  getMerchants: () => dispatch(getMerchants())
});

export default connect(null, mapDispatchToProps)(Dashboard);
