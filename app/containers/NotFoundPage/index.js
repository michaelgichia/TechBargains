/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import RaisedButton from "material-ui/RaisedButton";

import "!!style-loader!css-loader!./style.css";

export default class NotFound extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="body">
        <div className="cont_principal cont_error_active">
          <div className="cont_error">

            <h1>404</h1>
            <p>The Page you're looking for isn't here.</p>
            <RaisedButton
              backgroundColor="#525c65"
              href="https://deals-expert.com"
              labelStyle={{
                textTransform: "none",
                paddingLeft: 50,
                paddingRight: 50,
                fontSize: 20,
                fontWeight: 700
              }}
              labelColor="#fff"
              label="Home"
              style={styles.button}
            />
          </div>
          <div className="cont_aura_1" />
          <div className="cont_aura_2" />
        </div>

      </div>
    );
  }
}

const styles = {
  button: {
    margin: 12
  },
};
