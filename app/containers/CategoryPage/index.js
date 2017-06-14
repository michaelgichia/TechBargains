import CategoryForm from 'components/CategoryForm';
import React, { PropTypes } from 'react';
import shortid from 'shortid';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// Material
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { gems } from './gems';
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
    description: '',
    isFeatured: false,
    categories: [],
  } // eslint-disable-line

  componentDidMount() {
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

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => this.setState({ isFeatured: value });

  handleDescription = (description) => this.setState({ description });

  handleChange = (e) => {
    this.setState({ nameError: '' });
    this.setState({ name: e.target.value });
  };

  postCategory = (data) => {
    const updateCategories = this.state.categories;
    axios.post('/api/category/create', data)
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
      const { name, isFeatured, description } = this.state;
      this.postCategory({ name, isFeatured, description });
      this.setState((prevState) => ({ name: '', isFeatured: false, description: '' }));
    }
  };

  handleRowSelection = (selectedRows) => {
    const categoryId = this.state.categories[selectedRows].id;
    this.props.deleteCategory(categoryId);
  };

  render() {
    const { nameError, name, errors, message, description, isFeatured } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
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
          <Col xs={12} md={10} mdPush={1}>
            <div style={gems.table}>
              <Table
                fixedHeader
                selectable
                height="500px"
                bodyStyle={gems.bodyStyle}
                wrapperStyle={gems.wrapperStyle}
              >
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="12" tooltip="A List Of Categories" style={{ textAlign: 'center', fontSize: 24, color: 'black' }}>
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
                      <TableRowColumn colSpan="7">
                        <Link to={`/dashboard/category/${row.id}/update`}>
                        {row.name}
                        </Link>
                      </TableRowColumn>
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
  deleteCategory: (id) => dispatch(deleteCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
