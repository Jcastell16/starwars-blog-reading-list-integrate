import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Starwars } from "../component/starwars";
import "../../styles/home.css";
import { Login } from "../component/login"

export const Home = () => {
	const { store } = useContext(Context);
	return(
	<>
	{store.token.length > 0 ?(
	<Starwars />
	):(
	<Login />
	)}
	</>
	);
	};
