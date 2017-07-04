/*
 *
 * MerchantEdit
 *
 */

import React from "react";
import StoreForm from "components/StoreForm";
import validator from "validator";
import { connect } from "react-redux";
import sha1 from "sha1";
import superagent from "superagent";
import { Container, Row, Col } from 'reactstrap';
import axios from "axios";
// Material-ui
import Paper from "material-ui/Paper";
import MenuItem from "material-ui/MenuItem";

import Auth from "../Utils";
import { postMerchant, fetchMerchant, fetchCategories } from "./actions";

// Token
const token = `bearer ${Auth.getToken()}`;
axios.defaults.headers.common.Authorization = token;

export class MerchantEdit extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    merchant: {
      title: "",
      description: "",
      imageUrl: "",
      public_id: "",
      backlink: ""
    },
    categories: [],
    dropzoneHint: "Click or Drop files to upload",
    category: [],
    isFeatured: false,
    about: "",
    titleError: "",
    descriptionError: "",
    errors: [],
    merchantId: null
  };

  componentDidMount() {
    const { merchantId } = this.props.params;
    this.props.fetchMerchant(merchantId);
    this.props.fetchCategories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.merchant !== this.state.merchant) {
      this.setState(() => ({ merchant: nextProps.merchant }));
    }
    if (nextProps.categories !== this.state.categories) {
      this.setState(() => ({ categories: nextProps.categories }));
    }
    if (nextProps.isFeatured !== this.state.isFeatured) {
      this.setState(() => ({ isFeatured: nextProps.isFeatured }));
    }
    if (nextProps.about !== this.state.about) {
      this.setState(() => ({ about: nextProps.about }));
    }
  }

  /**
   * Reset the state after succeful saving of the store to the db.
  */
  resetState = () => {
    const updatedStore = { ...this.state.merchant };
    updatedStore.title = "";
    updatedStore.description = "";
    this.setState({ merchant: updatedStore });
  };

  handleUpload = files => {
    console.info("uploading file....");
    const updateMerchant = { ...this.state.merchant };
    const image = files[0];
    const cloudName = "dw3arrxnf";
    const timestamp = Date.now() / 1000;
    const uploadPreset = "d9s7ezzn";
    const paramsStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}wEvwDjpdDR5I_mMSdD55EaLNXOI`;
    const signature = sha1(paramsStr);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const params = {
      api_key: "217319541859423",
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
      console.info("uploading completed...");

      const newImage = { ...this.state.merchant };
      newImage.imageUrl = resp.body.secure_url;
      newImage.public_id = resp.body.public_id;
      this.setState({ merchant: newImage, dropzoneHint: "Uploading completed"});
    });
  };

  /**
   * Handle error.
  */
  handelError = e => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = "";
    errorObject[errorName] = errorValue;
    this.setState(errorObject);
  };

  /**
   * Update the state from user input.
  */
  handleChange = e => {
    this.handelError(e);
    const updatedStore = { ...this.state.merchant };
    updatedStore[e.target.id] = e.target.value;
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
      const { merchantId } = this.props.params;
      this.props.postMerchant(merchantId, merchant);
      this.resetState();
    }
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
      category,
      categories,
      about,
      dropzoneHint
    } = this.state;
    const { title, description, imageUrl, backlink } = this.state.merchant;
    const categoryArray = this.displayCategories(categories);
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Paper zDepth={2} rounded={false} style={gems6.paper}>
              <StoreForm
                onChange={this.handleChange}
                onClick={this.handleSubmit}
                titleError={titleError}
                descriptionError={descriptionError}
                title={title}
                description={description}
                errors={errors}
                header="Edit merchant"
                imageUrl={imageUrl}
                toggled={isFeatured}
                about={about}
                onAboutChange={this.handleAbout}
                onFeaturedChange={this.handleIsFeatured}
                onDropChange={this.handleUpload}
                backlink={backlink}
                category={category}
                onCategoryChange={this.handleCategory}
                categoryArray={categoryArray}
                dropzoneHint={dropzoneHint}
              />
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

MerchantEdit.propTypes = {};

const mapStateToProps = ({ merchantEdit }) => ({
  merchant: merchantEdit.merchant,
  isFeatured: merchantEdit.isFeatured,
  about: merchantEdit.about,
  categories: merchantEdit.categories
});

const mapDispatchToProps = dispatch => ({
  postMerchant: (merchantId, merchant) =>
    dispatch(postMerchant(merchantId, merchant)),
  fetchMerchant: merchantId => dispatch(fetchMerchant(merchantId)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantEdit);

//Styles
const gems6 = {
  paper: {
    padding: 30,
    marginTop: 30
  }
};
