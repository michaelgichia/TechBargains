/*
 *
 * BannerEdit
 *
 */

import React, { PropTypes } from 'react';
import BannerForm from 'components/BannerForm';
import PaperLite from 'components/PaperLite';
import { browserHistory } from 'react-router';
import axios from 'axios';
import validator from 'validator';
import { connect } from 'react-redux';
import Auth from '../Utils';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;


export class BannerEdit extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  state = {
    item: {
      title: '',
      imageUrl: '',
      backlink: '',
    },
    isFeatured: false,
    titleError: '',
    imageUrlError: '',
    backlinkError: '',
    errors: '',
    message: '',
    bannerId: ''
  }; // eslint-disable-line

  componentDidMount() {
    const bannerId = this.props.params.bannerId;
    this.setState({ bannerId });

    axios.get(`/public-api/banner/${bannerId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ item: { ...response.data.result }, isFeatured: response.data.result.isFeatured});
      } else {
        this.setState({ errors: response.data.message });
        console.error(response.data);
      }
    });
  }

 /**
   * Update the state from user input.
   * Clear error using dynamic keys on the setState.
  */
  handleChange = (e) => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = '';
    // Create a current error object.
    errorObject[errorName] = errorValue;
    // Reset clear from the current field.
    this.setState(errorObject);
    const updateItem = { ...this.state.item };
    updateItem[e.target.id] = e.target.value;
    this.setState({ item: updateItem });
  };

  handleToggle = (e, isInputChecked) => this.setState({ isFeatured: isInputChecked });

  postBanner = () => {
    const updateBanner = Object.assign(
      this.state.item,
      { isFeatured: this.state.isFeatured }
    );
    axios.put(`/api/banner/update/${this.state.bannerId}`, updateBanner)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        browserHistory.push(`/dashboard/banner/${response.data.result.id}`);
      } else {
        this.setState({ errors: response.data.message });
        console.log('error', response.data.message);
      }
    })
    .catch((errors) => {
      this.setState({ errors });
    });
  };

  handleSubmit = () => {
    if (validator.isEmpty(this.state.item.title)) {
      this.setState({ titleError: 'Title is required!' });
    }
    if (validator.isEmpty(this.state.item.imageUrl)) {
      this.setState({ imageUrlError: 'ImageUrl is required!' });
    }
    if (validator.isEmpty(this.state.item.backlink)) {
      this.setState({ backlinkError: 'Backlink is required!' });
    } else {
      this.postBanner();
    }
  };

  render() {
    const {
      title,
      imageUrl,
      backlink,
    } = this.state.item;
    const { 
      isFeatured,
      imageUrlError,
      titleError,
      backlinkError,
      errors,
      message,
    } = this.state;
    return (
      <PaperLite>
        <BannerForm
          title={title}
          imageUrl={imageUrl}
          backlink={backlink}
          titleError={titleError}
          imageUrlError={imageUrlError}
          backlinkError={backlinkError}
          onClick={this.handleSubmit}
          onChange={this.handleChange}
          errors={errors}
          message={message}
          onToggle={this.handleToggle}
          toggled={isFeatured}
          formTitle="Update A Banner"
        />
      </PaperLite>
    );
  }
}

BannerEdit.propTypes = {
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BannerEdit);
