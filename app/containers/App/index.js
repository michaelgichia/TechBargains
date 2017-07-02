/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import Helmet from 'react-helmet';

// Material-ui
import Navigation from "containers/NavBar";
import Footer from "components/Footer";
import DashboardSidebar from "containers/DashboardSidebar";
import withProgressBar from "components/ProgressBar";
import ReactModal from "containers/ReactModal";
import FlashMessage from "containers/FlashMessage";

import "!!style-loader!css-loader!./app.css";

const style = {
  divi: {
    margin: 0,
    padding: 0
  }
};

class App extends React.Component {
  state = {
    searchState: {},
    lastPush: 0
  };
  
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div>
        <Helmet
          titleTemplate="%s - DealsExpert  -  Get the latest deals"
          defaultTitle="DealsExpert  -  Get the latest deals"
          meta={[
            { name: 'description', content: 'Get the latest deals.' },
          ]}
        />
        {pathname.substring(1, 10) === "dashboard"
          ? <DashboardSidebar />
          : <Navigation />}
        <ReactModal />
        <div
          className={
            pathname.substring(1, 10) === "dashboard" ? "dashtech" : "tech"
          }
        >
          {React.Children.toArray(this.props.children)}
        </div>
        <FlashMessage />
        <Footer />
      </div>
    );
  }
}

export default withProgressBar(App);
