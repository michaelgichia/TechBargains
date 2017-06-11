import React from 'react';
import PropTypes from 'prop-types';
import YesNoBtn from 'components/YesNoBtn';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Topper from 'components/Topper';
import shortid from 'shortid';

class ProductDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel className="merchant-panel" header={<Topper />}>
        <div
          className="mango"
          dangerouslySetInnerHTML={{ __html: this.props.product.name }}
        />
        <Row>
          <Col xsPush={4} xs={4} mdPush={1} md={4}>
            <div className="imagi-div">
              <img alt="dealsexp" src={this.props.product.image} />
            </div>
          </Col>
          <Col className="description-div" xs={12} md={8}>
            <Row style={{ margin: '15px -10px' }}>
              <Col>
                <div
                  className="title-div"
                  dangerouslySetInnerHTML={{ __html: this.props.product.description }}
                >
                </div>
              </Col>
            </Row>
            <Row style={{ margin: '0 20px 0 30px' }}>
              <Col xsHidden smHidden>
                <div className="detail-div">
                  <ul>
                    {
                      this.props
                      .product
                      .features
                      .splice(0, 5)
                      .map((detail) => (
                        <li key={shortid.generate()}>
                          <div dangerouslySetInnerHTML={{ __html: this.props.product.detail }} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </Col>
            </Row>
            <Row style={{ margin: '15px 10px' }}>
              <Col xs={4} sm={6} md={6} lg={6}>
                <div className="third-div-percentage">
                  <p>{ `${this.props.product.percentage}% Off` }</p>
                  <h6> { this.props.product.isShipped ? '+ free shipping' : '' }</h6>
                </div>
              </Col>
              <Col style={{ margin: 'auto 0px' }} xs={8} sm={6} md={6} lg={6}>
                <YesNoBtn isCoupon onTouchTap={this.props.onTouchTap} />
              </Col>
            </Row>
            <Row style={{ margin: '0px 10px' }} className="third-div-footer">
              <p>
                { `From ${this.props.product.merchant} in ${this.props.product.category} Components` }
              </p>
            </Row>
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
