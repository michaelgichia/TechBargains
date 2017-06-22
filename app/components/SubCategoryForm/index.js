import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import ReactEditor from "components/ReactEditor";
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';


class SubCategoryForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul style={{ listStyle: 'none' }}>
          { this.props.errors &&  <p>{ this.props.errors }</p> }
        </ul>
        {this.props.message && <p>{this.props.message}</p>}
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>{ this.props.header }</Subheader>
        <TextField
          hintText="Title"
          floatingLabelText="Title"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.titleError}
          value={this.props.title}
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
          floatingLabelText="Choose a category."
          value={this.props.category}
          onChange={this.props.onCategoryChange}
          maxHeight={200}
          fullWidth
          errorText={this.props.categoryError}
        >
          {this.props.categoryArray}
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

SubCategoryForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  categoryArray: PropTypes.array.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  categoryError: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleError: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default SubCategoryForm;
