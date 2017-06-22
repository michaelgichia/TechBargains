import React, { PropTypes } from "react";
import axios from "axios";
import shortid from "shortid";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import { connect } from "react-redux";
// Material-ui
import RaisedButton from "material-ui/RaisedButton";
import ListItem from "material-ui/List/ListItem";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import { Link } from "react-router";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import Chip from "material-ui/Chip";
// Actions
import { deleteItem } from "./actions";

// Styling
const gems4 = {
  button: {
    margin: 12
  }
};

export class ItemDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    itemData: {
      name: "",
      coupon: "",
      features: "",
      backlink: "",
      image: "",
      percentage: {},
      merchant: {},
      category: {},
      subCategory: "",
      expire: 0,
      isShipped: "",
      created: 0,
      isFeatured: false,
      tags: []
    },
    errors: "",
    itemId: null
  };

  componentDidMount() {
    // Save the itemId param in the state.
    const itemId = this.props.params.itemId;
    this.setState({ itemId });
    // API Call.
    axios.get(`/public-api/item/${itemId}`).then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ itemData: response.data.result });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  timeConversion = (expire, currentTime) => {
    const millisec = expire - currentTime;
    const seconds = (millisec / 1000).toFixed(1);
    const minutes = (millisec / (1000 * 60)).toFixed(1);
    const hours = (millisec / (1000 * 60 * 60)).toFixed(1);
    const days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
      return seconds + " Sec";
    } else if (minutes < 60) {
      return minutes + " Min";
    } else if (hours < 24) {
      return hours + " Hrs";
    } else {
      return days + " Days";
    }
  };

  convertToDate = millisec => new Date(millisec).toString("yyyy MM dd");

  render() {
    const {
      name,
      merchant,
      backlink,
      features,
      percentage,
      category,
      subCategory,
      coupon,
      expire,
      isShipped,
      image,
      created,
      isFeatured,
      tags
    } = this.state.itemData;

    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Card containerStyle={{ marginTop: 30 }}>

              <ListItem
                disabled
                leftAvatar={<Avatar>{`${percentage || ""}%`}</Avatar>}
              />

              <CardMedia
                mediaStyle={{ maxHeight: 300, height: 300 }}
                overlay={
                  <CardTitle
                    title={<div dangerouslySetInnerHTML={{ __html: name }} />}
                    subtitle={`Merchant: ${merchant ? merchant.title : "none"}`}
                  />
                }
                style={{ marginTop: 10 }}
              >
                {/* The deal image.*/}
                <img
                  src={image}
                  style={{ maxHeight: 300, maxWidth: 300 }}
                  alt={name}
                />
              </CardMedia>

              <Paper zDepth={1} rounded={false}>
                <CardTitle subtitle={`Backlink: ${backlink}`} />
                <Divider />
                <CardTitle
                  subtitle={`Category: ${category
                    ? category.name
                    : "Not defined"}`}
                />
                <Divider />
                <CardTitle
                  subtitle={`Subcategory: ${subCategory
                    ? subCategory.title
                    : "Not defined"}`}
                />
                <Divider />
                <CardTitle
                  subtitle={`Featured: ${isFeatured ? "Yes" : "No"}`}
                />
                <Divider />
                <CardTitle subtitle={`Coupon: ${coupon || "Empty"}`} />
                <Divider />
                <Divider />
                <CardTitle
                  subtitle={`Expire: ${this.timeConversion(
                    expire,
                    new Date().getTime()
                  )}`}
                />
                <Divider />
                <CardTitle
                  subtitle={`Created: ${this.convertToDate(created)}`}
                />
                <Divider />
                <CardTitle
                  subtitle={
                    isShipped
                      ? isShipped
                      : "Item does not have any spefications like free shipping e.t.c"
                  }
                />
                <Divider />
                <CardText>
                  <CardTitle subtitle="Tags" />
                  {tags.map(tag =>
                    <div
                      key={shortid.generate()}
                      dangerouslySetInnerHTML={{ __html: tag }}
                    />
                  )}
                </CardText>
                <Divider />
                <CardText>
                  <CardTitle subtitle="Features" />
                  <div dangerouslySetInnerHTML={{ __html: features }} />
                </CardText>
              </Paper>

              <CardActions>
                <Link to={"/dashboard"} key={0}>
                  <RaisedButton
                    label="Add"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                  />
                </Link>

                <Link to={"/dashboard/items-list"} key={1}>
                  <RaisedButton
                    label="Items"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                  />
                </Link>

                <Link key={2}>
                  <RaisedButton
                    label="Delete"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                    onTouchTap={() => this.props.deleteItem(this.state.itemId)}
                  />
                </Link>

                <Link
                  to={`/dashboard/items-list/${this.state.itemId}/update`}
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

ItemDetail.propTypes = {
  deleteItem: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => dispatch(deleteItem(itemId))
});

export default connect(null, mapDispatchToProps)(ItemDetail);
