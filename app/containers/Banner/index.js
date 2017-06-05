/*
 *
 * Banner
 *
 */

import React, { PropTypes } from 'react';
import BannerTable from 'components/BannerTable';
import { connect } from 'react-redux';
import { deleteBanner } from './actions';


export class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    banners: [],
  }

  handleRowSelection = (selectedRows) => {
    const bannerId = this.state.banners[selectedRows].id;
    this.props.deleteBanner(bannerId);
  };

  render() {
    return (
      <BannerTable
        handleRowSelection={this.handleRowSelection}
        banners={this.state.banners}
      />
    );
  }
}

Banner.propTypes = {
};


const mapStateToProps = ({ banner }) => ({
  banner,
});

const mapDispatchToProps = (dispatch) => ({
  deleteBanner: (id) => dispatch(deleteBanner(id)),
});

export default connect(null, mapDispatchToProps)(Banner);
