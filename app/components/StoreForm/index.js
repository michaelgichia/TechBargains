import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const styles = {
  toggle: {
    marginBottom: 16,
  },
}

class StoreForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul style={{ listStyle: 'none' }}>
          {this.props.errors && this.props.errors.map((error) => <li key={shortid.generate()}> <p>{ error }</p> </li>)}
        </ul>
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>{this.props.header}</Subheader>
        <TextField
          hintText="Title"
          id="title"
          floatingLabelText="Title"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.titleError}
          value={this.props.title}
        />
        <TextField
          hintText="Image Url"
          id="imageUrl"
          floatingLabelText="Image Url"
          onChange={this.props.onChange}
          fullWidth
          value={this.props.imageUrl}
        />
        <TextField
          hintText="Description"
          id="description"
          floatingLabelText="Description"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.descriptionError}
          value={this.props.description}
          rowsMax={10}
          multiLine
          rows={5}
        />
        <br />
        <br />
        <Toggle
          label="Is Featured?"
          toggled={this.props.toggled}
          style={styles.toggle}
          onToggle={this.props.onToggle}
          labelPosition="right"
        />
        <RaisedButton
          label="Submit"
          primary
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

StoreForm.propTypes = {
  titleError: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionError: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  toggled: PropTypes.bool.isRequired,
};

export default StoreForm;
