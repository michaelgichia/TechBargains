/*
 *
 * CategoryBackendEdit
 *
 */

import React from "react";
import CategoryForm from "components/CategoryForm";
import shortid from "shortid";
import Paper from "material-ui/Paper";
import { Card, CardHeader, CardText, CardActions } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import ExitIcon from "material-ui/svg-icons/action/exit-to-app";
import Divider from "material-ui/Divider";
import { Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";
import { gems } from "./gem";
import { updateCategory, fetchCategory, deleteCategory } from "./actions";

export class CategoryBackendEdit extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: "",
    isFeatured: false,
    description: "",
    nameError: "",
    errors: "",
    message: "",
    categoryId: ""
  }; // eslint-disable-line

  componentDidMount() {
    const { categoryId } = this.props.params;
    this.setState(prevState => ({ categoryId }));
    this.props.fetchCategory(categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.category.name !== this.state.name) {
      this.setState({ name: nextProps.category.name });
    }
    if (nextProps.category.description !== this.state.description) {
      this.setState({ description: nextProps.category.description });
    }
    if (nextProps.category.isFeatured !== this.state.isFeatured) {
      this.setState({ isFeatured: nextProps.category.isFeatured });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => this.setState({ isFeatured: value });

  handleDescription = description => this.setState({ description });

  handleChange = e => {
    this.setState({ nameError: "" });
    this.setState({ name: e.target.value });
  };

  resetState = () =>
    this.setState(prevState => ({
      name: "",
      isFeatured: false,
      description: ""
    }));

  handleSubmit = () => {
    const { name, isFeatured, description, categoryId } = this.state;
    if (name.length < 1) {
      this.setState({ nameError: "This field is required." });
    } else {
      this.props.updateCategory({ name, isFeatured, description }, categoryId);
      this.resetState();
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
          <Col xs="12" md="10" >
            <Card style={{ marginTop: 20 }}>
              <CardHeader
                titleStyle={{ fontSize: 26, fontFamily: "Roboto slab" }}
                titleColor="black"
                title="Category Infomation"
              />
              <CardActions>
                <FlatButton
                  icon={<DeleteIcon />}
                  label="Delete"
                  onTouchTap={() =>
                    this.props.deleteCategory(this.state.categoryId)}
                />
                <FlatButton
                  icon={<ExitIcon />}
                  label="Back to category list"
                  href="/dashboard/category"
                />
              </CardActions>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="10" >
            <Card style={{ marginTop: 30 }} initiallyExpanded>
              <CardHeader
                title={name}
                titleStyle={{ marginBottom: 30 }}
                actAsExpander
                showExpandableButton
              />
              <CardText>
                {`Is featured: ${isFeatured}`}
              </CardText>
              <Divider />
              <CardText expandable>
                <h4>Description</h4>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="10" >
            <Paper zDepth={1} rounded={false} style={gems.paper}>
              <CategoryForm
                header="Update Category Instantly"
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
      </Container>
    );
  }
}

CategoryBackendEdit.propTypes = {};

const mapStateToProps = ({ categoryEdit }) => ({
  category: categoryEdit.category,
  errors: categoryEdit.errors
});

const mapDispatchToProps = dispatch => ({
  updateCategory: (id, category) => dispatch(updateCategory(id, category)),
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
  deleteCategory: id => dispatch(deleteCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  CategoryBackendEdit
);
