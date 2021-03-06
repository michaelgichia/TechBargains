import React from "react";
import ReactEditor from "components/ReactEditor";
import PropTypes from "prop-types";
import shortid from "shortid";
import Dropzone from "react-dropzone";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
import DatePicker from "material-ui/DatePicker";
import MenuItem from "material-ui/MenuItem";
import ChipInput from "material-ui-chip-input";
import Subheader from "material-ui/Subheader";

import "!!style-loader!css-loader!./add-form.css";

class AddDealForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Subheader
          style={{ fontSize: 24, textAlign: "center", color: "black" }}
        >
          {this.props.header}
        </Subheader>
        <ul style={{ listStyle: "none" }}>
          {this.props.errors &&
            this.props.errors.map(error =>
              <li key={shortid.generate()}> <p>{error}</p> </li>
            )}
        </ul>
        <TextField
          hintText="Name or Title"
          floatingLabelText="Name or Title"
          id="name"
          onChange={this.props.onChange}
          hintStyle={this.props.hintStyle}
          value={this.props.name}
          fullWidth
          errorText={this.props.nameError}
        />
        <ReactEditor
          id="features"
          placeholder="Features"
          onChange={this.props.onFeaturesChange}
          value={this.props.features}
        />
        <ChipInput
          value={this.props.tags}
          fullWidthInput
          fullWidth
          floatingLabelText="Add Item Tags"
          hintText="Add Item Tags"
          onRequestAdd={this.props.onRequestAdd}
          onRequestDelete={this.props.onRequestDelete}
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
          floatingLabelText="Sub Category. Select multiple choices"
          multiple={true}
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
          floatingLabelText="Backlink, format: https://deals-expert.com(MUST)"
          id="backlink"
          onChange={this.props.onChange}
          hintStyle={this.props.hintStyle}
          fullWidth
          value={this.props.backlink}
        />
        <br />
        <br />
        <Dropzone
          onDrop={this.props.onDropChange}
          className="redux-dropzone"
          multiple={false}
        >
          <p>{this.props.image}</p>
        </Dropzone>
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
          hintText="Item expires on ? Tap to pick a date"
          id="expire"
          mode="landscape"
          onChange={this.props.onDateChange}
          fullWidth
          value={this.props.expire}
          hintStyle={{ color: "#e6251f", fontWeight: 700 }}
        />
        <SelectField
          hintText="Is this a Coupon?"
          floatingLabelText="Is this a Coupon?"
          id="isCoupon"
          value={this.props.isCoupon}
          onChange={this.props.onCouponChange}
          maxHeight={200}
          fullWidth
        >
          <MenuItem value primaryText="Yes, it's Coupon." />
          <MenuItem value={false} primaryText="No, it's Deal." />
        </SelectField>
        <SelectField
          hintText="Is Coupon/Deal featured ?"
          floatingLabelText="Is Coupon/Deal featured ?"
          id="isFeatured"
          value={this.props.isFeatured}
          onChange={this.props.onFeaturedChange}
          maxHeight={200}
          fullWidth
        >
          <MenuItem value={true} primaryText="Yes" />
          <MenuItem value={false} primaryText="No" />
        </SelectField>
        <TextField
          hintText="Free shipping / Promotions / Extra information ?"
          floatingLabelText="Free shipping / Promotions / Extra information ?"
          id="isShipped"
          onChange={this.props.onChange}
          hintStyle={this.props.hintStyle}
          value={this.props.isShipped}
          fullWidth
        />
        <br />
        <RaisedButton
          label="Add Item"
          primary
          onClick={this.props.onClick}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

AddDealForm.defaultProps = {
  isShipped: "",
  image: ""
};

AddDealForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  hintStyle: PropTypes.object.isRequired,
  backlink: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  percentageError: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categoryError: PropTypes.string.isRequired,
  categoryArray: PropTypes.array.isRequired,
  onSubCategoryChange: PropTypes.func.isRequired,
  subCategoryError: PropTypes.string.isRequired,
  subCategoryArray: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
  expire: PropTypes.any.isRequired,
  merchantError: PropTypes.string.isRequired,
  coupon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onMerchantChange: PropTypes.func.isRequired,
  merchantArray: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  onFeaturesChange: PropTypes.func.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  isCoupon: PropTypes.bool.isRequired,
  onCouponChange: PropTypes.func.isRequired,
  onFeaturedChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  features: PropTypes.string.isRequired,
  onDropChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default AddDealForm;
