/*
 *
 * SingleProduct
 *
 */

import Headers from "components/Headers";
import React from "react";

import { Container, Row, Col } from 'reactstrap';
import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import SingleProductDetail from "components/SingleProductDetail";
import SinglePageCarousel from "components/SinglePageCarousel";
import CategoryInfo from "components/CategoryInfo";
import ShareButtons from "components/ShareButtons";

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

  filterCurrentProduct = relatedProducts =>
    relatedProducts.filter(
      prod => this.state.product._id.toString() !== prod._id.toString()
    );

  render() {
    return (
      <div>
        <Headers product={this.state.product} />
        <Container fluid className="show-grid">

          <Row className="show-info-grid">
            {Object.keys(this.state.product).length > 0
              ? <CategoryInfo title={this.props.product.name} />
              : <div />}
          </Row>

          <Row className="show-info-grid">
            <Col xs="12" sm="12" md="8" lg="8">
              <Row className="show-info-wrapper">
                {Object.keys(this.state.product).length > 0
                  ? <CloudinaryContext cloudName="dw3arrxnf">
                      <SingleProductDetail
                        product={this.state.product}
                        onTouchTap={() =>
                          this.props.handleOpenModal(this.state.product)}
                      />
                      <Row>
                        <ShareButtons banner={this.state.product} />
                      </Row>
                    </CloudinaryContext>
                  : <div>Loading...</div>}
              </Row>

              <Row className="bottom-related-product">
                <Col xsHidden smHidden md="12" lg="12">
                  <SinglePageCarousel
                    banners={this.filterCurrentProduct(
                      this.state.relatedProducts
                    )}
                  />
                </Col>
              </Row>
            </Col>

            <Col md="4" lg="4">
              <Coupon />
              <Deal />
              <Stores />
            </Col>
          </Row>
        </Container>
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
