import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import YesNoBtn from "components/YesNoBtn";
import Row from "react-bootstrap/lib/Row";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import { Image, Transformation } from "cloudinary-react";
import Panel from "react-bootstrap/lib/Panel";
import "!!style-loader!css-loader!./style.css";

class SingleProductDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  timeConversion = expire => {
    const millisec = expire - new Date().getTime();
    const seconds = (millisec / 1000).toFixed(1);
    const minutes = (millisec / (1000 * 60)).toFixed(1);
    const hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
      return seconds + " SEC";
    } else if (minutes < 60) {
      return minutes + " MIN";
    } else if (hours < 24) {
      return hours + " HRS";
    } else {
      return days + " DAYS";
    }
  };

  render() {
    return (
      <Panel
        className="merchant-panel"
        header={
          <div className="topper">
            {`EXPIRE: ${this.timeConversion(this.props.product.expire)}`}
          </div>
        }
      >
        <div>
          <div
            className="merchant-panel-header"
            dangerouslySetInnerHTML={{ __html: this.props.product.name }}
          />
        </div>
        <Grid fluid>

          <Row>

            <div className="product-detail-image">
              <Col xs={4} sm={4} md={4} lg={4}>
                <div className="product-detail-image-image">
                  <Image publicId={this.props.product.public_id}>
                    <Transformation
                      width="200"
                      crop="scale"
                      height="200"
                      dpr="auto"
                    />
                  </Image>
                </div>
              </Col>
            </div>
            <Col
              className="product-detail-features"
              xs={8}
              sm={8}
              md={8}
              lg={8}
            >
              <div className="price-body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.product.features
                  }}
                />
                <div className="price">
                  <div className="price-wrapper">
                    <p>
                      <span className="price-first-span">
                        {this.props.product.percentage}
                      </span>
                      <span className="price-second-span">
                        {this.props.product.isShipped}
                      </span>
                    </p>
                  </div>
                  <YesNoBtn
                    isCoupon={this.props.product.isCoupon}
                    onTouchTap={this.props.onTouchTap}
                    backlink={this.props.product.backlink}
                  />
                  <div className="bottom-wrapper">
                    <p>
                      From{" "}
                      <Link
                        style={{
                          color: "#b0b0b0",
                          textDecoration: "underline"
                        }}
                      >
                        {this.props.product.merchant.title}
                      </Link>{" "}
                      in{" "}
                      <Link
                        style={{
                          color: "#b0b0b0",
                          textDecoration: "underline"
                        }}
                      >
                        {this.props.product.category.name}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

            </Col>

          </Row>

        </Grid>

      </Panel>
    );
  }
}

SingleProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onTouchTap: PropTypes.func.isRequired
};

SingleProductDetail.defaultProps = {};

export default SingleProductDetail;
