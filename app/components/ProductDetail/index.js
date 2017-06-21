import React from 'react';
import PropTypes from 'prop-types';
import YesNoBtn from 'components/YesNoBtn';
import Row from 'react-bootstrap/lib/Row';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import { Image, Transformation } from 'cloudinary-react'
import Panel from 'react-bootstrap/lib/Panel';
import shortid from 'shortid';
import "!!style-loader!css-loader!./style.css";


class ProductDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
 
 timeConversion = (expire) => {
    const millisec = expire - new Date().getTime();
    const seconds = (millisec / 1000).toFixed(1);
    const minutes = (millisec / (1000 * 60)).toFixed(1);
    const hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
      return seconds + " Sec";
    } else if (minutes < 60) {
      return minutes + " Min";
    } else if (hours < 24) {
      return hours + " Hrs";
    } else {
      return days + " Days"
    }
  };

  render() {
    return (
      <Panel
        className="merchant-panel"
        header={
          <div className="topper">
            <p>{`Expire: ${this.timeConversion(this.props.product.expire)}`}</p>
          </div>
        }
      >
        <div
          className="merchant-panel-header"
          dangerouslySetInnerHTML={{ __html: this.props.product.name }}
        />
        <Grid fluid>

          <Row>

            <div className="product-detail-image">
              <Col
                xs={4}
                sm={4}
                md={4}
                lg={4}
              > 
                <div className="product-detail-image-image">
                  <Image publicId={this.props.product.public_id} >
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
              <div className="line-clamp-wrapper">
                <div
                  className="line-clamp"
                  dangerouslySetInnerHTML={{ __html: this.props.product.features }}
                />
                <div>
              </div>
                <p>
                  <span>{`${this.props.product.percentage}% Off `}</span>
                  <span>{this.props.product.isShipped}</span>
                 </p>
              </div>
              <div>
                <YesNoBtn
                  isCoupon={this .props.product.isCoupon}
                  onTouchTap={this.props.onTouchTap}
                  backlink={this .props.product.backlink}
                  />
              </div>
              <p>
                { `From ${this.props.product.merchant.title} in ${this.props.product.category.name} Category` }
              </p>
            </Col>

          </Row>
          
        </Grid>

      </Panel>
    );
  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onTouchTap: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
};

export default ProductDetail;