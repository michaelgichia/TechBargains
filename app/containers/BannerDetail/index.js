/*
 *
 * BannerDetail
 *
 */

import React from "react";
import { connect } from "react-redux";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import axios from "axios";
import { Image } from "cloudinary-react";
import { browserHistory, Link } from "react-router";
// Material
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";

// Styling
const gems4 = {
  button: {
    margin: 12
  }
};

export class BannerDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    itemData: {
      title: "",
      imageUrl: "",
      backlink: ""
    },
    message: "",
    errors: "",
    bannerId: ""
  };

  componentDidMount() {
    const bannerId = this.props.params.bannerId;
    this.setState({ bannerId });

    axios.get(`/public-api/banner/${bannerId}`).then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ itemData: { ...response.data.result } });
      } else {
        this.setState({ errors: response.data.errors });
        console.error(response.data);
      }
    });
  }

  handleDelete = () => {
    const url = "/dashboard/banner";
    axios.delete(`/api/banner/${this.state.bannerId}`).then(response => {
      if (response.data.confirmation === "success") {
        console.info("info", response.data);
        // browserHistory.push(url);
        window.location.href = url;
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  };

  render() {
    const { backlink, imageUrl, title, public_id } = this.state.itemData;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Card containerStyle={{ marginTop: 30 }}>
              <CardMedia
                style={{ marginTop: 10, marginBottom: 20 }}
                mediaStyle={{ maxHeight: 300, height: 300 }}
              >
                <Image
                  cloudName="dw3arrxnf"
                  publicId={public_id}
                  width="300"
                  height="300"
                  crop="scale"
                />
              </CardMedia>
              <div>
                <CardTitle
                  title={`Name: ${title || "none"}`}
                  subtitleColor="#676d79"
                  subtitle={`Backlink: ${backlink || "none"}`}
                  style={{ marginBottom: 20 }}
                />
              </div>
              <CardActions>
                <Link to={"/dashboard/banner/create"} key={0}>
                  <RaisedButton label="Add" labelColor="#7c7c7c" />
                </Link>

                <Link to={"/dashboard/banner"} key={1}>
                  <RaisedButton
                    label="Banners"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                  />
                </Link>

                <Link key={2}>
                  <RaisedButton
                    label="Delete"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                    onTouchTap={() => this.handleDelete()}
                  />
                </Link>

                <Link
                  to={`/dashboard/banner/${this.state.bannerId}/update`}
                  key={3}
                >
                  <RaisedButton
                    label="Edit"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                  />
                </Link>
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}

BannerDetail.propTypes = {};

export default BannerDetail;
