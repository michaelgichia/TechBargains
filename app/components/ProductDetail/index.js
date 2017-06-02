import Paper from 'material-ui/Paper';
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ProductDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Paper className="section-div">
        <div className="potato" style={{ backgroundColor: this.props.product.themeColor }}></div>
        <Paper className="first-div">
          <img
            alt="dealsexp"
            className="imagi-div"
            src={this.props.product.image}
          />
        </Paper>
        <Paper className="second-div">
          <div
            className="header-div mango"
            dangerouslySetInnerHTML={{__html: this.props.product.name}}
          />
          <div
            className="title-div"
            style={{ backgroundColor: this.props.product.themeColor }}
            dangerouslySetInnerHTML={{__html: this.props.product.description}}
          />
          <div className="detail-div">
            <ul>
              {
                this.props.product.features.splice(0, 5).map((detail) => (
                  <li key={shortid.generate()}><div dangerouslySetInnerHTML={{__html: detail}}/></li>
                ))
              }
            </ul>
          </div>
          <div className="buyerdiv">
            <button
              onClick={() => this.props.handleOpen(this.props.product.id)}
              className="deal-button"
              style={{
                ...{ borderColor: this.props.product.themeColor, color: this.props.product.themeColor },
              }}
            >
              SEE DEAL
            </button>
          </div>
        </Paper>
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
