import AddDealForm from 'components/AddDealForm';
import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import sha1 from 'sha1'
import superagent from 'superagent'
// Material-ui
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// Actions
import { postDeal } from './actions';


const hintStyle = {
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

export class AddDeal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      item: {
        coupon: '',
        backlink: '',
        percentage: '',
        isShipped: '',
      },
      image: 'Click or Drop files to upload',
      categoryError: '',
      subCategoryError: '',
      percentageError: '',
      merchantError: '',
      isFeatured: true,
      isCoupon: false,
      merchant: '',
      category: '',
      subCategory: '',
      expire: {},
      errors: [],
      name: '',
      features: '',
      public_id: '',
      disabled: true,
    };
  }// eslint-disable-line

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
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
      "signature": signature
    }
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
    errorObject[errorName] = errorValue;
    // Reset clear from the current field.
    this.setState(errorObject);
    const updateItem = { ...this.state.item };
    updateItem[e.target.id] = e.target.value;
    this.setState({ item: updateItem });
  };

  handleCoupon = (e, isInputChecked) => this.setState({ isCoupon: isInputChecked });

  handleFeatured = (e, isInputChecked) => this.setState({ isFeatured: isInputChecked });

  /**
   * Auto generate theme color.
  */
  generateThemeColors = (colors) => colors[Math.floor(Math.random() * colors.length)];

  onNameChange = (name) => this.setState({ name });

  onFeaturesChange = (features) => this.setState({ features });

  /**
   * Validate user input to avoid empty values sent to the db.
   * Convert percentage value to a Number.
   * Merge several state object and save to the db.
  */
  handleSubmit = () => {
    if (validator.isEmpty(this.state.category)) {
      this.setState({ categoryError: 'Category is required!' });
    }
    if (validator.isEmpty(this.state.subCategory)) {
      this.setState({ subCategoryError: 'Sub-category is required!' });
    }
    if (validator.isEmpty(this.state.merchant)) {
      this.setState({ merchantError: 'Store is required!' });
    } else {
      // Merge
      const updatedState = { ...this.state.item };
      // Generate theme colors.
      const selectedColor = this.generateThemeColors(themesColor);
      // Convert percentage to Number
      const percentageValue = updatedState.percentage;
      updatedState.percentage = Number(percentageValue);

      const item = Object.assign(
        updatedState,
        { name: this.state.name },
        { image: this.state.image },
        { features: this.state.features },
        { ...this.state.item },
        { category: this.state.category },
        { merchant: this.state.merchant },
        { subCategory: this.state.subCategory },
        { expire: this.state.expire },
        { themeColor: selectedColor },
        { isFeatured: this.state.isFeatured },
        { isCoupon: this.state.isCoupon },
        { public_id: this.state.public_id },
      );
      // Create.
      this.props.postDeal(item);
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
      merchantError,
      couponError,
      featuresError,
      percentageError,
      merchant,
      expire,
      errors,
      isFeatured,
      isCoupon,
      features,
      image,
      name,
      disabled,
    } = this.state;
    const {
      percentage,
      backlink,
      coupon,
      isShipped,
    } = this.state.item;

    const { categories, subcategories, merchants } = this.props;
    const categoryArray = this.displayCategories(categories);
    const subCategoryArray = this.displaySubCategories(subcategories);
    const merchantArray = this.displayMerchants(merchants);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={10} mdPush={1}>
            <Paper rounded={false} style={style.paper}>
              <AddDealForm
                onDropChange={this.handleUpload}
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
                onMerchantChange={this.handleMerchantChange}
                merchantArray={merchantArray}
                errors={errors}
                header="Add a Deal or Coupon"
                image={image}
                onNameChange={this.onNameChange}
                onFeaturesChange={this.onFeaturesChange}
                name="Name"
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

AddDeal.propTypes = {
  postDeal: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  merchants: PropTypes.array.isRequired,
  subcategories: PropTypes.array.isRequired,
};

const mapStateToProps = ({ panel, item }) => ({
  categories: panel.categories,
  subcategories: panel.subcategories,
  merchants: panel.merchants,
  errors: item.errors,
});

const mapDispatchToProps = (dispatch) => ({
  postDeal: (item) => dispatch(postDeal(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeal);
