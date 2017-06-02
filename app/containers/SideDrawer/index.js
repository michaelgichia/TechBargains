import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
// Material-ui
import { List, ListItem } from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
// Material-ui icons
import CategoryIcon from 'material-ui/svg-icons/action/dashboard';
import StoreIcon from 'material-ui/svg-icons/action/store';
import SubcatIcon from 'material-ui/svg-icons/image/view-comfy';
import ItemsIcon from 'material-ui/svg-icons/places/ac-unit';
import CreateIcon from 'material-ui/svg-icons/file/create-new-folder';


export class SideDrawer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        zIndex={3}
        onRequestChange={this.props.handleToggle}
      >
        <AppBar
          title="Navigation"
          showMenuIconButton={false}
          iconElementRight={<IconButton><NavigationClose /></IconButton>}
          onRightIconButtonTouchTap={this.props.handleToggle}
          zDepth={2}
        />
        <List>
          <ListItem
            primaryText="All items" leftIcon={<ItemsIcon />}
            initiallyOpen
            primaryTogglesNestedList
            containerElement={<Link to={'/dashboard/items-list'} key={0} />}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Add New Item"
                leftIcon={<CreateIcon />}
                containerElement={<Link to={'/dashboard'} key={0} />}
              />,
            ]}
          />,
          <ListItem
            primaryText="Category"
            leftIcon={<CategoryIcon />}
            containerElement={<Link to={'/dashboard/category'} key={0} />}
          />,
          <ListItem
            primaryText="Subcategory"
            leftIcon={<SubcatIcon />}
            containerElement={<Link to={'/dashboard/sub-category'} key={1} />}
          />,
          <ListItem
            primaryText="Stores"
            leftIcon={<StoreIcon />}
            containerElement={<Link to={'/dashboard/merchants'} key={2} />}
          />,
        </List>
      </Drawer>
    );
  }
}

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default SideDrawer;

