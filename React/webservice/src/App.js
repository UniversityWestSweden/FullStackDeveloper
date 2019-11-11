import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var picArray = [];

class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount() {
    fetch("https://api.flickr.com/services/feeds/photos_public.gne?tags=dogs&format=json&nojsoncallback=true") 
    .then(response => {console.log(response);return response.json();})
    .then(function(responseData) {
      responseData.items.forEach(function(obj) {
        console.log(obj); 
        picArray.push("<img alt=\"" + obj.title + "\" src=\"" + obj.media.m + "\"></img>"); 
      }); 
      this.setState({pictures: picArray});
    }.bind(this))
    .catch((err) => {
    console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div dangerouslySetInnerHTML={{__html: this.state.pictures}}></div>
        <p className="App-intro">
        {this.state.pictures}
        </p>
      </div>
    );
  }
}

export default App;
