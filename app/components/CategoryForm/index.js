import React from 'react';
import ReactEditor from "components/ReactEditor";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from "material-ui/MenuItem";
import Subheader from 'material-ui/Subheader';

const gems = {
  toggle: {
    marginBottom: 16,
  },
};

class CategoryForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.errors && <p>{this.props.errors}</p>}
        {this.props.message && <p>{this.props.message}</p>}
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>{this.props.header}</Subheader>
        <TextField
          hintText="Category"
          floatingLabelText="category"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.nameError}
          value={this.props.name}
          rowsMax={3}
          multiLine
          rows={1}
        />
        <br/>
        <ReactEditor
          id="description"
          placeholder="Description"
          onChange={this.props.onDescriptionChange}
          value={this.props.description}
        />
        <br/>
        <SelectField
          hintText="Is Category featured ?"
          floatingLabelText="Is Category featured ?"
          id="isFeatured"
          value={this.props.isFeatured}
          onChange={this.props.onFeaturedChange}
          maxHeight={200}
          fullWidth
        >
          <MenuItem value={true} primaryText="Yes, Category is featured!" />
          <MenuItem value={false} primaryText="No" />
        </SelectField>
        <RaisedButton
          label="Save"
          primary
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

CategoryForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  nameError: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  onFeaturedChange: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};

export default CategoryForm;
