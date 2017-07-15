/*
 *
 * CarouselContainer
 *
 */

import React, { PropTypes } from "react";
import Carousel from "components/Carousel";
import viewSize from "screen-size";
import axios from "axios";
import { connect } from "react-redux";

export class CarouselContainer extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    banners: [],
    errors: []
  };

  componentDidMount() {
    if (viewSize().x > 1024) {
      axios
        .get("/public-api/all/carousels")
        .then(response => {
          if (response.data.confirmation === "success") {
            this.setState({ banners: response.data.results });
          } else {
            this.setState({ errors: response.data.errors });
            console.error(response.data);
          }
        })
        .catch(errors => {
          this.setState({ errors });
          console.error(errors);
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.banners.length > 0
          ? <Carousel banners={this.state.banners} />
          : <div />}
      </div>
    );
  }
}

CarouselContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CarouselContainer);
