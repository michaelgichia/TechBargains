/*
 *
 * MerchantEdit
 *
 */

import React from "react";
import StoreForm from "components/StoreForm";
import validator from "validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import sha1 from "sha1";
import superagent from "superagent";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

import axios from "axios";
// Material-ui
import Paper from "material-ui/Paper";
import Auth from "../Utils";
import { postMerchant, fetchMerchant } from "./actions";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class MerchantEdit extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    merchant: {
      title: "",
      description: "",
      imageUrl: "",
      public_id: "",
      backlink: ""
    },
    isFeatured: false,
    about: "",
    titleError: "",
    descriptionError: "",
    errors: [],
    merchantId: null
  };

  componentDidMount() {
    const { merchantId } = this.props.params;
    this.props.fetchMerchant(merchantId);
    this.setState({ merchantId });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.merchant !== this.state.merchant) {
      this.setState(() => ({ merchant: nextProps.merchant }));
    }
    if (nextProps.isFeatured !== this.state.isFeatured) {
      this.setState(() => ({ isFeatured: nextProps.isFeatured }));
    }
    if (nextProps.about !== this.state.about) {
      this.setState(() => ({ about: nextProps.about }));
    }
  }

  /**
   * Reset the state after succeful saving of the store to the db.
  */
  resetState = () => {
    const updatedStore = { ...this.state.merchant };
    updatedStore.title = "";
    updatedStore.description = "";
    this.setState({ merchant: updatedStore });
  };

  handleUpload = files => {
    console.info("uploading file....");
    const updateMerchant = { ...this.state.merchant };
    const image = files[0];
    const cloudName = "dw3arrxnf";
    const timestamp = Date.now() / 1000;
    const uploadPreset = "d9s7ezzn";
    const paramsStr =
      "timestamp=" +
      timestamp +
      "&upload_preset=" +
      uploadPreset +
      "wEvwDjpdDR5I_mMSdD55EaLNXOI";
    const signature = sha1(paramsStr);
    const url =
      "https://api.cloudinary.com/v1_1/" + cloudName + "/image/upload";
    const params = {
      api_key: "217319541859423",
      timestamp: timestamp,
      upload_preset: uploadPreset,
      signature: signature
    };
    updateMerchant.imageUrl = "uploading image...";
    this.setState((prevState, props) => ({ merchant: updateMerchant }));
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
      const newImage = { ...this.state.merchant };
      newImage.imageUrl = resp.body.secure_url;
      newImage.public_id = resp.body.public_id;
      this.setState((prevState, props) => ({ merchant: newImage }));
    });
  };

  /**
   * Handle error.
  */
  handelError = e => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = "";
    errorObject[errorName] = errorValue;
    this.setState(errorObject);
  };

  /**
   * Update the state from user input.
  */
  handleChange = e => {
    this.handelError(e);
    const updatedStore = { ...this.state.merchant };
    updatedStore[e.target.id] = e.target.value;
    this.setState({ merchant: updatedStore });
  };

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => {
    this.setState({ isFeatured: value });
  };

  handleAbout = about => this.setState({ about });

  updateMerchant = merchant => {
    const { merchantId } = this.state;
    this.props.postMerchant(merchantId, merchant);
  };

  /**
   * Validate user input and save to the db.
  */
  handleSubmit = () => {
    const { title, description } = this.state.merchant;

    if (validator.isEmpty(title)) {
      this.setState({ titleError: "Title is required!" });
    }
    if (validator.isEmpty(description)) {
      this.setState({ descriptionError: "Description is required!" });
    } else {
      const merchant = {
        ...this.state.merchant,
        isFeatured: this.state.isFeatured,
        about: this.state.about
      };
      this.updateMerchant(merchant);
      this.resetState();
    }
  };

  render() {
    const {
      titleError,
      descriptionError,
      errors,
      isFeatured,
      about
    } = this.state;
    const { title, description, imageUrl, backlink } = this.state.merchant;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Paper zDepth={5} rounded={false} style={gems6.paper}>
              <StoreForm
                onChange={this.handleChange}
                onClick={this.handleSubmit}
                titleError={titleError}
                descriptionError={descriptionError}
                title={title}
                description={description}
                errors={errors}
                header="Edit merchant"
                imageUrl={imageUrl}
                toggled={isFeatured}
                about={about}
                onAboutChange={this.handleAbout}
                onFeaturedChange={this.handleIsFeatured}
                onDropChange={this.handleUpload}
                backlink={backlink}
              />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

MerchantEdit.propTypes = {};

const mapStateToProps = ({ merchantEdit }) => ({
  merchant: merchantEdit.merchant,
  isFeatured: merchantEdit.isFeatured,
  about: merchantEdit.about
});

const mapDispatchToProps = dispatch => ({
  postMerchant: (merchantId, merchant) =>
    dispatch(postMerchant(merchantId, merchant)),
  fetchMerchant: merchantId => dispatch(fetchMerchant(merchantId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantEdit);

//Styles
const gems6 = {
  paper: {
    padding: 30,
    marginTop: 30
  }
};
