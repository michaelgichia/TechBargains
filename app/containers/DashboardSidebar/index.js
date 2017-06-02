import SideDrawer from 'containers/SideDrawer';
import React, { PropTypes } from 'react';
// Material-ui
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';

const gems3 = {
  navbar: {
    position: 'fixed ',
    width: '100%',
    top: 0,
    zIndex: 5,
  },
};

export class DashboardSidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    open: false,
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const { windowWidth, open } = this.state;
    return (
      <AppBar
        title="Dashboard"
        style={gems3.navbar}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        zDepth={2}
      >
        <SideDrawer
          open={open}
          handleToggle={this.handleToggle}
        />
      </AppBar>
    );
  }
}

DashboardSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DashboardSidebar);
