import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";
import "../../styles/home.css";

const URL_BASE = "https://www.swapi.tech/api/";

export const Starwars = () => {
    const {store} = useContext(Context);
    return (
        <div className="container mt-3">
		<div className="horizontal-scroll-wrapper">
			<h1 className="mb-4 text-danger">Characters</h1>
			<div className="row mb-5 flex-nowrap">
            {store.people.map((person) => (
				<Characters key={`people${person.uid}`} {...person}/>
            ))}
			</div>
		</div>
		<div className="horizontal-scroll-wrapper">
			<h1 className="mb-4 text-danger">Planets</h1>
			<div className="row mb-5 flex-nowrap">
            {store.planets.map((planet) => (
				<Planets key={`planets${planet.uid}`} {...planet}/>
            ))}
			</div>
		</div>
        <div className="horizontal-scroll-wrapper">
			<h1 className="mb-4 text-danger">Vehicle</h1>
			<div className="row mb-5 flex-nowrap">
            {store.vehicles.map((vehicle) => (
				<Vehicles key= {`vehicles${vehicle.uid}`} {...vehicle}/>
            ))}
			</div>
		</div>
	</div>
    );
};