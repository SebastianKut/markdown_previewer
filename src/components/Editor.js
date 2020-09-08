import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return (
            <div id="editor-wrapper">
                <div className="header">
                    <p>Editor</p>
                </div>
                <div id="input-wrapper">
        <textarea id="editor" onChange={this.props.handleChange}>{this.props.input}</textarea>
                </div>
            </div>
        )
    }
}

export default Editor
