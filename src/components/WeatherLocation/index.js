import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const data = {
    temperature: 25,
    weatherState: "day-sunny",
    humidity: 10,
    wind: "12m/s"
}

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            data,
            city:"Valencia"
        };
        
    }

    handleUpdateClick = ()=>{
        this.setState();
    }

    render = ()=>{
        const {city,data} = this.state;
        return (<div className="weatherLocation">
            <Location city={city}/>
            <WeatherData data={data}  />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>)
    };
}

export default WeatherLocation;