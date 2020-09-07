import React, { Component } from 'react'

class Previewer extends Component {
    render() {
        return (
            <div id="preview-wrapper">
                <div className="header">
                    <p>Previewer</p>
                    <button className="btn">X</button>
                </div>
                <div id="preview">{this.props.display}</div>
            </div>
        )
    }
}

export default Previewer
