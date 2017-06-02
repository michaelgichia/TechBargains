import CustomToolbar from 'components/CustomToolbar';
import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: [['bold', 'italic', 'underline'], ['link']],
};
const formats = [
  'bold', 'italic', 'underline', 'bullet', 'indent', 'link',
];
// Handler example
// handleChange = (html) => this.setState({ editorHtml: html });

const ReactEditor = ({ onChange, placeholder, id }) => (
  <div className="text-editor">
    <CustomToolbar />
    <ReactQuill
      id={id}
      onChange={onChange}
      placeholder={placeholder}
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

ReactEditor.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReactEditor;
