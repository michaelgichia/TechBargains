/**
*
* BannerTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// Material-ui
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import EditIcon from 'material-ui/svg-icons/editor/border-color';


class BannerTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Table
        fixedHeader
        selectable
        height="500px"
        onRowSelection={this.props.handleRowSelection}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn colSpan="12" tooltip="A List Of Banners" style={{ textAlign: 'center', fontSize: 24, color: 'black' }}>
            A List Of Banners
          </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn colSpan="7" >Banners</TableHeaderColumn>
            <TableHeaderColumn colSpan="3" >Featured</TableHeaderColumn>
            <TableHeaderColumn colSpan="2" >Edit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} deselectOnClickaway preScanRows={false}>
          {this.props.banners.map((row) => (
            <TableRow key={shortid.generate()}>
              <TableRowColumn colSpan="7">{row.title}</TableRowColumn>
              <TableRowColumn colSpan="3">{row.isFeatured ? 'true' : 'false'}</TableRowColumn>
              <TableRowColumn colSpan="2"><EditIcon /></TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

BannerTable.propTypes = {
  handleRowSelection: PropTypes.func.isRequired,
  banners: PropTypes.array.isRequired,
};

export default BannerTable;
