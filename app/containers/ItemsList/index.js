import React from "react";
import shortid from "shortid";
// Material-ui
import { Card, CardActions, CardHeader } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
// Material-ui Icons
import FilterIcon from "material-ui/svg-icons/content/filter-list";
import RefreshIcon from "material-ui/svg-icons/navigation/refresh";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router";

import { Container, Row, Col } from 'reactstrap';
import { getItems } from "./actions";

export class ItemsList extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    selected: [],
    items: [],
    errors: "",
    message: ""
  };

  componentDidMount() {
    // Api call to get items.
    axios.get("/public-api/item").then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ items: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.message !== this.state.message) {
      this.setState({ errors: "", message: nextProps.message });
    }
  }

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  isSelected = index => this.state.selected.indexOf(index) !== -1;
  displayItems = items =>
    <Table
      onRowSelection={this.handleRowSelection}
      wrapperStyle={wrapperStyle}
      bodyStyle={bodyStyle}
    >
      <TableHeader>
        <TableRow>
          <TableHeaderColumn colSpan="10">Name</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover>
        {items.map((item, index) =>
          <TableRow selected={this.isSelected(index)} key={shortid.generate()}>
            <TableRowColumn colSpan="10">
              <Link to={`/dashboard/items-list/${item.id}`}>
                <div style={{fontSize: 16}} dangerouslySetInnerHTML={{ __html: item.name }} />
              </Link>
            </TableRowColumn>
          </TableRow>
        )}
      </TableBody>
    </Table>;

  render() {
    if (this.state.errors.length > 0) {
      return (
        <div>
          {this.state.errors}
        </div>
      );
    }
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Card style={{ marginTop: 20 }}>
              <CardHeader
                titleStyle={{ fontSize: 26, fontFamily: "Roboto" }}
                titleColor="black"
                title="Items / Products / Services List"
              />
              <CardActions>
                <FlatButton
                  key={shortid.generate()}
                  icon={<RefreshIcon />}
                  label="Refresh"
                />
                <FlatButton
                  key={shortid.generate()}
                  icon={<FilterIcon />}
                  label="Filter Deals"
                />
                <FlatButton
                  key={shortid.generate()}
                  icon={<FilterIcon />}
                  label="Filter Coupons"
                />
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <span>
              <ul style={{ listStyle: "none" }}>
                {this.state.errors &&
                  this.state.errors.map(error =>
                    <li key={shortid.generate()}> <p>{error}</p> </li>
                  )}
              </ul>
              {this.state.message && <p>{this.state.message}</p>}
            </span>
            {this.displayItems(this.state.items)}
          </Col>
        </Row>
      </Container>
    );
  }
}

ItemsList.propTypes = {};

const mapStateToProps = ({ itemlist }) => ({
  items: itemlist.items,
  errors: itemlist.errors,
  message: itemlist.message
});

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(getItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

// Styles
const wrapperStyle = {
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
  zIndex: 1
};

const bodyStyle = {
  backgroundColor: "rgb(255, 255, 255)",
  color: "rgba(0, 0, 0, 0.87)",
};