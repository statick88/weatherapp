import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import transformWeather from '../../services/transformWeather';
import api_weather from '../../constants/api_url'
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';


class WeatherLocation extends Component{

    
    constructor(props){
        super(props);
        const {city} = props
        this.state = {
            data: null,
            city
        };
        
    }
    componentDidMount(prevProps,prevState){
       this.handleUpdateClick();
    }

    handleUpdateClick = ()=>{

        fetch(api_weather(this.state.city)).then(resolve => {

            return resolve.json();
        }).then(data=>{
            const newWeather = transformWeather(data);
            this.setState({data:newWeather});
        }).catch(error=>{
            console.log("error");
        })
    }

    render = ()=>{
        console.log(this.state);
        const {city,data} = this.state;
        return (<div className="weatherLocation">
            <Location city={city}/>
            {data ?<div><WeatherData data={data}  /><button onClick={this.handleUpdateClick}>Actualizar</button></div>:<CircularProgress size={50}/>}
        </div>)
    };
}

WeatherLocation.prototypes = {
    city: PropTypes.string.isRequired
}
export default WeatherLocation;