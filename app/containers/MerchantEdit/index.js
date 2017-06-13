/*
 *
 * MerchantEdit
 *
 */

import React from 'react';
import StoreForm from 'components/StoreForm';
import validator from 'validator';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import sha1 from 'sha1'
import superagent from 'superagent'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import axios from 'axios';
// Material-ui
import Paper from 'material-ui/Paper';
import Auth from '../Utils';

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

const gems6 = {
  paper: {
    padding: 30,
    marginTop: 30,
  },
};

export class MerchantEdit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    merchant: {
      title: '',
      description: '',
      imageUrl: '',
      public_id: '',

    },
    isFeatured: false,
    about: '',
    titleError: '',
    descriptionError: '',
    errors: [],
    merchantId: null,
  };
  componentDidMount() {
    const { merchantId } = this.props.params;
    this.setState({ merchantId });
    axios.get(`/public-api/merchant/${merchantId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({
          isFeatured: response.data.result.isFeatured,
          about: response.data.result.about,
          merchant: response.data.result,
        });
      } else {
        const newError = [];

        if (typeof response.data.errors === 'string') {
          newError.push(response.data.errors);
        } else if (typeof response.data.message === 'object') {
          newError.push(response.data.message.message);
        } else {
          response.data.errors.map((error) => newError.push(error.msg));
        }
        this.setState({ errors: newError });
      }
    });
  }

  /**
   * Reset the state after succeful saving of the store to the db.
  */
  resetState = () => {
    const updatedStore = { ...this.state.merchant };
    updatedStore.title = '';
    updatedStore.description = '';
    this.setState({ merchant: updatedStore });
  };

  handleUpload = (files) => {
    console.info('uploading file....')
    const updateMerchant = {...this.state.merchant};
    const image = files[0]
    const cloudName = 'dw3arrxnf'
    const timestamp = Date.now()/1000
    const uploadPreset = 'd9s7ezzn'
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'wEvwDjpdDR5I_mMSdD55EaLNXOI'
    const signature = sha1(paramsStr)
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const params = {
      "api_key": "217319541859423",
      "timestamp": timestamp,
      "upload_preset": uploadPreset,
      "signature": signature,
    }
    updateMerchant.imageUrl = 'uploading image...' 
    this.setState((prevState, props) => ({ merchant: updateMerchant }))
    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)
    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        alert(err, null)
        return;
      }
      console.info("uploading completed...");
      const newImage = {...this.state.merchant};
      newImage.imageUrl = resp.body.secure_url;
      newImage.public_id = resp.body.public_id;
      this.setState((prevState, props) => ({ merchant: newImage }))
    })
  }


  /**
   * Handle error.
  */
  handelError = (e) => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = '';
    errorObject[errorName] = errorValue;
    this.setState(errorObject);
  }

  /**
   * Update the state from user input.
  */
  handleChange = (e) => {
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
  
  handleAbout = (about) => this.setState({ about });

  updateMerchant = (merchant) => {
    const { merchantId } = this.state;
    axios.put(`/api/merchant/update/${merchantId}`, merchant)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        browserHistory.push(`/dashboard/merchants/${merchantId}`);
      } else {
        const newError = [];

        if (typeof response.data.message === 'string') {
          newError.push(response.data.message);
        } else if (typeof response.data.message === 'object') {
          newError.push(response.data.message.message);
        } else {
          response.data.errors.map((error, i) => newError.push(error.msg));
        }
        this.setState({ errors: newError });
      }
    })
    .catch((errors) => {
      this.setState({ errors });
    });
  }

  /**
   * Validate user input and save to the db.
  */
  handleSubmit = () => {
    const { title, description } = this.state.merchant;

    if (validator.isEmpty(title)) {
      this.setState({ titleError: 'Title is required!' });
    }
    if (validator.isEmpty(description)) {
      this.setState({ descriptionError: 'Description is required!' });
    } else {
      const merchant = { 
        ...this.state.merchant,
        isFeatured: this.state.isFeatured,
        about: this.state.about,

      };
      this.updateMerchant(merchant);
      this.resetState();
    }
  };

  render() {
    const { titleError, descriptionError, errors, isFeatured, about } = this.state;
    const { title, description, imageUrl } = this.state.merchant;
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
              />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

MerchantEdit.propTypes = {
};

export default MerchantEdit;

