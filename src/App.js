import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <LocationList ></LocationList>
        </div>
      </div>
    );
  }
}

export default App;
