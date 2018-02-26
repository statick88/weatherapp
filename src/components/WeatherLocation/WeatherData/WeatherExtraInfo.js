import React from 'react';
import PropTypes from 'prop-types';

//template string
const WeatherExtraInfo = ({humidity,wind}) =>(
    <div className='weatherExtraCont'>
        <span className="weatherExtraSubCount">Humedad: {`${humidity} %`}</span>
        <span className="weatherExtraSubCount">Viento: {wind}</span>
    </div>
);

WeatherExtraInfo.protoType = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;