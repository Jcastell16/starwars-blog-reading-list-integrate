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
			{store.token.length > 0 ? (
			<div className="d-flex justify-content-between mt-3">
			<div className="dropdown mx-1">
				<Link className="btn btn-primary dropdown-toggle" to="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					<strong> Favorites </strong>  <span className="badge bg-secondary"> {store.favorites.length} </span>
				</Link>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.favorites == "" && <li className="p-2">(empty)</li>}
					{store.favorites.map((Item) => {
						
						return (
							<>
							<li key={Item.nature_id}><Link className="dropdown-item d-flex justify-content-between" to=""><span>{Item.name}</span> <button type="button" onClick={() => actions.deleteFavorite(Item.nature_id, Item.nature)} className="btn btn-outline-danger ms-2"><i className="far fa-trash-alt"></i></button> </Link></li>
							</>
							)
					}
					)}
				</ul>
			</div>
			<Link to="" className="btn btn-primary mx-1 ustify-content-center" onClick={() => actions.handleLogout()}><i className="fas fa-sign-out-alt fs-6"></i></Link>
			</div>
			):(
				<div className="p-3">
				<Link to="/register" className="btn btn-lg btn-success mx-1">Register</Link>
				<Link to="/" className="btn btn-lg  btn-primary mx-1">Login</Link>
				</div>
			)}
		</nav>
	);
};
