import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const Detailcard = () => {
	//let navegar = useNavigate();
	let { store } = useContext(Context)
	let { people, planets } = store
	let params = useParams()
	let { id, nature } = params
	
	return (
		<>
			{nature == "people" ?
				<div className="container">
					<div className="row justify-content-md-center my-3">
						<div className="col-md-6 col-lg-5 mb-4">
							<img
								src="https://via.placeholder.com/800x600"
								style={{ width: "100%", height: "400px" }}
							/>
						</div>
						<div className="col-md-6 col-lg-5 text-center row mb-4">
							<div className="align-self-center">
								<h2>{people[id -1].name}</h2>
								<p>
									Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
									print, graphic or web designs. The passage is attributed to an unknown typesetter in
									the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus
									Bonorum et Malorum for use in a type specimen book
								</p>
							</div>
						</div>
					</div>
					<div className="dropdown-divider border border-danger" />
					<div className="row text-danger justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-2">
							<h5>Name</h5>
							<p>{people[id -1].name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Birth Year</h5>
							<p>{people[id -1].birth_year}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Gender</h5>
							<p>{people[id -1].gender}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Height</h5>
							<p>{people[id -1].height}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Skin Color</h5>
							<p>{people[id -1].skin_color}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Eye Color</h5>
							<p>{people[id -1].eye_color}</p>
						</div>
					</div>
				</div>
				: nature == "planets" ?
					<div className="container">
						<div className="row justify-content-md-center my-3">
							<div className="col-md-6 col-lg-5 mb-4">
								<img
									src="https://via.placeholder.com/800x600"
									style={{ width: "100%", height: "400px" }}
								/>
							</div>
							<div className="col-md-6 col-lg-5 text-center row mb-4">
								<div className="align-self-center">
									<h2>{planets[id -1].name}</h2>
									<p>
										Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
										print, graphic or web designs. The passage is attributed to an unknown typesetter in
										the 15th century who is thought to have scrambled parts of Cicero&apos;s De Finibus
										Bonorum et Malorum for use in a type specimen book
									</p>
								</div>
							</div>
						</div>
						<div className="dropdown-divider border border-danger" />
						<div className="row text-danger justify-content-md-center text-center mt-4">
							<div className="col-md-2 col-lg-1 mx-2">
								<h5>Name</h5>
								<p>{planets[id -1].name}</p>
							</div>
							<div className="col-md-2 col-lg-1 mx-3">
								<h5>Terrain</h5>
								<p>{planets[id -1].terrain}</p>
							</div>
							<div className="col-md-2 col-lg-1 mx-3">
								<h5>Population</h5>
								<p>{planets[id -1].population}</p>
							</div>
							<div className="col-md-2 col-lg-1 mx-3">
								<h5>Orbital Period</h5>
								<p>{planets[id -1].orbital_period}</p>
							</div>
							<div className="col-md-2 col-lg-1 mx-3">
								<h5>Rotation Period</h5>
								<p>{planets[id -1].rotation_period}</p>
							</div>
							<div className="col-md-2 col-lg-1 mx-3">
								<h5>Diameter</h5>
								<p>{planets[id -1].diameter}</p>
							</div>
						</div>
					</div>
					: null}
		</>
	)

};