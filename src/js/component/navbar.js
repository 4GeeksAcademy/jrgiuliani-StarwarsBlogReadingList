import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3 container">
			<Link to="/">
				<div className="d-flex">
					<img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black.png"></img>
				</div>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites ? store.favorites.length : 0}
					</button>
					<ul className="dropdown-menu">
						{store.favorites && store.favorites.length > 0 ? (
							store.favorites.map((value, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item" href="#">{value} 
											<i className="fa-regular fa-circle-xmark btn btn-light align-right"
												onClick={()=>{
													actions.removeFavorite(value)
												}}></i> 
										</a>
									</li>
								);
							})
						) : (
							<li><a className="dropdown-item" href="#">Vacío</a></li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
