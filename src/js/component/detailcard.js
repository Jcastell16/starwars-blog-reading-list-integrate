import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const Detailcard = () => {
	const { store, actions } = useContext(Context);
	let { people, planets, vehicles } = store;
	const params = useParams();
	const { nature, id } = params;

	const [dataInfo, setDataInfo] = useState({});

	const getDetail = () => {
		const detail = store[nature].find(item => item.uid === id);
		if (detail) {
			setDataInfo(detail)
		}
	}
	useEffect(() => {
		getDetail();
	}, []);

	return (
		<>
			
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
								<h2>{dataInfo.properties?.name}</h2>
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
					{nature == "people" ?
					<div className="row text-danger justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-2">
							<h5>Name</h5>
							<p>{dataInfo.properties?.name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Birth Year</h5>
							<p>{dataInfo.properties?.birth_year}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Gender</h5>
							<p>{dataInfo.properties?.gender}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Height</h5>
							<p>{dataInfo.properties?.height}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Skin Color</h5>
							<p>{dataInfo.properties?.skin_color}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Eye Color</h5>
							<p>{dataInfo.properties?.eye_color}</p>
						</div>
					</div>
					: nature == "planets" ? 
					<div className="row text-danger justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-2">
							<h5>Name</h5>
							<p>{dataInfo.properties?.name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Climate</h5>
							<p>{dataInfo.properties?.climate}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Population</h5>
							<p>{dataInfo.properties?.population}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Orbital Period</h5>
							<p>{dataInfo.properties?.orbital_period}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Rotation Period</h5>
							<p>{dataInfo.properties?.rotate_period}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Diameter</h5>
							<p>{dataInfo.properties?.diameter}</p>
						</div>
					</div>
					: nature == "vehicles" ? 
					<div className="row text-danger justify-content-md-center text-center mt-4">
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Name</h5>
							<p>{dataInfo.properties?.name}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Model</h5>
							<p>{dataInfo.properties?.model}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Vehicle Class</h5>
							<p>{dataInfo.properties?.vehicle_class}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Passengers</h5>
							<p>{dataInfo.properties?.passengers}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Consumables</h5>
							<p>{dataInfo.properties?.consumables}</p>
						</div>
						<div className="col-md-2 col-lg-1 mx-3">
							<h5>Cargo Capacity</h5>
							<p>{dataInfo.properties?.cargo_capacity}</p>
						</div>
					</div>
					: null}
				</div>
		</>
	)

};