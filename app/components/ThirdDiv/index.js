/**
*
* ThirdDiv
*
*/

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class ThirdDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="description-div">
        <div
          className="title-div"
          style={{ backgroundColor: this.props.product.themeColor }}
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        />
        <div className="detail-div">
          <ul>
            {
              this.props
              .product
              .features
              .splice(0, 5)
              .map((detail) => (
                <li key={shortid.generate()}>
                  <div dangerouslySetInnerHTML={{ __html: detail }}/>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="buyer-div">
          <button
            onClick={() => this.props.handleOpen(this.props.product.id)}
            className="deal-button"
            style={{
              ...{
                borderColor: this.props.product.themeColor,
                color: this.props.product.themeColor
              },
            }}
          >
            SEE DEAL
          </button>
        </div>
      </div>
    );
  }
}

ThirdDiv.propTypes = {
  // description: PropTypes.any.isRequired,
  // product: PropTypes.any.isRequired,
  // features: PropTypes.any.isRequired,
  // id: PropTypes.any.isRequired,
};

ThirdDiv.defaultProps = {
  themeColor: "rgb(255, 132, 0)",
}

export default ThirdDiv;
