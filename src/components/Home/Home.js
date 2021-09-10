import React, { useEffect, useState } from 'react';
import vehicleData from '../../fakeData/data.json'
import Vehicle from '../Vehicle/Vehicle';
import img from '../../images/background-image.png'
import './Home.css'

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(vehicleData);
    }, [])

    return (
        // style={{ height: "400px" }}
        // <body style={{backgroundImage: `url(${img})`,
        // backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
        
            // <div style={{border: '1px solid red'}}>
                <div className="d-flex justify-content-around align-items-center container mt-5 vehicles">
                {
                    vehicles.map(vehicle => <Vehicle className="styleVehicle" vehicle={vehicle}></Vehicle>)
                }
                </div>
            // </div>
            
        // </body>
    );
};

export default Home;