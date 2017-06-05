/*
 *
 * BannerCreate
 *
 */

import React, { PropTypes } from 'react';
import BannerForm from 'components/BannerForm';
import PaperLite from 'components/PaperLite';
import { connect } from 'react-redux';
import validator from 'validator';
import axios from 'axios';
import Auth from '../Utils';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class BannerCreate extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
  } // eslint-disable-line

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
    axios.post('/api/banner/create', updateBanner)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ message: 'Banner created successfully.' });
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
        />
      </PaperLite>
    );
  }
}

BannerCreate.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BannerCreate);
