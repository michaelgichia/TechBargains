import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
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
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>Create Category</Subheader>
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
        <Toggle
          label="Is Category featured ?"
          defaultToggled={false}
          style={gems.toggle}
          onToggle={this.props.onToggle}
          labelPosition="right"
          toggled={this.props.toggled}
        />
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
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
};

export default CategoryForm;
