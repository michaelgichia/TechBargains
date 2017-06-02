import AddDealForm from 'components/AddDealForm';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import validator from 'validator';
// Material-ui
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
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
        image: '',
      },
      categoryError: '',
      subCategoryError: '',
      percentageError: '',
      merchantError: '',
      merchant: '',
      category: '',
      subCategory: '',
      expire: {},
      errors: [],
      description: '',
      name: '',
      features: '',

    };
  }// eslint-disable-line

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  /**
   * Update date.
  */
  handleDate = (e, expire) => this.setState({ expire });

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

  /**
   * Pretify the date object.
  */
  hadleDateFormat = (expire) => moment(expire).format('MMMM Do, YYYY');

  /**
   * Auto generate theme color.
  */
  generateThemeColors = (colors) => colors[Math.floor(Math.random() * colors.length)];

  onNameChange = (name) => this.setState({ name });

  onDescriptionChange = (description) => this.setState({ description });

  onFeaturesChange = (features) => this.setState({ features });

  /**
   * Validate user input to avoid empty values sent to the db.
   * Convert percentage value to a Number.
   * Merge several state object and save to the db.
  */
  handleSubmit = () => {
    if (validator.isEmpty(this.state.item.percentage)) {
      this.setState({ percentageError: 'Percentage is required!' });
    }
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
        { description: this.state.description },
        { features: this.state.features },
        { ...this.state.item },
        { category: this.state.category },
        { merchant: this.state.merchant },
        { subCategory: this.state.subCategory },
        { expire: this.state.expire },
        { themeColor: selectedColor },
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
      nameError,
      merchantError,
      couponError,
      featuresError,
      percentageError,
      merchant,
      expire,
      errors,
      description,
      name,
      features,
    } = this.state;
    const {
      percentage,
      backlink,
      coupon,
      image,
    } = this.state.item;

    const { categories, subcategories, merchants } = this.props;
    const categoryArray = this.displayCategories(categories);
    const subCategoryArray = this.displaySubCategories(subcategories);
    const merchantArray = this.displayMerchants(merchants);

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Paper rounded={false} style={style.paper}>
              <AddDealForm
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
                formatDate={this.hadleDateFormat}
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
                description={description}
                couponError={couponError}
                onNameChange={this.onNameChange}
                onDescriptionChange={this.onDescriptionChange}
                onFeaturesChange={this.onFeaturesChange}
                name="Name"
                description="Sub title"
                features="Features "
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
