import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import EventListener, { withOptions } from 'react-event-listener';
import { jewels } from './jewels';
// import styled from 'styled-components';

class TopNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    windowWidth: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return (
      <AppBar
        title="Title"
        showMenuIconButton={this.state.windowWidth < 768}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        titleStyle={jewels.titleStyle}
        style={jewels.appBar}
        iconStyleLeft={jewels.iconStyleLeft}
      />
    );
  }
}

TopNav.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired,
};

export default TopNav;

