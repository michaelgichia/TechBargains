/*
 *
 * BannerDetail
 *
 */

import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
import { Image } from "cloudinary-react";
import { browserHistory, Link } from "react-router";
// Material
import RaisedButton from "material-ui/RaisedButton";
import { Card, CardActions, CardMedia, CardTitle } from "material-ui/Card";
import { deleteBanner } from "./actions";

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
    this.setState(() => ({ bannerId }));

    axios.get(`/public-api/banner/${bannerId}`).then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ itemData: { ...response.data.result } });
      } else {
        this.setState({ errors: response.data.errors });
        console.error(response.data);
      }
    });
  }

  render() {
    const { backlink, imageUrl, title, public_id } = this.state.itemData;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Card containerStyle={{ marginTop: 30 }}>
              <CardMedia
                style={{ marginTop: 10, marginBottom: 20 }}
                mediaStyle={{ maxHeight: 300, height: 300 }}
              >
                <Image
                  cloudName="deals-expert"
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
                    onTouchTap={() =>
                      this.props.deleteBanner(this.state.bannerId)}
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
      </Container>
    );
  }
}

BannerDetail.propTypes = {};

const mapStateToProps = ({ bannerDetail }) => ({
  bannerDetail
});

const mapDispatchToProps = dispatch => ({
  deleteBanner: bannerId => dispatch(deleteBanner(bannerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerDetail);

// Styling
const gems4 = {
  button: {
    margin: 12
  }
};
