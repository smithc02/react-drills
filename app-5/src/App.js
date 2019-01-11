import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImg={'https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA17563-1920x1200.jpg'}/>
      </div>
    );
  }
}

export default App;
