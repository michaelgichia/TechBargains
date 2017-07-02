/*
 *
 * MerchantPages
 *
 */

import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { CloudinaryContext } from "cloudinary-react";
import MerchantInfo from "components/MerchantInfo";
import MerchantProfile from "components/MerchantProfile";
import MerchantCoupon from "components/MerchantCoupon";
import CouponHeader from "components/CouponHeader";
import ProductDetail from "components/ProductDetail";
import Disclaimer from "components/Disclaimer";
import shortid from "shortid";
import { connect } from "react-redux";
import { handleOpenModal } from "containers/ReactModal/actions";

import {
  fetchMerchandize,
  fetchSpecificCoupons,
  fetchStoreInfo,
  fetchLatestStore
} from "./actions";

import "!!style-loader!css-loader!./merchant-page.css";

export class MerchantPages extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    merchandize: [],
    coupons: [],
    info: [],
    latestStores: [],
    open: false,
    errors: []
  };

  componentDidMount() {
    const { storeId } = this.props.params;
    this.props.fetchMerchandize(storeId);
    this.props.fetchSpecificCoupons(storeId);
    this.props.fetchStoreInfo(storeId);
    this.props.fetchLatestStore();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.merchandize !== this.state.merchandize) {
      this.setState(() => ({
        merchandize: nextProps.merchandize
      }));
    }
    if (nextProps.coupons !== this.state.coupons) {
      this.setState(() => ({ coupons: nextProps.coupons }));
    }
    if (nextProps.latestStores !== this.state.latestStores) {
      this.setState(() => ({ latestStores: nextProps.latestStores }));
    }
    if (nextProps.info !== this.state.info) {
      this.setState(() => ({ info: nextProps.info }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState(() => ({ errors: nextProps.errors }));
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div style={{marginTop: 70}}>
        <MerchantInfo info={this.state.info} />
        <div className="merchant-page-product-grid">
          <Row>
            <Col id="merchant-first-wrapper" xs="12" sm="12" md="12" lg="8">
              {this.state.coupons !== null && this.state.coupons.length > 0
                ? <ul className="merchant-page-header">
                    <li>
                      <h2>{`${this.state.info.title} Coupons`}</h2>
                    </li>
                  </ul>
                : <div />}
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
              {this.state.merchandize !== null &&
              this.state.merchandize.length > 0
                ? <ul className="merchant-page-header">
                    <li>
                      <h2>{`${this.state.info.title} Deals`}</h2>
                    </li>
                  </ul>
                : <div />}
              <CloudinaryContext cloudName="dw3arrxnf">
                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                    marginTop: 20
                  }}
                >
                  {this.state.merchandize.map(product =>
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
            </Col>
            <Col id="merchant-second-wrapper" style={{backgroundColor: "#f1f1f1"}} xs="12" sm="12" md="12" lg="4">
              {Object.keys(this.state.info).length > 0
                ? <section className="merchant-profile">
                    <ul className="merchant-page-header">
                      <li>
                        <h2>{`About ${this.state.info.title}`}</h2>
                      </li>
                    </ul>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.info.about
                      }}
                    />
                  </section>
                : <div />}
              <Disclaimer />
              <ul className="merchant-page-header">
                <li>
                  <h2>DISCOVER NEW STORES</h2>
                </li>
              </ul>
              <ul className="latest-stores">
                {this.state.latestStores.map(store =>
                  <li key={shortid.generate()}>
                    <a
                      href={`/merchant/${store._id.toString()}`}
                      target="_self"
                    >
                      {store.title}
                    </a>
                  </li>
                )}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

MerchantPages.propTypes = {};

const mapStateToProps = ({ merchantPages }) => ({
  merchandize: merchantPages.merchandize,
  coupons: merchantPages.coupons,
  latestStores: merchantPages.latestStores,
  errors: merchantPages.errors,
  info: merchantPages.info
});

const mapDispatchToProps = dispatch => ({
  fetchMerchandize: storeId => dispatch(fetchMerchandize(storeId)),
  fetchSpecificCoupons: couponId => dispatch(fetchSpecificCoupons(couponId)),
  fetchStoreInfo: merchantId => dispatch(fetchStoreInfo(merchantId)),
  handleOpenModal: product => dispatch(handleOpenModal(product)),
  fetchLatestStore: () => dispatch(fetchLatestStore())
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantPages);
