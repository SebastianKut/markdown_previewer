import React, { Component } from 'react';

const marked = window.marked;

marked.setOptions({
    breaks: true,
  });

class Previewer extends Component {
    render() {
        const renderInput = (string) => marked(string);
        return (
            <div id="preview-wrapper">
                <div className="header">
                    <p>Previewer</p>
                </div>
                <div id="preview" dangerouslySetInnerHTML={{__html: renderInput(this.props.display)}}></div>
            </div>
        )
    }
}

export default Previewer
