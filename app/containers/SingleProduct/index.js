/*
 *
 * SingleProduct
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import SingleProductDetail from "components/SingleProductDetail";
import { CloudinaryContext } from "cloudinary-react";
import CategoryInfo from "components/CategoryInfo";

import { handleOpenModal } from "containers/ReactModal/actions";
import { fetchProduct } from "./actions";

export class SingleProduct extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    product: {},
    productId: ""
  };

  componentDidMount() {
    const { productId } = this.props.params;
    this.props.fetchProduct(productId);
    //this.setState(() => ({ productId }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product !== this.state.product) {
      this.setState(() => ({ product: nextProps.product }));
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title="MacBook"
          meta={[
            { name: "description", content: "Description of SingleProduct" }
          ]}
        />
        <Grid fluid className="show-grid">
          <Row className="show-info-grid">
            <CategoryInfo title="MacBook" />
          </Row>
          <Row className="show-info-grid">
            <Col xs={12} sm={12} md={12} lg={8}>
              {Object.keys(this.state.product).length > 0
                ? <CloudinaryContext cloudName="dw3arrxnf">
                    <SingleProductDetail
                      product={this.state.product}
                      onTouchTap={() => this.props.handleOpenModal(product)}
                    />
                  </CloudinaryContext>
                : <div>Loading...</div>}
            </Col>
            <Col xsHidden sm={4} smHidden md={4} mdHidden lg={4}>
              <Coupon />
              <Deal />
              <Stores />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

SingleProduct.propTypes = {};

const mapStateToProps = ({ singleProduct }) => ({
  product: singleProduct.product
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  handleOpenModal: product => dispatch(handleOpenModal(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
