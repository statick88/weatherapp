import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = ["Valencia,es","Madrid,es","Barcelona,es"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <LocationList cities={cities}></LocationList>
        </div>
      </div>
    );
  }
}

export default App;
