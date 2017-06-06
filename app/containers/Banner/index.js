/*
 *
 * Banner
 *
 */

import React from 'react';
import BannerTable from 'components/BannerTable';
import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    banners: [],
  }

  componentWillMount() {
    axios.get('/public-api/banner')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ banners: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.message });
        console.error(response.data);
      }
    });
  }

  handleRowSelection = (selectedRows) => {
    const bannerId = this.state.banners[selectedRows].id;
    browserHistory.push(`/dashboard/banner/${bannerId}`);
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

export default Banner;