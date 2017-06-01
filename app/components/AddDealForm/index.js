import ReactEditor from 'components/ReactEditor';
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

class AddDealForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul style={{ listStyle: 'none' }}>
          {this.props.errors && this.props.errors.map((error) => <li key={shortid.generate()}> <p>{ error }</p> </li>)}
        </ul>
        <p><span>{ this.props.header }</span></p>
        <div>
          <ReactEditor
            id="name"
            placeholder={this.props.name}
            onChange={this.props.onNameChange}
          />
          <ReactEditor
            id="description"
            placeholder={this.props.description}
            onChange={this.props.onDescriptionChange}
          />
          <ReactEditor
            id="features"
            placeholder={this.props.features}
            onChange={this.props.onFeaturesChange}
          />
          <TextField
            hintText="Percentage Discount"
            floatingLabelText="Percentage Discount"
            id="percentage"
            onChange={this.props.onChange}
            hintStyle={this.props.hintStyle}
            value={this.props.percentage}
            fullWidth
            errorText={this.props.percentageError}
          />
          <SelectField
            hintText="Category"
            floatingLabelText="Category"
            id="category"
            value={this.props.category}
            onChange={this.props.onCategoryChange}
            maxHeight={200}
            fullWidth
            errorText={this.props.categoryError}
          >
            {this.props.categoryArray}
          </SelectField>
          <SelectField
            hintText="Sub Category"
            floatingLabelText="Sub Category"
            id="subCategory"
            value={this.props.subCategory}
            onChange={this.props.onSubCategoryChange}
            maxHeight={200}
            fullWidth
            errorText={this.props.subCategoryError}
          >
            {this.props.subCategoryArray}
          </SelectField>
          <SelectField
            hintText="Merchant"
            floatingLabelText="Merchant"
            id="merchant"
            value={this.props.merchant}
            onChange={this.props.onMerchantChange}
            maxHeight={200}
            fullWidth
            errorText={this.props.merchantError}
          >
            {this.props.merchantArray}
          </SelectField>
          <TextField
            hintText="Back Link"
            floatingLabelText="Back Link"
            id="backlink"
            onChange={this.props.onChange}
            hintStyle={this.props.hintStyle}
            fullWidth
            value={this.props.backlink}
          />
          <TextField
            hintText="Image Link"
            floatingLabelText="Image Link"
            id="image"
            onChange={this.props.onChange}
            hintStyle={this.props.hintStyle}
            fullWidth
            value={this.props.image}
          />
          <TextField
            hintText="Coupon Code"
            floatingLabelText="Coupon Code"
            id="coupon"
            onChange={this.props.onChange}
            hintStyle={this.props.hintStyle}
            fullWidth
            value={this.props.coupon}
          />
          <DatePicker
            hintText="Expires on? Tap to pick a date."
            id="expire"
            mode="landscape"
            onChange={this.props.onDateChange}
            formatDate={this.props.formatDate}
            fullWidth
            value={this.props.expire}
          />
          <RaisedButton
            label="Add Item"
            primary
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

AddDealForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  hintStyle: PropTypes.object.isRequired,
  backlink: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  percentageError: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categoryError: PropTypes.string.isRequired,
  categoryArray: PropTypes.array.isRequired,
  subCategory: PropTypes.string.isRequired,
  onSubCategoryChange: PropTypes.func.isRequired,
  subCategoryError: PropTypes.string.isRequired,
  subCategoryArray: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
  expire: PropTypes.object.isRequired,
  merchantError: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  coupon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMerchantChange: PropTypes.func.isRequired,
  merchantArray: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onFeaturesChange: PropTypes.func.isRequired,
};

export default AddDealForm;