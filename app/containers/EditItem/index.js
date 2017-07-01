/*
 *
 * EditItem
 *
 */
import AddDealForm from "components/AddDealForm";
import React, { PropTypes } from "react";
import validator from "validator";
import { connect } from "react-redux";
import MenuItem from "material-ui/MenuItem";
import Paper from "material-ui/Paper";
import { Container, Row, Col } from 'reactstrap';
import sha1 from "sha1";
import superagent from "superagent";

// Actions
import {
  getCategories,
  getSubCategories,
  getMerchants
} from "containers/Dashboard/actions";
import { fetchItem, updateItem } from "./actions";

export class EditItem extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    name: "",
    public_id: "",
    features: "",
    coupon: "",
    backlink: "",
    percentage: "",
    image: "Click or Drop files to upload",
    merchant: "",
    category: "",
    subCategory: [],
    expire: {},
    isFeatured: true,
    isCoupon: false,
    isShipped: "",
    tags: [],
    categoryError: "",
    subCategoryError: "",
    percentageError: "",
    merchantError: "",
    errors: [],
    disabled: true
  };

  componentDidMount() {
    const { itemId } = this.props.params;
    this.props.fetchItem(itemId);
    this.props.getCategories();
    this.props.getSubCategories();
    this.props.getMerchants();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.itemData.name !== this.state.name) {
      this.setState({ name: nextProps.itemData.name });
    }
    if (nextProps.itemData.public_id !== this.state.public_id) {
      this.setState({ public_id: nextProps.itemData.public_id });
    }
    if (nextProps.itemData.features !== this.state.features) {
      this.setState({ features: nextProps.itemData.features });
    }
    if (nextProps.itemData.coupon !== this.state.coupon) {
      this.setState({ coupon: nextProps.itemData.coupon });
    }
    if (nextProps.itemData.backlink !== this.state.backlink) {
      this.setState({ backlink: nextProps.itemData.backlink });
    }
    if (nextProps.itemData.percentage !== this.state.percentage) {
      this.setState({ percentage: nextProps.itemData.percentage });
    }
    if (nextProps.itemData.image !== this.state.image) {
      this.setState({ image: nextProps.itemData.image });
    }
    if (nextProps.itemData.tags !== this.state.tags) {
      this.setState({ tags: nextProps.itemData.tags });
    }
    if (nextProps.itemData.isShipped !== this.state.isShipped) {
      this.setState({ isShipped: nextProps.itemData.isShipped });
    }
  }

  handleUpload = files => {
    console.info("uploading file....");
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

    this.setState(() => ({ image: "Uploading image......" }));
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
      this.setState(() => ({
        image: resp.body.secure_url,
        public_id: resp.body.public_id
      }));
    });
  };

  /**
   * Update date.
  */
  handleDate = (e, expire) =>
    this.setState((prevState) => ({
      expire,
      disabled: false
    }));

  /**
   * Update merchant in the state and clear error.
  */
  handleMerchantChange = (e, i, value) => {
    this.setState({ merchantError: "" });
    this.setState({ merchant: value });
  };

  /**
   * Update category in the state and clear error.
  */
  handleCategory = (e, i, value) => {
    this.setState({ categoryError: "" });
    this.setState({ category: value });
  };

  /**
   * Update subCategory in the state and clear error.
  */
  handleSubcategory = (e, i, value) => {
    this.setState({ subCategoryError: "" });
    this.setState({ subCategory: value });
  };

  /**
   * Update isFeatured in the state and clear error.
  */
  handleIsFeatured = (e, i, value) => {
    this.setState({ isFeatured: value });
  };

  /**
   * Update isCoupon in the state and clear error.
  */
  handleIsCoupon = (e, i, value) => {
    this.setState({ isCoupon: value });
  };

  /**
   * Update the state from user input.
   * Clear error using dynamic keys on the setState.
  */
  handleChange = e => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = "";
    errorObject[errorName] = errorValue;
    this.setState(errorObject);

    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * Auto generate theme color.
  */
  generateThemeColors = colors =>
    colors[Math.floor(Math.random() * colors.length)];

  onFeaturesChange = features => this.setState({ features });

  handleRequestAdd = (...tags) =>
    this.setState({ tags: [...this.state.tags, ...tags] });

  handleRequestDelete = deletedChip =>
    this.setState({ tags: this.state.tags.filter(c => c !== deletedChip) });

  /**
   * Validate user input to avoid empty values sent to the db.
   * Merge several state object and save to the db.
  */
  handleSubmit = () => {
    if (validator.isEmpty(this.state.category)) {
      this.setState({ categoryError: "Category is required!" });
    }
    if (validator.isEmpty(this.state.merchant)) {
      this.setState({ merchantError: "Store is required!" });
    } else {
      // Merge.
      this.setState(prevState => ({ disabled: false }));
      const selectedColor = this.generateThemeColors(themesColor);

      const data = Object.assign(
        { name: this.state.name },
        { features: this.state.features },
        { coupon: this.state.coupon },
        { backlink: this.state.backlink },
        { percentage: this.state.percentage },
        { image: this.state.image },
        { category: this.state.category },
        { merchant: this.state.merchant },
        { subCategory: this.state.subCategory },
        { expire: +new Date(this.state.expire) },
        { themeColor: selectedColor },
        { isFeatured: this.state.isFeatured },
        { isCoupon: this.state.isCoupon },
        { isShipped: this.state.isShipped },
        { public_id: this.state.public_id },
        { tags: [...this.state.tags] }
      );
      // Item id.
      const { itemId } = this.props.params;
      // Create.
      this.props.updateItem(data, itemId);
    }
  };

  displayCategories = categories => 
    categories.map(category => 
      <MenuItem
        key={category.id}
        value={category.id}
        checked={categories && categories.indexOf(category.id) > -1}
        primaryText={category.name}
      />
    );

  displaySubCategories = subcategories =>
    subcategories.map(subcategory =>
      <MenuItem
        key={subcategory.id}
        insetChildren={true}
        checked={subcategories && subcategories.indexOf(subcategory.id) > -1}
        value={subcategory.id}
        primaryText={subcategory.title}
      />
    );

  displayMerchants = merchants => 
    merchants.map(merchant => 
      <MenuItem
        key={merchant.id}
        value={merchant.id}
        checked={merchants && merchants.indexOf(merchant.id) > -1}
        primaryText={merchant.title}
      />
    );

  render() {
    const {
      categoryError,
      subCategoryError,
      category,
      subCategory,
      nameError,
      merchantError,
      couponError,
      featuresError,
      percentageError,
      name,
      merchant,
      expire,
      errors,
      features,
      message,
      percentage,
      backlink,
      coupon,
      image,
      isCoupon,
      isFeatured,
      isShipped,
      disabled,
      tags
    } = this.state;

    const { categories, subcategories, merchants } = this.props;
    const categoryArray = this.displayCategories(categories);
    const subCategoryArray = this.displaySubCategories(subcategories);
    const merchantArray = this.displayMerchants(merchants);

    return (
      <Container>
        <Row>
          <Col xs="12" md="10" >
            <Paper rounded={false} style={style.paper}>
              <AddDealForm
                header="Edit an Item or a Coupon"
                onDropChange={this.handleUpload}
                onClick={this.handleSubmit}
                onChange={this.handleChange}
                onCategoryChange={this.handleCategory}
                onSubCategoryChange={this.handleSubcategory}
                onDateChange={this.handleDate}
                onMerchantChange={this.handleMerchantChange}
                onFeaturesChange={this.onFeaturesChange}
                onCouponChange={this.handleIsCoupon}
                onFeaturedChange={this.handleIsFeatured}
                onRequestAdd={tagsArray => this.handleRequestAdd(tagsArray)}
                onRequestDelete={this.handleRequestDelete}
                hintStyle={hintStyle}
                subCategoryArray={subCategoryArray}
                categoryArray={categoryArray}
                category={category}
                subCategory={subCategory}
                categoryError={categoryError}
                subCategoryError={subCategoryError}
                nameError={nameError}
                percentageError={percentageError}
                merchantError={merchantError}
                couponError={couponError}
                featuresError={featuresError}
                backlink={backlink}
                percentage={percentage}
                expire={expire}
                merchant={merchant}
                coupon={coupon}
                features={features}
                merchantArray={merchantArray}
                errors={errors}
                message={message}
                image={image}
                isFeatured={isFeatured}
                isCoupon={isCoupon}
                isShipped={isShipped}
                name={name}
                disabled={disabled}
                tags={tags}
              />
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

EditItem.propTypes = {
  fetchItem: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getMerchants: PropTypes.func.isRequired,
  getSubCategories: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  itemData: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  merchants: PropTypes.array.isRequired,
  subcategories: PropTypes.array.isRequired
};

EditItem.defaultProps = {
  itemId: ""
};

const mapStateToProps = ({ panel, editItem }) => ({
  categories: panel.categories,
  subcategories: panel.subcategories,
  merchants: panel.merchants,
  errors: editItem.errors,
  message: editItem.message,
  itemData: editItem.itemData
});

const mapDispatchToProps = dispatch => ({
  updateItem: (item, itemId) => dispatch(updateItem(item, itemId)),
  fetchItem: itemId => dispatch(fetchItem(itemId)),
  getCategories: () => dispatch(getCategories()),
  getSubCategories: () => dispatch(getSubCategories()),
  getMerchants: () => dispatch(getMerchants())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);

// Styles

const hintStyle = {
  fonstSize: 10,
  marginTop: 0
};

const style = {
  paper: {
    padding: 30,
    marginTop: 30
  }
};

const themesColor = [
  "#9BF0E9",
  "#ff8400",
  "#C3D6E4",
  "#9f0",
  "#185f9d",
  "#bf46ba",
  "#62bcff",
  "#e87448",
  "#fbaca8"
];