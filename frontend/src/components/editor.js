import "./editor.css";
import React from "react";

class Editor extends React.Component {
  render() {
    return (
      <div className="editor">
        <div className="header">
          <div className="window-btns">
            <div className="btn btn-close"></div>
            <div className="btn btn-minimize"></div>
            <div className="btn btn-maximize"></div>
          </div>
        </div>
        <div className="tabs"></div>
      </div>
    );
  }
}
export default Editor;
