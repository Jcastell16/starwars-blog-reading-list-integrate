import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starwarsImage from "../../img/star-wars.png";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-secondary p-2">
			<Link to="/">
				<img src={starwarsImage} />
			</Link>
			<div className="dropdown mx-5">
				<Link className="btn btn-primary dropdown-toggle" to="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					<strong> Favorites </strong>  <span className="badge bg-secondary"> {store.favorites.length} </span>
				</Link>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favorites == "" && <li className="p-2">(empty)</li>}
					{store.favorites.map((Item) => {
						
						return (
							<li key={Item._id}><Link className="dropdown-item d-flex justify-content-between" to=""><span>{Item.properties.name}</span> <button type="button" onClick={() => actions.addFavorites(Item._id)} className="btn btn-outline-danger ms-2"><i className="far fa-trash-alt"></i></button> </Link></li>
						)
					}
					)}
				</ul>
			</div>
		</nav>
	);
};
