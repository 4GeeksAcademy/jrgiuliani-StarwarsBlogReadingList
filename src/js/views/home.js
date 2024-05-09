import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { CardCharacters } from "./CardCharacters";
import { CardPlanets } from "./CardPlanets";
import { CardVehicles } from "./CardVehicles";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="container">
				<h1>Characters</h1>
				<CardCharacters />
			</div>
			<div className="container">
				<h1>Planets</h1>
				<CardPlanets />	
			</div>
			<div className="container">
				<h1>Vehicles</h1>
				<CardVehicles />
			</div>
		</div>
	)
};
