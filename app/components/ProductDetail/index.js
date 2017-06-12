import React from 'react';
import PropTypes from 'prop-types';
import YesNoBtn from 'components/YesNoBtn';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
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
        <div className="merchant-panel-body">
          <div className="merchant-panel-body-image">
            <Image src={this.props.product.image} responsive />
          </div>
          <div className="merchant-panel-body-description"
          dangerouslySetInnerHTML={{ __html: this.props.product.features }}
          />
        </div>
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
