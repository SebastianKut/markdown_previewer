import React, { Component } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const parseInput = (string) => string;
    return (
      <div id="app-container">
        <Editor handleChange={this.handleChange} value={this.state.input}/>
        <Previewer display={parseInput(this.state.input)}/>
      </div>
    )
  }
}

export default App
