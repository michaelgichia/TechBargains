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
import Helmet from "react-helmet";
import { Container } from "reactstrap";

// Material-ui
import Navigation from "containers/NavBar";
import Footer from "components/Footer";
import DashboardSidebar from "containers/DashboardSidebar";
import ReactModal from "containers/ReactModal";
import FlashMessage from "containers/FlashMessage";

import "!!style-loader!css-loader!./app.css";

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <Container fluid style={{ padding: 0, overflow: "hidden" }}>
        <Helmet
          titleTemplate="%s - DealsExpert  -  Get the latest deals"
          defaultTitle="DealsExpert  -  Get the latest deals"
          meta={[{ name: "description", content: "Get the latest deals." }]}
          link={[
            {
              rel: "stylesheet",
              href:
                "https://unpkg.com/react-instantsearch-theme-algolia@4.0.0/style.min.css"
            }
          ]}
          script={[
            {
              src:
                "https://cdn.jsdelivr.net/algoliasearch/3/algoliasearchLite.min.js"
            }
          ]}
        />

        {/*Render different navbar for admin and front page*/}
        {pathname.substring(1, 10) === "dashboard"
          ? <DashboardSidebar />
          : <Navigation />}
        <div
          className={
            pathname.substring(1, 10) === "dashboard" ? "dashtech" : "tech"
          }
        >
          <ReactModal />
          {React.Children.toArray(this.props.children)}
          <FlashMessage />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default App;