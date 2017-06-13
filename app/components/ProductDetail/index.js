import React from 'react';
import PropTypes from 'prop-types';
import YesNoBtn from 'components/YesNoBtn';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
// import Image from 'react-bootstrap/lib/Image';
import {Image, Transformation} from 'cloudinary-react'
import Panel from 'react-bootstrap/lib/Panel';
import Topper from 'components/Topper';
import shortid from 'shortid';

class ProductDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel className="merchant-panel" header={<Topper />}>
        <div
          className="merchant-panel-header"
          dangerouslySetInnerHTML={{ __html: this.props.product.name }}
        />
        <Row style={{ marginLeft: 0, marginRight: 0 }} className="merchant-panel-body">
          <div className="merchant-panel-body-image">
            <Image publicId={this.props.product.public_id}>
                <Transformation width="200" crop="scale"  height="200" dpr="auto" />
            </Image>
          </div>
          <div className="merchant-panel-body-description"
          dangerouslySetInnerHTML={{ __html: this.props.product.features }}
          />
        </Row>
        <Row style={{ marginLeft: 0, marginRight: 0 }} className="merchant-info">
          <Col xsPush={4} xs={8} mdPush={4} md={8}>
            <div className="merchant-info-percentage">
              <p>
                <span className="percentage">{`${this.props.product.percentage}% Off `}</span>
                <span>{this.props.product.isShipped}</span>
               </p>
            </div>
            <div className="merchant-info-btn">
              <YesNoBtn
                isCoupon
                onTouchTap={this.props.onTouchTap}
                backlink={this .props.product.backlink}
                />
            </div>
          </Col>
        </Row>
        <Row style={{ margin: 0 }} className="merchant-footer">
          <Col xsPush={4} xs={8} mdPush={4} md={8}>
            <p>
              { `From ${this.props.product.merchant.title} in ${this.props.product.category.name} Components` }
            </p>
          </Col>
        </Row>
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
