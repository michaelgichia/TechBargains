/*
 *
 * CategoryFrontPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


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

const mapStateToProps = ({ category }) => ({
  category
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFrontPage);
