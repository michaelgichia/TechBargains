/*
 *
 * ProductDetail
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import YesNoBtn from "components/YesNoBtn";
import { Image } from "cloudinary-react";
import Panel from "components/Panel";
import { timeConversion } from "utils/milliSecondsConverter";
import "!!style-loader!css-loader!./product-detail.css";
import { Row, Col } from "reactstrap";


class ProductDetail extends React.Component {
  render() {
    const { product, onTouchTap } = this.props;
    return (
      <Panel headerElement={<PanelHeader product={product} />}>
        <div className="product-detail-row">
          <Row>
            <PanelHeaderTitle product={product} />
          </Row>
        </div>
        <div>
          <Row className="product-detail-body-row">
            <CustomCol xxs="12" xs="12" sm="4" md="4" lg="4" xl="4" xxl="2">
              <PanelImage product={product} />
            </CustomCol>
            <CustomCol xxs="12" xs="12" sm="8" md="8" lg="8" xl="8" xxl="4">
              <PanelFeatures product={product} />
              <PanelReadMore product={product} />
              <PanelPriceWrapper product={product} />
              <YesNoBtn
                isCoupon={product.isCoupon}
                onTouchTap={onTouchTap}
                backlink={product.backlink}
              />
              <PanelBottomInfo product={product} />
            </CustomCol>
          </Row>
        </div>
      </Panel>
    );
  }
}

// ProductDetail.propTypes = {
//   product: PropTypes.object.isRequired,
//   onTouchTap: PropTypes.func.isRequired
// };

// ProductDetail.defaultProps = {};

export default ProductDetail;


// Components
const PanelHeader = ({ product }) =>
  <span className="product-detail-flag-info">
    {`EXPIRE: ${timeConversion(product.expire)}`}
  </span>;

const PanelHeaderTitle = ({ product }) =>
  <h2 className="product-detail-panel-header">
    <Link to={`/product/${product.id}`}>
      {product.name}
    </Link>
  </h2>;

const PanelImage = ({ product }) =>
  <div className="product-detail-image">
    <a href={product.backlink} target="_blank">
      <Image
        cloudName="dw3arrxnf"
        publicId={product.public_id}
        crop="scale"
        width="200"
        height="200"
        responsive
      />
    </a>
  </div>;

const PanelBottomInfo = ({ product }) =>
  <ul className="product-detail-bottom-wrapper">
    <li>
      <span className="product-detail-no-break">
        From  {" "}
        <a href={`/merchant/${product.merchant._id.toString()}`}>
          {product.merchant !== null ? product.merchant.title : ""}
        </a>
      </span>
      <span className="product-detail-no-break">
        {" "} in  {" "}
        <a href={`/category/${product.category._id.toString()}`}>
          {product.category.name}
        </a>
      </span>
    </li>
  </ul>;

const PanelPriceWrapper = ({ product }) =>
  <div className="product-detail-price">
    <p>
      <span className="product-detail-first">
        {product.percentage}{" "}
      </span>
      <span className="product-detail-second">
        {product.isShipped}
      </span>
    </p>
  </div>;

const PanelReadMore = ({ product }) =>
  <div className="product-detail-more-wrapper">
    <Link to={`/product/${product.id}`}>More Details</Link>
  </div>;

const PanelFeatures = ({ product }) =>
  <div
    className="product-detail-features"
    dangerouslySetInnerHTML={{
      __html: product.features
    }}
  />;

const CustomCol = props =>
  <Col
    className="product-detail-row"
    widths={["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]}
    {...props}
  />;
