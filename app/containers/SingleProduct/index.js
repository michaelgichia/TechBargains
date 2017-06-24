/*
 *
 * SingleProduct
 *
 */

import React from "react";
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
import { fetchRelatedProduct } from "./actions";

export class SingleProduct extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    product: {},
    relatedProducts: []
  };

  componentDidMount() {
    const { productId } = this.props.params;
    this.props.fetchRelatedProduct(productId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product !== this.state.product) {
      this.setState(() => ({ product: nextProps.product }));
    }
    if (nextProps.relatedProducts !== this.state.relatedProducts) {
      this.setState(() => ({ relatedProducts: nextProps.relatedProducts }));
    }
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.product.name}
          meta={[
            {
              name: "og:url",
              content: `https://deals-expert.com/product/${this.props.product
                .id}`
            },
            { name: "og:type", content: "product.item" },
            { name: "og:title", content: this.props.product.name },
            {
              name: "og:description",
              content: `${(
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.product.features
                  }}
                />
              )}`
            },
            { name: "og:image", content: this.props.product.image }
          ]}
        />
        <Grid fluid className="show-grid">
          <Row className="show-info-grid">

            {Object.keys(this.state.product).length > 0
              ? <CategoryInfo title={this.props.product.name} />
              : <div />}
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
  product: singleProduct.product,
  relatedProducts: singleProduct.relatedProducts
});

const mapDispatchToProps = dispatch => ({
  fetchRelatedProduct: productId => dispatch(fetchRelatedProduct(productId)),
  handleOpenModal: product => dispatch(handleOpenModal(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
