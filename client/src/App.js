import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "", songName: "", artistName: "" };

    this.handleSongChange = this.handleSongChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }

  handleSongChange(event) {
    this.setState({songName: event.target.value});
  }

  handleArtistChange(event) {
    console.log("event: ", event.target);
    this.setState({artistName: event.target.value});
  }

  handleSubmit(event) {
    alert('A song was submitted: ' + this.state.songName + ' by: ' + this.state.artistName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <img src="../public/dis.png" className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Input Song Recommendations</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Song Name:
              <input type="text" value={this.state.songName} onChange={this.handleSongChange} />
            </label>
            <br></br>
            <label>
              Artist Name:
              <input type="text" value={this.state.artistName} onChange={this.handleArtistChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </header>
        <p className="intro">{this.state.apiResponse}</p>
      </div>
    );
  }

}

export default App;