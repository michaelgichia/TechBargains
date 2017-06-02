/*
 *
 * MerchantDetail
 *
 */

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import axios from 'axios';
// Material-ui
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Auth from '../Utils';

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

const style = {
  paper: {
    padding: 30,
    marginTop: 30,
  },
  button: {
    width: 120,
    margin: 10,
  },
};

export class MerchantDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    merchantId: '',
    merchantData: {
      description: '',
      title: '',
      id: '',
    },
  }

  componentDidMount() {
    const { merchantId } = this.props.params;
    this.setState({ merchantId });

    axios.get(`/public-api/merchant/${merchantId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ merchantData: response.data.result });
      } else {
        this.setState({ errors: response.data.message });
      }
    });
  }

  handleAdd = () => {
    const url = '/dashboard/merchants/create';
    browserHistory.push(url);
  };

  handleEdit = () => {
    const { merchantId } = this.state;
    const url = `/dashboard/merchants/${merchantId}/update`;
    browserHistory.push(url);
  };

  handleDelete = () => {
    const url = '/dashboard/merchants';
    axios.delete(`/api/merchant/${this.state.merchantId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        browserHistory.push(url);
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  };

  handleMerchants = () => {
    const url = '/dashboard/merchants';
    browserHistory.push(url);
  };

  render() {
    const { title, id, description } = this.state.merchantData;
    return (
      <Grid>
        <Row>
          <Col xs={10} md={10} lg={10} sm={10} smOffset={1} xsOffset={1} mdOffset={1} lgOffset={1}>
            <Card style={{ marginTop: 30 }}>
              <CardHeader
                title="Store Details"
                subtitle={`Name of the Store: ${title}`}
              />
              <CardText>
                {`Description: ${description}`}
              </CardText>
              <CardActions>
                <Divider />
                <RaisedButton primary style={style.button} label="Add" onTouchTap={() => this.handleAdd()} />
                <RaisedButton primary style={style.button} label="Edit" onTouchTap={() => this.handleEdit()} />
                <RaisedButton primary style={style.button} label="Delete"onTouchTap={() => this.handleDelete()} />
                <RaisedButton primary style={style.button} label="Merchants"onTouchTap={() => this.handleMerchants()} />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

MerchantDetail.propTypes = {
  params: PropTypes.object.isRequired,
};

MerchantDetail.defaultProps = {
  merchantId: '#',
};

export default MerchantDetail;
