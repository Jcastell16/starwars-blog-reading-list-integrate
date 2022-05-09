import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Characters } from "./characters";
import { Planets } from "./planets";
import "../../styles/home.css";


export const Starwars = () => {
	const { store } = useContext(Context);
	return (
		<>
		<div className="container mt-3">
			<div className="horizontal-scroll-wrapper">
				<h1 className="mb-4 text-danger">Characters</h1>
				<div className="row mb-5 flex-nowrap">
					{store.people.map((person) => (
						<Characters key={`people${person.id}`} person = {person} nature = "character"/>
					))}
				</div>
			</div>
			<div className="horizontal-scroll-wrapper">
				<h1 className="mb-4 text-danger">Planets</h1>
				<div className="row mb-5 flex-nowrap">
					{store.planets.map((planet) => (
						<Planets key={`planets${planet.id}`} planet = {planet} nature = "planet"/>
					))}
				</div>
			</div>
		</div>
		</>
	);
};