import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsPla = () => {
    const params = useParams()
    let uid = params.uid
    console.log(params)
    const [plaProps, setPlaProps] = useState([])
    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPlaProps(data.result.properties)
            })
            .catch((error) => { error })
    }, [])
    return (
        <div className = "container">
            <div className="container d-flex justify-content-center">
                <div className="card mb-3" style={{ "max-width": "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{plaProps.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <p className = "propiedades">
                    Name<br />
                    {plaProps.name}
                </p>
                <p className = "propiedades">
                    Population <br/>
                    {plaProps.population}
                </p>
                <p className = "propiedades">
                    Climate<br />
                    {plaProps.climate}
                </p>
                <p className = "propiedades">
                    Terrain<br />
                    {plaProps.terrain}
                </p>
                <p className = "propiedades">
                    Gravity<br />
                    {plaProps.gravity}
                </p>
                <p className = "propiedades">
                    Diameter<br />
                    {plaProps.diameter}
                </p>
            </div>
        </div>
    )
}