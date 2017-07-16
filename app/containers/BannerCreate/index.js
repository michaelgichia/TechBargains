/*
 *
 * BannerCreate
 *
 */

import React, { PropTypes } from "react";
import BannerForm from "components/BannerForm";
import PaperLite from "components/PaperLite";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import validator from "validator";
import sha1 from "sha1";
import superagent from "superagent";
import axios from "axios";
import Auth from "../Utils";
import { postBanner } from './actions';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class BannerCreate extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    item: {
      title: "",
      imageUrl: "Click or Drop files to upload",
      backlink: "",
      public_id: ""
    },
    isFeatured: false,
    titleError: "",
    imageUrlError: "",
    backlinkError: "",
    errors: "",
    message: ""
  }; // eslint-disable-line

  handleUpload = files => {
    const updatedItem = { ...this.state.item };
    console.info("uploading file....");
    const image = files[0];
    const cloudName = "deals-expert";
    const timestamp = Date.now() / 1000;
    const uploadPreset = "jznf9zii";
    const paramsStr =
      "timestamp=" +
      timestamp +
      "&upload_preset=" +
      uploadPreset +
      "BW5zwfRb1JVXnFQ2i7wxZAKn9-Y";
    const signature = sha1(paramsStr);
    const url =
      "https://api.cloudinary.com/v1_1/" + cloudName + "/image/upload";
    const params = {
      api_key: "125888879194919",
      timestamp: timestamp,
      upload_preset: uploadPreset,
      signature: signature
    };
    updatedItem.imageUrl = "uploading image...";
    this.setState((prevState, props) => ({ item: updatedItem }));
    let uploadRequest = superagent.post(url);
    uploadRequest.attach("file", image);
    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        alert(err, null);
        return;
      }
      console.info("uploading completed...");
      const newImage = { ...this.state.item };
      newImage.imageUrl = resp.body.secure_url;
      newImage.public_id = resp.body.public_id;
      this.setState((prevState, props) => ({ item: newImage }));
    });
  };

  /**
   * Update the state from user input.
   * Clear error using dynamic keys on the setState.
  */
  handleChange = e => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = "";
    // Create a current error object.
    errorObject[errorName] = errorValue;
    // Reset clear from the current field.
    this.setState(errorObject);
    const updateItem = { ...this.state.item };
    updateItem[e.target.id] = e.target.value;
    this.setState({ item: updateItem });
  };

  handleToggle = (e, isInputChecked) =>
    this.setState({ isFeatured: isInputChecked });

  handleSubmit = () => {
    if (validator.isEmpty(this.state.item.title)) {
      this.setState({ titleError: "Title is required!" });
    }
    if (validator.isEmpty(this.state.item.imageUrl)) {
      this.setState({ imageUrlError: "ImageUrl is required!" });
    }
    if (validator.isEmpty(this.state.item.backlink)) {
      this.setState({ backlinkError: "Backlink is required!" });
    } else {
      const updateBanner = Object.assign(this.state.item, {
        isFeatured: this.state.isFeatured
      });
      this.props.postBanner(updateBanner);
    }
  };
  render() {
    const { title, imageUrl, backlink } = this.state.item;
    const {
      isFeatured,
      imageUrlError,
      titleError,
      backlinkError,
      errors,
      message
    } = this.state;
    return (
      <PaperLite>
        <BannerForm
          onDropChange={this.handleUpload}
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
          formTitle="Create A Banner"
        />
      </PaperLite>
    );
  }
}

BannerCreate.propTypes = {
};

const mapDispatchToProps = dispatch => ({
  postBanner: (banner) => dispatch(postBanner(banner)),
});

export default connect(null, mapDispatchToProps)(BannerCreate);
