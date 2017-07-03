/*
 *
 * SingleProduct
 *
 */

import Headers from "components/Headers";
import React from "react";

import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import SingleProductDetail from "components/SingleProductDetail";
import SinglePageCarousel from "components/SinglePageCarousel";
import CategoryInfo from "components/CategoryInfo";
import ShareButtons from "components/ShareButtons";

import { connect } from "react-redux";
import { CloudinaryContext } from "cloudinary-react";
import { Container, Row, Col } from "reactstrap";

import { handleOpenModal } from "containers/ReactModal/actions";
import "!!style-loader!css-loader!./single-product.css";
import { fetchRelatedProduct } from "./actions";

export class SingleProduct extends React.Component {
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
      <Container className="single-product-container">
        {Object.keys(this.state.product).length > 0
          ? <div>
              <Headers product={this.state.product} />
              <CategoryInfo title={this.props.product.name} />
              <div className="single-product-wrapper">
                <Row className="single-product-row">

                  {/* Coupon and deals column */}
                  <Col xs="12" sm="12" md="12" lg="8" xl="8">
                    <SingleProductDetail
                      product={this.state.product}
                      onTouchTap={() =>
                        this.props.handleOpenModal(this.state.product)}
                    />
                    <ShareButtons banner={this.state.product} />
                    <div className="single-product-hide-columns">
                      <SinglePageCarousel
                        banners={this.state.relatedProducts}
                      />
                    </div>
                  </Col>

                   {/* Side column with trending deals. coupon and stores */}
                  <Col xs="12" sm="12" md="12" lg="4" xl="4">
                    <div className="single-product-hide-columns">
                      <Coupon />
                      <Deal />
                      <Stores />
                    </div>
                  </Col>

                </Row>
              </div>
            </div>
          : <div />}
      </Container>
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
