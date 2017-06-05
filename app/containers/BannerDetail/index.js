/*
 *
 * BannerDetail
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import axios from 'axios';
// Material
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import PaperLite from 'components/PaperLite';
import { Link } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// Actions
import { deleteBanner } from './actions';

// Styling
const gems4 = {
  button: {
    margin: 12,
  },
};

export class BannerDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  state = {
    itemData: {
      title: '',
      imageUrl: '',
      backlink: '',
    },
    message: '',
    errors: '',
    bannerId: '',
  }

  componentDidMount() {
    const bannerId = this.props.params.bannerId;
    this.setState({ bannerId });

    axios.get(`/public-api/banner/${bannerId}`)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        console.log('jane', response.data.result)
        this.setState({ itemData: { ...response.data.result }});
      } else {
        this.setState({ errors: response.data.message });
      }
    });
  }

  render() {
    const { backlink, imageUrl, title} = this.state.itemData;
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={10}  md={10} lg={10} lgOffset={1} mdOffset={1} xsOffset={1}>
            <Card containerStyle={{ marginTop: 30 }}>
              <CardMedia style={{ marginTop: 10 }}>
                <img src={backlink} style={{ maxHeight: 400, maxWidth: 300 }} alt={name} />
              </CardMedia>

              <Paper zDepth={1} rounded={false}>
                <CardTitle subtitle={`Backlink: ${backlink ? backlink : 'none'}`} style={{marginBottom: 20}} />
                <Divider style={{marginBottom: 20}} />
                <CardTitle subtitle={`Image Url: ${imageUrl ? imageUrl : 'none'}`} />
              </Paper>

              <CardActions>
                <Link to={'/dashboard/banner/create'} key={0}   >
                  <RaisedButton label="Add" labelColor="#7c7c7c" />
                </Link>

                <Link to={'/dashboard/banner'} key={1} >
                  <RaisedButton label="Banners" style={gems4.button} labelColor="#7c7c7c" />
                </Link>

                <Link key={2} >
                  <RaisedButton
                    label="Delete"
                    style={gems4.button}
                    labelColor="#7c7c7c"
                    onTouchTap={() => this.props.deleteBanner(this.state.bannerId)}
                  />
                </Link>

                <Link to={`/dashboard/banner/${this.state.bannerId}/update`} key={3} >
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

BannerDetail.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  deleteBanner: (bannerId) => dispatch(deleteBanner(bannerId)),
})

export default connect(null, mapDispatchToProps)(BannerDetail);
