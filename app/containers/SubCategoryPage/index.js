import SubCategoryForm from 'components/SubCategoryForm';
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router';
// Material
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Auth from '../Utils';
import { postSubCategory, getCategories, getSubCategories } from './actions';

// token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

class SubCategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    title: '',
    category: '',
    titleError: '',
    categoryError: '',
    errors: '',
    message: '',
    subCategories: [],
    description: '',
    categories: [],
  }// eslint-disable-line

  componentDidMount() {
    this.props.getCategories();
    this.props.getSubCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.message !== this.state.message) {
      this.setState({ errors: '', message: nextProps.message });
    }
    if (nextProps.categories !== this.state.categories) {
      this.setState({ categories: nextProps.categories });
    }
    if (nextProps.subCategories !== this.state.subCategories) {
      this.setState({ subCategories: nextProps.subCategories });
    }
  }

  handleDescription = (description) => this.setState({ description });

  resetState = () => {
    this.setState((prevState) => ({
      title: '',
      category: '',
      description: ''
    }));
  };

  /**
   * Update title in the state.
  */
  handleChange = (e) => {
    this.setState({ titleError: '' });
    this.setState({ title: e.target.value });
  };

  /**
   * Update category in the state.
   * Clear text error if the field is not empty.
  */
  handlecategory = (e, i, value) => {
    this.setState({ categoryError: '' });
    this.setState({ category: value });
  };

  /**
   * Make an post API call to save a subcategory model.
   * Enforce that the API call is made after the fields are filled.
  */
  handleSubmit = () => {
    const { title, category, description } = this.state;

    if (title.length < 1) {
      this.setState({ titleError: 'This field is required' });
    }
    if (category.length < 1) {
      this.setState({ categoryError: 'This field is required' });
    } else {
      const updatedSubcategory = Object.assign({ title }, { category }, { description });
      this.props.postSubCategory(updatedSubcategory);
      this.resetState();
    }
  };

  displayCategories = (categories) => {
    const categoryArray = [];
    if (categories !== undefined && categories.length > 0) {
      categories.map((category) => (
        categoryArray.push(<MenuItem
          value={category.id}
          key={shortid.generate()}
          primaryText={category.name}
        />
        )
      ));
    } else {
      categoryArray.push(<MenuItem
        value={'59087201dc2e353c2d440030'}
        key={shortid.generate()}
        primaryText={'No categories found. please add them.'}
      />
      );
    }
    return categoryArray;
  }

  /**
   * If we don't have categories in the DB, allow the user to
   * add categories before adding a subcategory.
  */
  render() {
    const { 
      categories,
      title,
      category,
      titleError,
      categoryError,
      errors,
      message,
      description 
    } = this.state;
    const categoryArray = this.displayCategories(categories);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Paper zDepth={2} rounded={false} style={gemsawesome.paper}>
              <SubCategoryForm
                onChange={this.handleChange}
                onClick={this.handleSubmit}
                onCategoryChange={this.handlecategory}
                categoryArray={categoryArray}
                category={category}
                titleError={titleError}
                categoryError={categoryError}
                title={title}
                header="Create Subcategory"
                errors={errors}
                message={message}
                onDescriptionChange={this.handleDescription}
                description={description}
              />
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <div style={gemsawesome.table}>
              <Table
                fixedHeader
                selectable
                bodyStyle={gemsawesome.bodyStyle}
                height="500px"
                wrapperStyle={gemsawesome.wrapperStyle}
              >
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="12" tooltip="A List Of Categories" style={{ textAlign: 'center', fontSize: 24, color: 'black' }}>
                    A List Of Categories
                  </TableHeaderColumn>
                  </TableRow>
                  <TableRow>
                    <TableHeaderColumn colSpan="12" >Categories</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} deselectOnClickaway preScanRows={false}>
                  {this.state.subCategories.map((row) => (
                    <TableRow key={shortid.generate()}>
                      <TableRowColumn colSpan="12">
                        <Link to={`/dashboard/sub-category/${row.id}/update`}>
                          {row.title}
                        </Link>
                      </TableRowColumn>
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

SubCategoryPage.propTypes = {
  categories: PropTypes.array.isRequired,
  getCategories: PropTypes.func.isRequired,
  postSubCategory: PropTypes.func.isRequired,
};

const mapStateToProps = ({ subcategory }) => ({
  categories: subcategory.categories,
  subCategories: subcategory.subCategories,
  message: subcategory.message,
  errors: subcategory.errors,
});

const mapDispatchToProps = (dispatch) => ({
  postSubCategory: (subCategory) => dispatch(postSubCategory(subCategory)),
  getCategories: () => dispatch(getCategories()),
  getSubCategories: () => dispatch(getSubCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryPage);

const gemsawesome = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  table: {
    marginTop: 100,
  },
  paper: {
    padding: 30,
    marginTop: 30,
  },
  open: false,
  bodyStyle: {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 50,
  },
  wrapperStyle: {
    borderWidth: 1,
    WebkitBorderRadius: 12,
    borderRadius: 0,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    zIndex: 1,
  },
};