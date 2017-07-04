import CategoryForm from "components/CategoryForm";
import React from "react";
import shortid from "shortid";
import { Container, Row, Col } from 'reactstrap';
import Paper from "material-ui/Paper";
import axios from "axios";
import { Link } from "react-router";
import { connect } from "react-redux";
// Material
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { gems } from "./gems";
import { createCategory } from "./actions";

export class CategoryPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: "",
    isFeatured: false,
    nameError: "",
    errors: "",
    message: "",
    description: "",
    categories: []
  }; // eslint-disable-line

  componentDidMount() {
    axios.get("/public-api/category").then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ categories: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category) {
      const updatedCategory = [...this.state.categories];
      updatedCategory.push(nextProps.category);
      this.setState(() => ({ categories: updatedCategory }));
    }
  }

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => this.setState({ isFeatured: value });

  handleDescription = description => this.setState({ description });

  handleChange = e => {
    e.persist();
    this.setState(() => ({ nameError: "" }));
    this.setState(() => ({ name: e.target.value }));
  };

  handleSubmit = () => {
    const { name } = this.state;
    if (name.length < 1) {
      this.setState({ nameError: "This field is required." });
    } else {
      const { isFeatured, description } = this.state;
      this.props.createCategory({ name, isFeatured, description });
      this.setState(() => ({ name: "", isFeatured: false, description: "" }));
    }
  };

  render() {
    const {
      nameError,
      name,
      errors,
      message,
      description,
      isFeatured
    } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Paper zDepth={1} rounded={false} style={gems.paper}>
              <CategoryForm
                header="Create Category"
                onClick={this.handleSubmit}
                onChange={this.handleChange}
                nameError={nameError}
                name={name}
                errors={errors}
                message={message}
                onDescriptionChange={this.handleDescription}
                description={description}
                isFeatured={isFeatured}
                onFeaturedChange={this.handleIsFeatured}
              />
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <div style={gems.table}>
              <Table
                fixedHeader
                selectable
                height="300px"
                bodyStyle={gems.bodyStyle}
                wrapperStyle={gems.wrapperStyle}
              >
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn
                      colSpan="12"
                      tooltip="A List Of Categories"
                      style={{
                        textAlign: "center",
                        fontSize: 28,
                        color: "black",
                        padding: 10
                      }}
                    >
                      A List Of Categories
                    </TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn colSpan="10" style={{ fontSize: 20 }}>
                      Categories
                    </TableHeaderColumn>
                    <TableHeaderColumn colSpan="2" style={{ fontSize: 20 }}>
                      Featured
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={false}
                  deselectOnClickaway
                  preScanRows={false}
                >
                  {this.state.categories.map((row, index) =>
                    <TableRow key={shortid.generate()}>
                      <TableRowColumn colSpan="10">
                        <Link to={`/dashboard/category/${row.id}/update`}>
                          {row.name}
                        </Link>
                      </TableRowColumn>
                      <TableRowColumn colSpan="2">
                        {row.isFeatured ? "true" : "false"}
                      </TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

CategoryPage.propTypes = {};

const mapStateToProps = ({ category }) => ({
  category: category.category
});

const mapDispatchToProps = dispatch => ({
  createCategory: category => dispatch(createCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
