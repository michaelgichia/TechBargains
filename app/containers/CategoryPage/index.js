import CategoryForm from 'components/CategoryForm';
import React, { PropTypes } from 'react';
import shortid from 'shortid';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
// Material
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { style } from './style';
import Auth from '../Utils';
import { deleteCategory } from './actions';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class CategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    isFeatured: false,
    nameError: '',
    errors: '',
    message: '',
    categories: [],
  } // eslint-disable-line

  componentWillMount() {
    axios.get('/public-api/category')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ categories: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.message });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories !== this.state.categories) {
      this.setState({ categories: nextProps.categories });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.message !== this.state.message) {
      this.setState({ message: nextProps.message });
    }
  }

  handleChange = (e) => {
    this.setState({ nameError: '' });
    this.setState({ name: e.target.value });
  };

  handleToggle = (e, isInputChecked) => this.setState({ isFeatured: isInputChecked });

  postCategory = (title) => {
    const updateCategories = this.state.categories;
    axios.post('/api/category/create', title)
    .then((response) => {
      if (response.data.confirmation === 'success') {
        updateCategories.push(response.data.result);
        this.setState({ categories: updateCategories });
      } else {
        this.setState({ errors: response.data.message });
      }
    })
    .catch((error) => {
      this.setState({ errors: error });
    });
  };

  handleSubmit = () => {
    const { name } = this.state;
    if (name.length < 1) {
      this.setState({ nameError: 'This field is required.' });
    } else {
      this.postCategory({ name: this.state.name, isFeatured: this.state.isFeatured });
      this.setState({ name: '', isFeatured: false });
    }
  };

  handleRowSelection = (selectedRows) => {
    const categoryId = this.state.categories[selectedRows].id;
    this.props.deleteCategory(categoryId);
  };

  render() {
    const { nameError, name, errors, message } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={10} md={10} lg={10} sm={10} smOffset={1} xsOffset={1} mdOffset={1} lgOffset={1}>
            <Paper zDepth={2} rounded={false} style={style.paper}>
              <CategoryForm
                onClick={this.handleSubmit}
                onChange={this.handleChange}
                nameError={nameError}
                name={name}
                errors={errors}
                message={message}
                onToggle={this.handleToggle}
                toggled={this.state.isFeatured}
              />
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} lg={10} sm={10} smOffset={1} xsOffset={1} mdOffset={1} lgOffset={1}>
            <div style={style.table}>
              <Table
                fixedHeader
                selectable
                height="500px"
                onRowSelection={this.handleRowSelection}
                bodyStyle={style.bodyStyle}
                wrapperStyle={style.wrapperStyle}
              >
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="12" tooltip="A List Of Categories" style={{ textAlign: 'center', fontSize: 24, color: "black" }}>
                    A List Of Categories
                  </TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn colSpan="7" >Categories</TableHeaderColumn>
                    <TableHeaderColumn colSpan="2" >isFeatured</TableHeaderColumn>
                    <TableHeaderColumn colSpan="3" >Delete</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} deselectOnClickaway preScanRows={false}>
                  {this.state.categories.map((row, index) => (
                    <TableRow key={shortid.generate()}>
                      <TableRowColumn colSpan="7">{row.name}</TableRowColumn>
                      <TableRowColumn colSpan="2">{row.isFeatured ? 'true' : 'false'}</TableRowColumn>
                      <TableRowColumn colSpan="2">&times;</TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

CategoryPage.propTypes = {
};

const mapStateToProps = ({ category }) => ({
  categories: category.categories,
  message: category.message,
  errors: category.errors,
});

const mapDispatchToProps = (dispatch) => ({ 
  deleteCategory: (id) => dispatch(deleteCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
