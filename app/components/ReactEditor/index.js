import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";

import "!!style-loader!css-loader!react-quill/dist/quill.snow.css";
import "!!style-loader!css-loader!./react-editor.css";


class ReactEditor extends React.PureComponent {
  render() {
    const modules = {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["link"],
        [{ 'color': [] }], 
        [{ list: "ordered" }, { list: "bullet" }]
      ]
    };
    const formats = [
      "bold",
      "italic",
      "underline",
      "strike",
      "bullet",
      "color",
      "indent",
      "link",
      "list"
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
          theme={"snow"}
          value={this.props.value}
        >
          <div key="editor" ref="editor" className="quill-contents" />
        </ReactQuill>
      </div>
    );
  }
}

ReactEditor.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ReactEditor;


const CustomToolbar = () =>
  <div id="toolbar">
    <button className="ql-bold"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-link">
    </button>
  </div>