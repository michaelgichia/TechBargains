import Paper from 'material-ui/Paper';
import React from 'react';
import SectionDiv from 'components/SectionDiv';
import SecondDiv from 'components/SecondDiv';
import Topper from 'components/Topper';
import BorderTop from 'components/BorderTop';
import FirstDiv from 'components/FirstDiv';
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
          handleOpen={this.props.handleOpen}
          product={this.props.product}
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
  themeColor: '#C3D6E4',
};

export default ProductDetail;
