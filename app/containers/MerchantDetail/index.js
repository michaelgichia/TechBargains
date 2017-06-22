/*
 *
 * MerchantDetail
 *
 */

import React, { PropTypes } from "react";
import CouponHeader from "components/CouponHeader";
import { browserHistory } from "react-router";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import axios from "axios";
// Material-ui
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";

import Auth from "../Utils";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class MerchantDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    merchantId: "",
    merchantData: {
      description: "",
      title: "",
      id: "",
      imageUrl: "",
      about: "",
      public_id: ""
    },
    isFeatured: false,
    errors: ""
  };

  componentDidMount() {
    const { merchantId } = this.props.params;
    this.setState({ merchantId });

    axios.get(`/public-api/merchant/${merchantId}`).then(response => {
      if (response.data.confirmation === "success") {
        this.setState({
          isFeatured: response.data.result.isFeatured,
          merchantData: response.data.result
        });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  handleAdd = () => {
    const url = "/dashboard/merchants";
    // browserHistory.push(url);
    window.location.href = url;
  };

  handleEdit = () => {
    const { merchantId } = this.state;
    const url = `/dashboard/merchants/${merchantId}/update`;
    // browserHistory.push(url);
    window.location.href = url;
  };

  handleDelete = () => {
    const url = "/dashboard/merchants";
    axios.delete(`/api/merchant/${this.state.merchantId}`).then(response => {
      if (response.data.confirmation === "success") {
        // browserHistory.push(url);
        window.location.href = url;
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  };

  handleMerchants = () => {
    const url = "/dashboard/merchants";
    // browserHistory.push(url);
    window.location.href = url;
  };

  render() {
    const {
      title,
      description,
      imageUrl,
      about,
      public_id
    } = this.state.merchantData;
    const { isFeatured } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Card style={{ marginTop: 30 }}>
              {this.state.errors.length > 0 ? <p>{this.state.errors}</p> : ""}
              <CardHeader
                title="Store Details"
                subtitle={`Name of the Store: ${title}`}
              />
              <div className="merchant-detail-image">
                <Image
                  cloudName="dw3arrxnf"
                  publicId={public_id}
                  width="250"
                  crop="scale"
                />
              </div>
              <CardText>
                {`Description: ${description}`}
              </CardText>
              <CardText>
                {`Featured: ${isFeatured}`}
              </CardText>
              <CardText>
                <CouponHeader title={`About ${title}`} />
                {<div dangerouslySetInnerHTML={{ __html: about }} />}
              </CardText>
              <CardActions>
                <Divider />
                <RaisedButton
                  primary
                  style={gems5.button}
                  label="Stores"
                  onTouchTap={() => this.handleMerchants()}
                />
                <RaisedButton
                  primary
                  style={gems5.button}
                  label="Add"
                  onTouchTap={() => this.handleAdd()}
                />
                <RaisedButton
                  primary
                  style={gems5.button}
                  label="Edit"
                  onTouchTap={() => this.handleEdit()}
                />
                <RaisedButton
                  primary
                  style={gems5.button}
                  label="Delete"
                  onTouchTap={() => this.handleDelete()}
                />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

MerchantDetail.propTypes = {
  params: PropTypes.object.isRequired
};

MerchantDetail.defaultProps = {
  merchantId: "#"
};

export default MerchantDetail;

// Styles
const gems5 = {
  paper: {
    padding: 30,
    marginTop: 30
  },
  button: {
    width: 120,
    margin: 10
  }
};
