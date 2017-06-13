/*
 *
 * EditItem
 *
 */
import AddDealForm from 'components/AddDealForm';
import React, { PropTypes } from 'react';
import validator from 'validator';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import sha1 from 'sha1'
import superagent from 'superagent'
// Actions
import { getCategories, getSubCategories, getMerchants } from 'containers/Dashboard/actions';
import { fetchItem, updateItem } from './actions';

const hintStyle = {
  fonstSize: 10,
  marginTop: 0,
};

const style = {
  paper: {
    padding: 30,
    marginTop: 30,
  },
};

const themesColor = [
  '#9BF0E9',
  '#ff8400',
  '#C3D6E4',
  '#9f0',
  '#185f9d',
  '#bf46ba',
  '#62bcff',
  '#e87448',
  '#fbaca8',
];

export class EditItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    name: '',
    public_id: '',
    features: '',
    coupon: '',
    backlink: '',
    percentage: '',
    image: '',
    merchant: '',
    category: '',
    subCategory: '',
    expire: {},
    categoryError: '',
    subCategoryError: '',
    percentageError: '',
    merchantError: '',
    isFeatured: true,
    isCoupon: false,
    isShipped: '',
    errors: [],
    disabled: true,
  };

  componentDidMount() {
    const id = this.props.params.itemId;
    // Api call to get items.
    this.props.fetchItem(id);
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
    if (nextProps.itemData.merchant.title !== this.state.merchant) {
      this.setState({ merchant: nextProps.itemData.merchant.title });
    }
    if (nextProps.itemData.category.name !== this.state.category) {
      this.setState({ category: nextProps.itemData.category.name });
    }
    if (nextProps.itemData.subCategory.title !== this.state.subCategory) {
      this.setState({ subCategory: nextProps.itemData.subCategory.title });
    }
    if (nextProps.itemData.subCategory.isShipped !== this.state.isShipped) {
      this.setState({ isShipped: nextProps.itemData.isShipped });
    }
  }

  handleUpload = (files) => {
    console.info('uploading file....')
    const image = files[0]
    const cloudName = 'dw3arrxnf'
    const timestamp = Date.now()/1000
    const uploadPreset = 'd9s7ezzn'
    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'wEvwDjpdDR5I_mMSdD55EaLNXOI'
    const signature = sha1(paramsStr)
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const params = {
      "api_key": "217319541859423",
      "timestamp": timestamp,
      "upload_preset": uploadPreset,
      "signature": signature,
    }
    this.setState((prevState, props) => ({image: 'uploading image...'}))
    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)
    Object.keys(params).forEach((key) => {
      uploadRequest.field(key, params[key])
    });

    uploadRequest.end((err, resp) => {
      if (err) {
        console.error(err);
        alert(err, null)
        return;
      }
      console.info("uploading completed...");
      this.setState((prevState, props) => ({
        image: resp.body.secure_url,
        public_id: resp.body.public_id
      }))
    })
  }

  /**
   * Update date.
  */
  handleDate = (e, expire) => this.setState((prevState, props) => ({
    expire: expire,
    disabled: false
  }));

  onNameChange = (name) => this.setState({ name });

  /**
   * Update merchant in the state and clear error.
  */
  handleMerchantChange = (e, i, value) => {
    this.setState({ merchantError: '' });
    this.setState({ merchant: value });
  };

  /**
   * Update category in the state and clear error.
  */
  handleCategory = (e, i, value) => {
    this.setState({ categoryError: '' });
    this.setState({ category: value });
  };

  /**
   * Update subCategory in the state and clear error.
  */
  handleSubcategory = (e, i, value) => {
    this.setState({ subCategoryError: '' });
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
  handleChange = (e) => {
    const errorObject = {};
    const errorName = `${e.target.id}Error`;
    const errorValue = '';
    // Create a current error object.
    // Reset clear from the current field.
    errorObject[errorName] = errorValue;
    this.setState(errorObject);

    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * Auto generate theme color.
  */
  generateThemeColors = (colors) => colors[Math.floor(Math.random() * colors.length)];

  onNameChange = (name) => this.setState({ name });

  onFeaturesChange = (features) => this.setState({ features });

  /**
   * Validate user input to avoid empty values sent to the db.
   * Merge several state object and save to the db.
  */
  handleSubmit = () => {
    if (validator.isEmpty(this.state.subCategory)) {
      this.setState({ subCategoryError: 'Sub-category is required!' });
    }
    if (validator.isEmpty(this.state.category)) {
      this.setState({ categoryError: 'Category is required!' });
    }
    if (validator.isEmpty(this.state.merchant)) {
      this.setState({ merchantError: 'Store is required!' });
    } else {
      // Merge.
      this.setState((prevState, props) => ({disabled: false}));
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
        { expire: this.state.expire },
        { themeColor: selectedColor },
        { isFeatured: this.state.isFeatured },
        { isCoupon: this.state.isCoupon },
        { isShipped: this.state.isShipped },
        { public_id: this.state.public_id },
      );
      // Item id.
      const itemId = this.props.params.itemId;
      // Create.
      this.props.updateItem(data, itemId);
    }
  }

  displayCategories = (categories) => {
    const categoryArray = [];
    if (categories !== undefined && categories.length > 0) {
      categories.map((category) => (
        categoryArray.push(<MenuItem
          value={category.id}
          key={category.id}
          primaryText={category.name}
        />
        )
      ));
    } else {
      categoryArray.push(<MenuItem
        value={'59087201dc2e353c2d440030'}
        key={'categoryid'}
        primaryText={'No categories found. please add them.'}
      />
      );
    }
    return categoryArray;
  }

  displaySubCategories = (subcategories) => {
    const subCategoryArray = [];
    if (subcategories !== undefined && subcategories.length > 0) {
      subcategories.map((subcategory) => (
        subCategoryArray.push(<MenuItem
          value={subcategory.id}
          key={subcategory.id}
          primaryText={subcategory.title}
        />
        )
      ));
    } else {
      subCategoryArray.push(<MenuItem
        value={'59087201dc2e353c2d440030'}
        key={'subcategorid'}
        primaryText={'No sub-categories found. please add them.'}
      />
      );
    }
    return subCategoryArray;
  }

  displayMerchants = (merchants) => {
    const merchantArray = [];
    if (merchants !== undefined && merchants.length > 0) {
      merchants.map((merchant) => (
        merchantArray.push(<MenuItem
          value={merchant.id}
          key={merchant.id}
          primaryText={merchant.title}
        />
        )
      ));
    } else {
      merchantArray.push(<MenuItem
        value={'59087201dc2e353c2d440030'}
        key={'merchantid'}
        primaryText={'No merchants found. please add them.'}
      />
      );
    }
    return merchantArray;
  }

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
    } = this.state;

    const { categories, subcategories, merchants } = this.props;
    const categoryArray = this.displayCategories(categories);
    const subCategoryArray = this.displaySubCategories(subcategories);
    const merchantArray = this.displayMerchants(merchants);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={8} mdPush={2}>
            <Paper rounded={false} style={style.paper}>
              <AddDealForm
                onDropChange={this.handleUpload}
                onNameChange={this.onNameChange}
                onClick={this.handleSubmit}
                onChange={this.handleChange}
                hintStyle={hintStyle}
                subCategoryArray={subCategoryArray}
                categoryArray={categoryArray}
                category={category}
                subCategory={subCategory}
                onCategoryChange={this.handleCategory}
                onSubCategoryChange={this.handleSubcategory}
                onDateChange={this.handleDate}
                categoryError={categoryError}
                subCategoryError={subCategoryError}
                nameError={nameError}
                percentageError={percentageError}
                merchantError={merchantError}
                couponError={couponError}
                featuresError={featuresError}
                name={name}
                backlink={backlink}
                percentage={percentage}
                expire={expire}
                merchant={merchant}
                coupon={coupon}
                features={features}
                onMerchantChange={this.handleMerchantChange}
                merchantArray={merchantArray}
                errors={errors}
                message={message}
                header="Edit an Item or a Coupon"
                image={image}
                onNameChange={this.onNameChange}
                onFeaturesChange={this.onFeaturesChange}
                isFeatured={isFeatured}
                isCoupon={isCoupon}
                onCouponChange={this.handleIsCoupon}
                onFeaturedChange={this.handleIsFeatured}
                isShipped={isShipped}
                name={name}
                features={features}
                disabled={disabled}
              />
            </Paper>
          </Col>
        </Row>
      </Grid>
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
  subcategories: PropTypes.array.isRequired,
};

EditItem.defaultProps = {
  itemId: '',
};

const mapStateToProps = ({ panel, editItem }) => ({
  categories: panel.categories,
  subcategories: panel.subcategories,
  merchants: panel.merchants,
  errors: editItem.errors,
  message: editItem.message,
  itemData: editItem.itemData,
});

const mapDispatchToProps = (dispatch) => ({
  updateItem: (item, itemId) => dispatch(updateItem(item, itemId)),
  fetchItem: (itemId) => dispatch(fetchItem(itemId)),
  getCategories: () => dispatch(getCategories()),
  getSubCategories: () => dispatch(getSubCategories()),
  getMerchants: () => dispatch(getMerchants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
