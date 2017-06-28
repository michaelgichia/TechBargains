import React from "react";
import ReactEditor from "components/ReactEditor";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import shortid from "shortid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Subheader from "material-ui/Subheader";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  toggle: {
    marginBottom: 16
  }
};

class StoreForm extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {this.props.errors &&
            this.props.errors.map(error =>
              <li key={shortid.generate()}> <p>{error}</p> </li>
            )}
        </ul>
        <Subheader
          style={{ fontSize: 24, textAlign: "center", color: "black" }}
        >
          {this.props.header}
        </Subheader>
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
          hintText="Back Link"
          floatingLabelText="Back Link"
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
          <p>{this.props.imageUrl}</p>
        </Dropzone>
        <br/>
        <TextField
          hintText="Description"
          id="description"
          floatingLabelText="Description"
          onChange={this.props.onChange}
          fullWidth
          errorText={this.props.descriptionError}
          value={this.props.description}
          rowsMax={5}
          multiLine
          rows={2}
        />
        <ReactEditor
          id="about"
          placeholder="About Store"
          onChange={this.props.onAboutChange}
          value={this.props.about}
        />
        <br />
        <SelectField
          hintText="Is Store / Merchant featured ?"
          floatingLabelText="Is Store / Merchant featured ?"
          id="isFeatured"
          value={this.props.toggled}
          onChange={this.props.onFeaturedChange}
          maxHeight={200}
          fullWidth
        >
          <MenuItem value={true} primaryText="Yes" />
          <MenuItem value={false} primaryText="No" />
        </SelectField>
        <br/>
        <SelectField
          hintText="Categories: select multiple choices"
          floatingLabelText="Categories: select multiple choices"
          multiple={true}
          id="category"
          value={this.props.category}
          onChange={this.props.onCategoryChange}
          maxHeight={200}
          fullWidth
          errorText={this.props.categoryError}
        >
          {this.props.categoryArray}
        </SelectField>
        <br />
        <br />
        <RaisedButton label="Submit" primary onClick={this.props.onClick} />
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
  onFeaturedChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  toggled: PropTypes.bool.isRequired,
  onAboutChange: PropTypes.func.isRequired,
  about: PropTypes.string.isRequired,
  onDropChange: PropTypes.func.isRequired,
  backlink: PropTypes.string.isRequired,
  categoryArray: PropTypes.array.isRequired,
  onCategoryChange: PropTypes.func.isRequired
};

export default StoreForm;
