/**
*
* CategoryInfo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


class CategoryInfo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="category-info">
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}

CategoryInfo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryInfo;
