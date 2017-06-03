/**
*
* LineBar
*
*/

import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dropdown from 'components/Dropdown';
// import styled from 'styled-components';


class LineBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="line-bar">
      	<div>
	      	<h2 className="line-bar-head">Latest Deals</h2>
      	</div>
        <SelectField value={1}>
          <MenuItem value={1} primaryText="Most Recent" />
          <MenuItem value={2} primaryText="Expiring soon" />
          <MenuItem value={3} primaryText="Editors choice" />
        </SelectField>
      </div>
    );
  }
}

LineBar.propTypes = {

};

export default LineBar;
