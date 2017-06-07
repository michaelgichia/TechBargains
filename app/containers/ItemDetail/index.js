import React, { PropTypes } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { connect } from 'react-redux';
// Material-ui
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// Actions
import { deleteItem } from './actions';

// Styling
const gems4 = {
  button: {
    margin: 12,
  },
};

export class ItemDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    itemData: {
      name: '',
      coupon: '',
      features: '',
      backlink: '',
      percentage: {},
      merchant: {},
      category: {},
      subCategory: '',
      expire: {},
      isShipped: '',
    },
    errors: '',
    itemId: null,
  }

  componentDidMount() {
    // Save the itemId param in the state.
    const itemId = this.props.params.itemId;
    this.setState({ itemId });
    // API Call.
    axios.get(`/public-api/item/${itemId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ itemData: response.data.result });
      } else {
        this.setState({ errors: response.data.message });
      }
    });
  }

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
    } = this.state.itemData;

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdPush={2}>
            <Card containerStyle={{ marginTop: 30 }}>

              <ListItem disabled leftAvatar={<Avatar>{`${percentage || 'none'}%`}</Avatar>} />

              <CardMedia
                mediaStyle={{ maxHeight: 300 , height: 300}}
                overlay={<CardTitle
                  title={<div dangerouslySetInnerHTML={{__html: name}}/>}
                  subtitle={`Merchant: ${merchant ? merchant.title : 'none'}`} 
                  />
                }
                style={{ marginTop: 10 }}
              >
                {/* The deal image.*/}
                <img src={backlink} style={{ maxHeight: 300, maxWidth: 300 }} alt={name} />
              </CardMedia>

              <Paper zDepth={1} rounded={false}>
                <CardTitle subtitle={`Category: ${category ? category.name : 'none'}`} />
                <Divider />
                <CardTitle subtitle={`Subcategory: ${subCategory ? subCategory.title : 'none'}`} />
                <Divider />
                <CardTitle subtitle={`Coupon: ${coupon || 'none'}`} />
                <Divider />
                <CardTitle subtitle={`Expires on: ${expire || 'none'}`} />
                <Divider />
                <CardTitle subtitle={`Free shipping: ${isShipped ? 'Yes':'No'}`} />
                <Divider />
                <CardText>
                  <CardTitle title="Features" />
                  <ul>
                    {features ? features.map((feature) => (<li
                      key={shortid.generate()}>
                      <div dangerouslySetInnerHTML={{__html: feature}}/>
                      </li>
                      )) : []
                    }
                  </ul>
                </CardText>
              </Paper>

              <CardActions>
                <Link to={'/dashboard'} key={0} >
                  <RaisedButton label="Add" style={gems4.button} labelColor="#7c7c7c" />
                </Link>

                <Link to={'/dashboard/items-list'} key={1} >
                  <RaisedButton label="Items" style={gems4.button} labelColor="#7c7c7c" />
                </Link>

                <Link key={2} >
                  <RaisedButton
                    label="Delete"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                    onTouchTap={() => this.props.deleteItem(this.state.itemId)}
                  />
                </Link>

                <Link to={`/dashboard/items-list/${this.state.itemId}/update`} key={3} >
                  <RaisedButton label="Edit" style={gems4.button} labelColor="#7c7c7c" />
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
  deleteItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
});

export default connect(null, mapDispatchToProps)(ItemDetail);
