import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return (
            <div id="editor-wrapper">
                <div className="header">
                    <p>Editor</p>
                    <button className="btn">X</button>
                </div>
                <div id="input-wrapper">
                    <textarea id="editor" onChange={this.props.handleChange}/>
                </div>
            </div>
        )
    }
}

export default Editor
