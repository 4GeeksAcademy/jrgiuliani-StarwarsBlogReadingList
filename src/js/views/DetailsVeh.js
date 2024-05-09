import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsVeh = () => {
    const params = useParams()
    let uid = params.uid
    console.log(params)
    const [vehProps, setVehProps] = useState([])
    useEffect(() => {
        fetch("https://www.swapi.tech/api/starships/" + uid)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setVehProps(data.result.properties)
            })
            .catch((error) => { error })
    }, [])
    return (
        <div className = "container">
            <div className="container d-flex justify-content-center">
                <div className="card mb-3" style={{ "max-width": "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{vehProps.model}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <p className = "propiedades">
                    Model<br />
                    {vehProps.model}
                </p>
                <p className = "propiedades">
                    Starship <br/>
                    Class <br/>
                    {vehProps.starship_class}
                </p>
                <p className = "propiedades">
                    Length <br />
                    {vehProps.length}
                </p>
                <p className = "propiedades">
                    Crew <br />
                    {vehProps.crew}
                </p>
                <p className = "propiedades">
                    Passengers<br />
                    {vehProps.passengers}
                </p>
                <p className = "propiedades">
                    Consumables <br />
                    {vehProps.consumables}
                </p>
            </div>
        </div>
    )
}