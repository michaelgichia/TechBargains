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
    },
    isFeatured: false,
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

  handleToggle = (e, isInputChecked) => this.setState({ isFeatured: isInputChecked });

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
      const merchant = { ...this.state.merchant, isFeatured: this.state.isFeatured };
      this.updateMerchant(merchant);
      this.resetState();
    }
  };

  render() {
    const { titleError, descriptionError, errors, isFeatured } = this.state;
    const { title, description, imageUrl } = this.state.merchant;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdPush={2}>
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
                onToggle={this.handleToggle}
                imageUrl={imageUrl}
                toggled={isFeatured}
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

