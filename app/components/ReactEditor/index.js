import CustomToolbar from 'components/CustomToolbar';
import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import '!!style-loader!css-loader!react-quill/dist/quill.snow.css';

class ReactEditor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const modules = {
      toolbar: [['bold', 'italic', 'underline'], ['link']],
    };
    const formats = [
      'bold', 'italic', 'underline', 'bullet', 'indent', 'link',
    ];
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          id={this.props.id}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          modules={modules}
          formats={formats}
          theme={'snow'}
        >
          <div
            key="editor"
            ref="editor"
            className="quill-contents"
          />
        </ReactQuill>
      </div>
    );
  }
}

ReactEditor.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReactEditor;
