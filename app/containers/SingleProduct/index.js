/*
 *
 * SingleProduct
 *
 */

import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import Headers from "components/Headers";
import SingleProductDetail from "components/SingleProductDetail";
import SinglePageCarousel from "components/SinglePageCarousel";
import CouponHeader from "components/CouponHeader";
import CategoryInfo from "components/CategoryInfo";

import { connect } from "react-redux";
import { CloudinaryContext } from "cloudinary-react";


import { handleOpenModal } from "containers/ReactModal/actions";
import "!!style-loader!css-loader!./style.css";
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
      <div>
        <Headers product={this.state.product} />
        <Grid fluid className="show-grid">

          <Row className="show-info-grid">
            {
              Object.keys(this.state.product).length > 0
              ? <CategoryInfo title={this.props.product.name} />
              
              : <div />
            }
          </Row>

          <Row className="show-info-grid">
            <Col xs={12} sm={12} md={8} lg={8}>
              <Row>
                {
                  Object.keys(this.state.product).length > 0
                  ? <CloudinaryContext cloudName="dw3arrxnf">
                      <SingleProductDetail
                        product={this.state.product}
                        onTouchTap={() => this.props.handleOpenModal(product)}
                      />
                    </CloudinaryContext>

                  : <div>Loading...</div>
                }
              </Row>

              <Row className="bottom-related-product">
                <Col xsHidden smHidden md={12} lg={12}>
                  <CouponHeader title="Related Products" />
                  <SinglePageCarousel banners={this.state.relatedProducts} />
                </Col>
              </Row>
            </Col>

            <Col xsHidden smHidden md={4} lg={4}>
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
