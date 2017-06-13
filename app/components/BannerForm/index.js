/**
*
* BannerForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Dropzone from 'react-dropzone'
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Subheader from 'material-ui/Subheader';

class BannerForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.errors && <p>{this.props.errors}</p>}
        {this.props.message && <p>{this.props.message}</p>}
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>{this.props.formTitle}</Subheader>
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
          hintText="Backlink"
          id="backlink"
          floatingLabelText="Backlink"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.backlinkError}
          value={this.props.backlink}
        />
        <br />
        <br />
        <Toggle
          label="Is Banner featured ?"
          onToggle={this.props.onToggle}
          labelPosition="right"
          toggled={this.props.toggled}
        />
        <br/>
        <br/>
        <Dropzone
          onDrop={this.props.onDropChange}
          className="redux-dropzone"
          multiple={false}
          >
          <p>{this.props.imageUrl}</p>
        </Dropzone>
        <br />
        <RaisedButton
          label="Save"
          primary
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

BannerForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  titleError: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrlError: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  backlinkError: PropTypes.string.isRequired,
  backlink: PropTypes.string.isRequired,
  errors: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  toggled: PropTypes.bool.isRequired,
  formTitle: PropTypes.string.isRequired,
  onDropChange: PropTypes.func.isRequired,
};

export default BannerForm;
