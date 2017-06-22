/*
 *
 * MerchantsList
 *
 */

import React, { PropTypes } from 'react';
import shortid from 'shortid';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
// Material
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export class MerchantsList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    merchants: [],
    errors: '',
    message: '',
  };

  componentDidMount() {
    // Api call to get merchants.
    axios.get('/public-api/merchant')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ merchants: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  handleRowSelection = (selectedRows) => {
    const merchantId = this.state.merchants[selectedRows].id;
    // browserHistory.push(`/dashboard/merchants/${merchantId}`);
    window.location.href = `/dashboard/merchants/${merchantId}`;
  };

  render() {
    return (
      <div>
        <Table fixedHeader fixedFooter selectable onRowSelection={this.handleRowSelection}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan="12" tooltip="Super Header" style={{ textAlign: 'center' }}>
                A List Of Merchants
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn colSpan="2" >ID</TableHeaderColumn>
              <TableHeaderColumn colSpan="10" >Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} deselectOnClickaway preScanRows={false}>
            {this.state.merchants.map((row, index) => (
              <TableRow key={shortid.generate()}>
                <TableRowColumn colSpan="2">{index + 1}</TableRowColumn>
                <TableRowColumn colSpan="10">{row.title}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter adjustForCheckbox={false}>
            <TableRow>
              <TableRowColumn colSpan="3" style={{ textAlign: 'center' }}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}

MerchantsList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ merchantsList }) => ({
  merchantsList,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList);

