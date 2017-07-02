import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import YesNoBtn from "components/YesNoBtn";
import { Image } from "cloudinary-react";
import Panel from "components/Panel";
import { timeConversion } from "utils/milliSecondsConverter";
import "!!style-loader!css-loader!./single-product-detail.css";
import { Row, Col } from "reactstrap";


class ProductDetail extends React.Component {
  render() {
    const { product, onTouchTap } = this.props;
    return (
      <Panel headerElement={<PanelHeader product={product} />}>
        <div className="single-custom-row ">
          <Row>
            <PanelHeaderTitle product={product} />
          </Row>
        </div>
        <div>
          <Row className="single-custom-body-row">
            <CustomCol xxs="12" xs="12" sm="4" md="4" lg="4" xl="4" xxl="2">
              <PanelImage product={product} />
            </CustomCol>
            <CustomCol xxs="12" xs="12" sm="8" md="8" lg="8" xl="8" xxl="4">
              <PanelFeatures product={product} />
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

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onTouchTap: PropTypes.func.isRequired
};

ProductDetail.defaultProps = {};

export default ProductDetail;


// Components
const PanelHeader = ({ product }) =>
  <span className="single-flag-info">
    {`EXPIRE: ${timeConversion(product.expire)}`}
  </span>;

const PanelHeaderTitle = ({ product }) =>
  <h2 className="single-product-header">{product.name}</h2>;

const PanelImage = ({ product }) =>
  <div className="single-product-image">
    <a href={product.backlink} target="_blank">
      <Image
        cloudName="dw3arrxnf"
        publicId={product.public_id}
        crop="scale"
        width="200"
        responsive
      />
    </a>
  </div>;

const PanelBottomInfo = ({ product }) =>
  <ul className="single-bottom-wrapper">
    <li>
      <span className="single-no-break">
        From  {" "}
        <a href={`/merchant/${product.merchant._id.toString()}`}>
          {product.merchant !== null ? product.merchant.title : ""}
        </a>
      </span>
      <span className="single-no-break">
        {" "} in  {" "}
        <a href={`/category/${product.category._id.toString()}`}>
          {product.category.name}
        </a>
      </span>
    </li>
  </ul>;

const PanelPriceWrapper = ({ product }) =>
  <div className="single-price">
    <p>
      <span className="single-first-span">
        {product.percentage}{" "}
      </span>
      <span className="single-second-span">
        {product.isShipped}
      </span>
    </p>
  </div>;

const PanelFeatures = ({ product }) =>
  <div
    className="single-product-features"
    dangerouslySetInnerHTML={{
      __html: product.features
    }}
  />;

const CustomCol = props =>
  <Col
    className="single-custom-column"
    widths={["xxs", "xs", "sm", "md", "lg", "xl", "xxl"]}
    {...props}
  />;
