/*
 *
 * CategoryFrontPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectCategoryFrontPage from './selectors';

export class CategoryFrontPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        CategoryFrontPage
      </div>
    );
  }
}

CategoryFrontPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CategoryFrontPage: makeSelectCategoryFrontPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFrontPage);
