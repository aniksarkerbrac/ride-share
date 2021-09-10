import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Destination.css'
import { Link } from 'react-router-dom';
import { useRouteMatch, useParams } from "react-router-dom";
import { VehicleInfoContext } from '../../App';


const Destination = () => {
    const [vehicleInfo, setVehicleInfo] = useContext(VehicleInfoContext);
    const { vehicleName } = useParams();

    // const findVehicle = "find" + vehicleName;
    // let { path, url } = useRouteMatch();
    // console.log(path); /destination/:vehicleName
    // console.log(url);  /destination/Car
    const handlePick = (event) => {
        const destinationInfo = { ...vehicleInfo }
        destinationInfo[event.target.name] = event.target.value;
        setVehicleInfo(destinationInfo);
    }

    return (
        <div className="d-flex container mt-5 styleDestination">
            <div className="pickup-form p-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control type="text" name="pickFrom" onBlur={handlePick} placeholder="current place" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" name="pickTo" onBlur={handlePick} placeholder="destination" />
                    </Form.Group>
                    <Link to={`/vehicle/${vehicleName}`}>
                        <Button>Search</Button>
                    </Link>
                </Form>
            </div>
            <div className="map ms-4">
                <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF6&amp;iwloc=&amp;output=embed" width="100%" height="100%" allowfullscreen></iframe>
            </div>
        </div >
    );
};


export default Destination;