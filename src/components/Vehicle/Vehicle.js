import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./vehicle.css"

const Vehicle = (props) => {
    const vehicle = props.vehicle;
    const history = useHistory();
    const handleVehicleClick = (vehicleName) => {
        history.push(`/destination/${vehicleName}`)
    }
    return (
        <div onClick={() => handleVehicleClick(vehicle.name)} className="vehicle">
            <img src={vehicle.img} alt="" />
            <h2>{vehicle.name}</h2>
        </div>
    );
};

export default Vehicle;