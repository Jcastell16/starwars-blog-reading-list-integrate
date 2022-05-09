import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Planets = ({planet, nature}) => {
    const { actions, store } = useContext(Context);
    const { name, population, terrain, id } = planet
    return (
        <div className="col-md-3">
            <div className="card text-wrap mb-3">
                <img src="https://via.placeholder.com/360x300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"><strong>{name}</strong></h5>
                    <p className="card-text m-1"><strong>Population:</strong> {population}</p>
                    <p className="card-text m-1"><strong>Terrain:</strong> {terrain}</p>
                    <div className="d-flex justify-content-between mt-3">
                        <Link to={`/planets/${id}`} className="btn btn-outline-info">Go somewhere</Link>
                        <button type="button" onClick={() => actions.addFavorites(id, name, nature)} className="btn btn-outline-warning"><i className="far fa-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};