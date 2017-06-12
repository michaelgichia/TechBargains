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

import React from 'react';
// Material-ui
import Navigation from 'containers/NavBar';
import DashboardSidebar from 'containers/DashboardSidebar';
import withProgressBar from 'components/ProgressBar';
import ReactModal from 'containers/ReactModal';

const style = {
  divi: {
    margin: 0,
    padding: 0,
  },
};

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const { pathname } = this.props.location;
    return (
      <div style={style.divi}>
        { pathname.substring(1, 10) === 'dashboard' ?
          <DashboardSidebar />
        :
          <Navigation />
        }
        <ReactModal />
        <div className={pathname.substring(1, 10) === 'dashboard' ? 'dashtech' : 'tech'}>
          {React.Children.toArray(this.props.children)}
        </div>
      </div>
    );
  }
}

export default withProgressBar(App);
