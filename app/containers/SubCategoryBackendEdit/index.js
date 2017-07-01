/*
 *
 * SubCategoryBackendEdit
 *
 */

import React, { PropTypes } from "react";
import { browserHistory } from "react-router";
import SubCategoryForm from "components/SubCategoryForm";
import MenuItem from "material-ui/MenuItem";
import shortid from "shortid";
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import {
  updateSubCategory,
  fetchSubCategory,
  deleteSubCategory,
  getCategories
} from "./actions";

export class SubCategoryBackendEdit extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    title: "",
    category: "",
    description: "",
    titleError: "",
    categoryError: "",
    subcategoryId: "",
    categories: [],
    errors: "",
    message: ""
  };

  componentDidMount() {
    const { subcategoryId } = this.props.params;
    this.props.fetchSubCategory(subcategoryId);
    this.props.getCategories();
    this.setState(prevState => ({ subcategoryId }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.subCategory.title !== this.state.title) {
      this.setState({ title: nextProps.subCategory.title });
    }
    if (nextProps.subCategory.description !== this.state.description) {
      this.setState({ description: nextProps.subCategory.description });
    }
    if (nextProps.subCategory.category !== this.state.category) {
      this.setState({ category: nextProps.subCategory.category });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.categories !== this.state.categories) {
      this.setState({ categories: nextProps.categories });
    }
  }

  handleDescription = description => this.setState({ description });

  resetState = () => {
    this.setState({
      title: "",
      category: ""
    });
  };

  /**
   * Update title in the state.
  */
  handleChange = e => {
    this.setState({ titleError: "" });
    this.setState({ title: e.target.value });
  };

  /**
   * Update category in the state.
   * Clear text error if the field is not empty.
  */
  handlecategory = (e, i, value) => {
    this.setState({ categoryError: "" });
    this.setState({ category: value });
  };

  /**
   * Make an post API call to save a subcategory model.
   * Enforce that the API call is made after the fields are filled.
  */
  handleSubmit = () => {
    const { title, category, description } = this.state;

    if (title.length < 1) {
      this.setState({ titleError: "This field is required" });
    }
    if (category.length < 1) {
      this.setState({ categoryError: "This field is required" });
    } else {
      const updatedSubcategory = Object.assign(
        { title },
        { category },
        { description }
      );
      this.props.updateSubCategory(
        updatedSubcategory,
        this.state.subcategoryId
      );
      this.resetState();
    }
  };

  displayCategories = categories => {
    const categoryArray = [];
    if (categories !== undefined && categories.length > 0) {
      categories.map(category =>
        categoryArray.push(
          <MenuItem
            value={category.id}
            key={shortid.generate()}
            primaryText={category.name}
          />
        )
      );
    } else {
      categoryArray.push(
        <MenuItem
          value={"59087201dc2e353c2d440030"}
          key={shortid.generate()}
          primaryText={"No categories found. please add them."}
        />
      );
    }
    return categoryArray;
  };

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
      <Container>
        <Row>
          <Col xs="12" md="10" mdPush="1">
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
                errors={errors}
                message={message}
                onDescriptionChange={this.handleDescription}
                description={description}
                header="Update SubCategory"
              />
              <div style={{ minWidth: "100%" }}>
                <RaisedButton
                  label="Delete"
                  primary={true}
                  style={style}
                  onTouchTap={() =>
                    this.props.deleteSubCategory(this.state.subcategoryId)}
                />
              </div>
              <div style={{ minWidth: "100%" }}>
                <RaisedButton
                  label="Back"
                  style={style}
                  onTouchTap={() =>
                    (window.location.href = "/dashboard/sub-category")}
                />
              </div>
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

SubCategoryBackendEdit.propTypes = {};

const mapStateToProps = ({ subcategoryEdit }) => ({
  subCategory: subcategoryEdit.subCategory,
  errors: subcategoryEdit.errors,
  categories: subcategoryEdit.categories
});

const mapDispatchToProps = dispatch => ({
  updateSubCategory: (subCategory, subcategoryId) =>
    dispatch(updateSubCategory(subCategory, subcategoryId)),
  fetchSubCategory: subcategoryId => dispatch(fetchSubCategory(subcategoryId)),
  deleteSubCategory: subcategoryId =>
    dispatch(deleteSubCategory(subcategoryId)),
  getCategories: () => dispatch(getCategories())
});

// subcategoryEdit
export default connect(mapStateToProps, mapDispatchToProps)(
  SubCategoryBackendEdit
);

const style = {
  margin: "12px 0px"
};

const gemsawesome = {
  propContainer: {
    width: 200,
    overflow: "hidden",
    margin: "20px auto 0"
  },
  propToggleHeader: {
    margin: "20px auto 10px"
  },
  table: {
    marginTop: 100
  },
  paper: {
    padding: 30,
    marginTop: 30
  },
  open: false,
  bodyStyle: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgba(0, 0, 0, 0.87)",
    marginBottom: 50
  },
  wrapperStyle: {
    borderWidth: 1,
    WebkitBorderRadius: 12,
    borderRadius: 0,
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
    zIndex: 1
  }
};
