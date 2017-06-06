import Paper from 'material-ui/Paper';
import React from 'react';
import SecondDiv from 'components/SecondDiv';
import Topper from 'components/Topper';
import FirstDiv from 'components/FirstDiv';
import ThirdDiv from 'components/ThirdDiv';
import PropTypes from 'prop-types';

class ProductDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Paper className="section-div">
        <Topper
          product={this.props.product}
        />

        <FirstDiv 
          product={this.props.product}
        />
        <SecondDiv
          product={this.props.product}
        />
        <ThirdDiv
          product={this.props.product}
          handleOpen={this.props.handleOpen}
        />
      </Paper>
    );

  }
}

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

ProductDetail.defaultProps = {
};

export default ProductDetail;
