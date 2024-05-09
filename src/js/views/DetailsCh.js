import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const DetailsCh = () => {
    const params = useParams()
    let uid = params.uid
    console.log(params)
    const [charProps, setCharProps] = useState([])
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setCharProps(data.result.properties)
            })
            .catch((error) => { error })
    }, [])
    return (
        <div className = "container">
            <div className="container d-flex justify-content-center">
                <div className="card mb-3" style={{ "max-width": "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{charProps.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <p className = "propiedades">
                    Name<br />
                    {charProps.name}
                </p>
                <p className = "propiedades">
                    Birth<br />
                    Year<br />
                    {charProps.birth_year}
                </p>
                <p className = "propiedades">
                    Gender<br />
                    {charProps.gender}
                </p>
                <p className = "propiedades">
                    Height<br />
                    {charProps.height}
                </p>
                <p className = "propiedades">
                    Skin<br />
                    Color<br />
                    {charProps.skin_color}
                </p>
                <p className = "propiedades">
                    Eye<br />
                    Color<br />
                    {charProps.eye_color}
                </p>
            </div>
        </div>
    )
}