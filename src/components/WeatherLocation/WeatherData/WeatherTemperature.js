import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const WeatherTemperature = ({temperature, weatherState="na"}) => (
    <div className='weatherTemCont'>
        <WeatherIcons className="iconTemp" name={`${weatherState}`} size="4x" />
        <span className="numTemp">{` ${temperature}`}</span><span className="numTempType">Cº</span>
    </div>
)

WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}
export default WeatherTemperature;