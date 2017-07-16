import StoreForm from "components/StoreForm";
import React from "react";
import validator from "validator";
import Paper from "material-ui/Paper";
import PropTypes from "prop-types";
import shortid from "shortid";
import axios from "axios";
import sha1 from "sha1";
import superagent from "superagent";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import { browserHistory } from "react-router";
// Material
import MenuItem from "material-ui/MenuItem";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { doSaveMerchant, fetchCategories } from "./actions";

export class StorePage extends React.Component {
  state = {
    merchants: [],
    categories: [],
    merchant: {
      title: "",
      description: "",
      imageUrl: "",
      public_id: "",
      backlink: ""
    },
    dropzoneHint: "Click or Drop files to upload",
    category: [],
    isFeatured: false,
    titleError: "",
    descriptionError: "",
    message: "",
    errors: [],
    about: ""
  };

  componentDidMount() {
    this.props.fetchCategories();
    axios.get("/public-api/merchant").then(response => {
      if (response.data.confirmation === "success") {
        this.setState({ merchants: [...response.data.results] });
      } else {
        this.setState({ errors: response.data.errors });
      }
    });
  }

  handleUpload = files => {
    console.info("uploading file....");
    const updateMerchant = { ...this.state.merchant };
    const image = files[0];
    const cloudName = "deals-expert";
    const timestamp = Date.now() / 1000;
    const uploadPreset = "jznf9zii";
    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}BW5zwfRb1JVXnFQ2i7wxZAKn9-Y`;
    const signature = sha1(paramsStr);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const params = {
      api_key: "125888879194919",
      timestamp: timestamp,
      upload_preset: uploadPreset,
      signature: signature
    };


    this.setState({ dropzoneHint: "uploading image...." });

    let uploadRequest = superagent.post(url);
    uploadRequest.attach("file", image);
    Object.keys(params).forEach(key => {
      uploadRequest.field(key, params[key]);
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        alert(err, null);
        return;
      }
      console.info("Uploading completed");

      const newImage = { ...this.state.merchant };
      newImage.imageUrl = resp.body.secure_url;
      newImage.public_id = resp.body.public_id;
      this.setState({ merchant: newImage, dropzoneHint: "Uploading completed"});
    });
  };

  /**
   * Reset the state after succeful saving of the store to the db.
  */
  resetState = () => {
    const updatedStore = { ...this.state.merchant };
    updatedStore.title = "";
    updatedStore.description = "";
    this.setState({ merchant: updatedStore });
  };

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => {
    this.setState({ isFeatured: value });
  };

  handleAbout = about => this.setState({ about });

  /**
   * Update category in the state and clear error.
  */
  handleCategory = (e, i, value) => {
    this.setState({ categoryError: "" });
    this.setState({ category: value });
  };

  /**
   * Update the state from user input.
  */
  handleChange = e => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = "";
    // Create a current error object.
    errorObject[errorName] = errorValue;
    // Reset clear from the current field.
    this.setState(errorObject);
    // Update the state.
    const updatedStore = {
      ...this.state.merchant,
      isFeatured: this.state.isFeatured
    };
    updatedStore[e.target.id] = e.target.value;
    this.setState({ merchant: updatedStore });
  };

  /**
   * Validate user input and save to the db.
  */
  handleSubmit = () => {
    const { title, description } = this.state.merchant;

    if (validator.isEmpty(title)) {
      this.setState({ titleError: "Title is required!" });
    }
    if (validator.isEmpty(description)) {
      this.setState({ descriptionError: "Description is required!" });
    } else {
      const merchant = {
        ...this.state.merchant,
        isFeatured: this.state.isFeatured,
        subCategory: this.state.category,
        about: this.state.about
      };
      this.props.doSaveMerchant(merchant);
      this.resetState();
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.categories !== this.state.categories) {
      this.setState({ categories: nextProps.categories });
    }
  }

  handleRowSelection = selectedRows => {
    const merchantId = this.state.merchants[selectedRows].id;
    window.location.href = `/dashboard/merchants/${merchantId}`;
  };

  displayCategories = categories =>
    categories.map(category =>
      <MenuItem
        key={category.id}
        value={category.id}
        checked={categories && categories.indexOf(category.id) > -1}
        primaryText={category.title}
      />
    );

  render() {
    const {
      titleError,
      descriptionError,
      errors,
      isFeatured,
      categories,
      category,
      about,
      dropzoneHint
    } = this.state;
    const { title, description, imageUrl, backlink } = this.state.merchant;
    const categoryArray = this.displayCategories(categories);
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Paper zDepth={2} rounded={false} style={gemsgood.paper}>
              <StoreForm
                onChange={this.handleChange}
                onClick={this.handleSubmit}
                titleError={titleError}
                descriptionError={descriptionError}
                title={title}
                description={description}
                errors={errors}
                header="Add a new merchant"
                onFeaturedChange={this.handleIsFeatured}
                imageUrl={imageUrl}
                toggled={isFeatured}
                about={about}
                onAboutChange={this.handleAbout}
                onDropChange={this.handleUpload}
                header="Create Store"
                backlink={backlink}
                category={category}
                onCategoryChange={this.handleCategory}
                categoryArray={categoryArray}
                dropzoneHint={dropzoneHint}
              />
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Table
              wrapperStyle={gemsgood.wrapperStyle}
              bodyStyle={gemsgood.bodyStyle}
              fixedHeader
              selectable
              onRowSelection={this.handleRowSelection}
            >
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn
                    colSpan="12"
                    tooltip="Super Header"
                    style={{
                      textAlign: "center",
                      fontSize: 28,
                      color: "black",
                      padding: 20,
                    }}
                  >
                    A List Of Merchants
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn colSpan="12">Name</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                deselectOnClickaway
                preScanRows={false}
              >
                {this.state.merchants.map((row, index) =>
                  <TableRow
                    style={{ color: "#337ab7" }}
                    key={shortid.generate()}
                  >
                    <TableRowColumn colSpan="12">{row.title}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

StorePage.propTypes = {
  doSaveMerchant: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired
};

const mapStateToProps = ({ merchant }) => ({
  categories: merchant.categories,
  errors: merchant.errors
});

const mapDispatchToProps = dispatch => ({
  doSaveMerchant: merchant => dispatch(doSaveMerchant(merchant)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);

// Styles
const gemsgood = {
  paper: {
    padding: 30,
    marginTop: 30,
    marginBottom: 30
  },
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
