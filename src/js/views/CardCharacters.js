import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const CardCharacters = () => {
	const { store, actions } = useContext(Context);
	
	const [isFavorite, setIsFavorite] = useState(false);
	const handleClick = (name) => {
		if (isFavorite) {
			actions.removeFavorite(name);
			setIsFavorite(false);
		} else {
			actions.getFavorites(name);
			setIsFavorite(true);
		}
	};

	return (
		<div className="row flex-nowrap overflow-auto">
			{store.characters && store.characters.map((value, index) => {
				return (
					<div className="col-4">
						<div className="card" style={{ "width": "18rem" }}>
							<img src={`https://starwars-visualguide.com/assets/img/characters/${value.uid}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{value.name}</h5>
								<div className="d-flex">
									<Link to={`/DetailsCh/${value.uid}`}>
										<a href="#" className="btn btn-outline-dark">Learn more</a>
									</Link>
									<i className={`fa-regular fa-heart f-2 fs-3 ms-auto btn btn-light  ${store.favorites.includes(value.name) ? "btn-dark" : ""}`} 
										onClick={() => handleClick(value.name)}></i>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}