/*
 *
 * CategoryFrontPage
 *
 */

import React, { PropTypes } from "react";
import ProductDetail from "components/ProductDetail";
import CouponHeader from "components/CouponHeader";
import MerchantCoupon from "components/MerchantCoupon";
import CategoryProfile from "components/CategoryProfile";
import CategoryInfo from "components/CategoryInfo";
import shortid from "shortid";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { connect } from "react-redux";
import { CloudinaryContext } from "cloudinary-react";
import { handleOpenModal } from "containers/ReactModal/actions";
import {
  fetchCategoryInfo,
  fetchCategoryDeals,
  fetchCategoryCoupons,
  fetchFeaturedCategoryStores
} from "./actions";

export class CategoryFrontPage extends React.Component {

  state = {
    deals: [],
    coupons: [],
    featuredCategoryStores: [],
    info: {
      title: "",
      about: ""
    },
    errors: ""
  };

  componentDidMount() {
    const { categoryId } = this.props.params;
    this.props.fetchCategoryDeals(categoryId);
    this.props.fetchCategoryCoupons(categoryId);
    this.props.fetchCategoryInfo(categoryId);
    this.props.fetchFeaturedCategoryStores(categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deals !== this.state.deals) {
      this.setState((prevState, props) => ({ deals: nextProps.deals }));
    }
    if (nextProps.coupons !== this.state.coupons) {
      this.setState((prevState, props) => ({ coupons: nextProps.coupons }));
    }
    if (
      nextProps.featuredCategoryStores !== this.state.featuredCategoryStores
    ) {
      this.setState((prevState, props) => ({
        featuredCategoryStores: nextProps.featuredCategoryStores
      }));
    }
    if (nextProps.info !== this.state.info) {
      const updatedInfo = { ...this.state.info };
      updatedInfo.title = nextProps.info.title;
      updatedInfo.about = nextProps.info.description;
      this.setState((prevState, props) => ({ info: updatedInfo }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => ({ errors: nextProps.errors }));
    }
  }

  render() {
    console.log({Stores: this.state.featuredCategoryStores})
    return (
      <Grid fluid className="show-grid">
        <Row className="show-info-grid">
          <CategoryInfo title={`${this.state.info.title} ${"  "} Deals`} />
        </Row>
        <div className="show-product-grid">
          <Row className="show-dealss-grid">
            <Col id="merchant-id" xs={12} sm={12} md={12} lg={8}>
              <CloudinaryContext cloudName="dw3arrxnf">
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                    marginTop: 20
                  }}
                >
                  {this.state.deals.map(product =>
                    <li
                      key={shortid.generate()}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <ProductDetail
                        product={product}
                        onTouchTap={() => this.props.handleOpenModal(product)}
                      />
                    </li>
                  )}
                </ul>
              </CloudinaryContext>
              <div>
                <CouponHeader title={`${this.state.info.title} ${"  "} Coupons`} />
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {this.state.coupons.map(coupon =>
                    <li key={shortid.generate()}>
                      <MerchantCoupon
                        coupon={coupon}
                        onTouchTap={() => this.props.handleOpenModal(coupon)}
                      />
                    </li>
                  )}
                </ul>
              </div>
            </Col>
            <CategoryProfile info={this.state.info} />
          </Row>
        </div>
      </Grid>
    );
  }
}

CategoryFrontPage.propTypes = {};

const mapStateToProps = ({ categoryFront }) => ({
  deals: categoryFront.deals,
  coupons: categoryFront.coupons,
  featuredCategoryStores: categoryFront.featuredCategoryStores,
  info: categoryFront.info,
  errors: categoryFront.errors
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryDeals: categoryId => dispatch(fetchCategoryDeals(categoryId)),
  fetchCategoryCoupons: categoryId =>
    dispatch(fetchCategoryCoupons(categoryId)),
  fetchCategoryInfo: categoryId => dispatch(fetchCategoryInfo(categoryId)),
  fetchFeaturedCategoryStores: categoryId => dispatch(fetchFeaturedCategoryStores(categoryId)),
  handleOpenModal: product => dispatch(handleOpenModal(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFrontPage);
