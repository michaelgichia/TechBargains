/*
 *
 * Banner
 *
 */

import React from 'react';
import BannerTable from 'components/BannerTable';
import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Paper from 'material-ui/Paper';

const style = {
  paper: {
    padding: 30,
    marginTop: 30,
  },
};

export class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    banners: [],
  }

  componentDidMount() {
    axios.get('/public-api/banner')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ banners: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.errors });
        console.error(response.data);
      }
    });
  }

  handleRowSelection = (selectedRows) => {
    const bannerId = this.state.banners[selectedRows].id;
    browserHistory.push(`/dashboard/banner/${bannerId}`);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Paper rounded={false} style={style.paper}>
              <BannerTable
                handleRowSelection={this.handleRowSelection}
                banners={this.state.banners}
              />
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Banner.propTypes = {
};

export default Banner;
