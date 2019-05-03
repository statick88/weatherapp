import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList =()=>(
    <div>
        <WeatherLocation city="Valencia,es"></WeatherLocation>
        <WeatherLocation city="Buenos Aires,ar"></WeatherLocation>
    </div>
);

export default LocationList;