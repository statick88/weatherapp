import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city })=>{//destructuring
    //const { city } = props; //destructuring ES6
    //console.log("localización : "+props.city);
    //debugger;
    return (
        <div className="weatherLocCont">
            <h1>{city}</h1>
        </div>);
};

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;