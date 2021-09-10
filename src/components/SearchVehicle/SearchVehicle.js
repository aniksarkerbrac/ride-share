import React, { useEffect, useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import '../Destination/Destination.css';
import { useParams } from 'react-router-dom';
import { VehicleInfoContext } from '../../App';
import vehicleData from '../../fakeData/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faDotCircle} from '@fortawesome/free-solid-svg-icons'

const SearchVehicle = () => {
    const [vehicleInfo, setVehicleInfo] = useContext(VehicleInfoContext);
    const { pickFrom, pickTo } = vehicleInfo;

    const [vehicle, setVehicle] = useState({});
    const { name, img, quantity, tk } = vehicle;
    
    const { vehicleName } = useParams();

    useEffect(() => {
        const findVehicle = vehicleData.find(vehicle => {
            if (vehicle.name === vehicleName) {
                return vehicle;
            }
        });
        setVehicle(findVehicle);
    }, [])


    return (
        <div className="d-flex container mt-5 styleSearchVehicle">
            <div className="pickup-form p-3">
                <div className="places p-3">                   
                    <h4><FontAwesomeIcon icon={faDotCircle} />  {pickFrom}</h4>
                    <h4><FontAwesomeIcon icon={faDotCircle} />  {pickTo}</h4>                
                </div>
                <div className="available-vehicle mt-3 p-3 d-flex justify-content-between align-items-center">
                    <img src={img} alt=""></img>
                    <h5>{name}  <FontAwesomeIcon icon={faUserFriends} /> {quantity}</h5>
                    <h5>${tk}</h5>
                </div>
                <div className="available-vehicle mt-3 p-3 d-flex justify-content-between align-items-center">
                    <img src={img} alt=""></img>
                    <h5>{name}  <FontAwesomeIcon icon={faUserFriends} /> {quantity}</h5>
                    <h5>${tk}</h5>
                </div>
                <div className="available-vehicle mt-3 p-3 d-flex justify-content-between align-items-center">
                    <img src={img} alt=""></img>
                    <h5>{name}  <FontAwesomeIcon icon={faUserFriends} /> {quantity}</h5>
                    <h5>${tk}</h5>
                </div>
            </div>
            <div className="map ms-4">
                <iframe src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF6&amp;iwloc=&amp;output=embed" width="100%" height="100%" allowfullscreen></iframe>
            </div>
        </div >
    );
};

export default SearchVehicle;