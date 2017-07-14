/*
 *
 * Spinner
 *
 */

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import CircularProgress from "material-ui/CircularProgress";
import "!!style-loader!css-loader!./spinner.css";

export class Spinner extends Component{
  state = {
    prop: null
  }

  isEmpty = prop => {
    if (
      prop === null ||
      prop === undefined ||
      (prop.hasOwnProperty("length") && prop.length === 0) ||
      (prop.constructor === Array && prop.length === 0) ||
      (prop.constructor === Object && Object.keys(prop).length === 0)
    ) {
      return true;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.prop !== nextProps.products) {
      this.setState({prop: nextProps.products})
    }
  }

  render() {
    const {
      prop,
    } = this.state;
    return (
      <div>
        {this.isEmpty(prop)
          ? <div className="rcspinner-wrapper">
              <div className="rcspinner">
                <CircularProgress />
              </div>
            </div>
          : <div />}
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  products: product.products,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
