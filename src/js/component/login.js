import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [login, setLogin] = useState({
        username: "",
        password: ""
});

    return (
        <div className="container-fluid vh-100 mt-5">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div className="text-center">
                            <h3 className="text-secondary">Login Account</h3>
                        </div>
                        <div className="p-4">
                            <form action="">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-user"></i></span>
                                    <input type="text" className="form-control" name='username' placeholder="Username" onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-lock"></i></span>
                                    <input type="password" className="form-control" name='password' placeholder="password" onChange={(event) => setLogin({ ...login, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="d-grid col-12 mx-auto">
                                    <Link to="/" className="btn btn-secondary"  onClick={() => actions.handleLogin(login)}> Sign in</Link>
                                </div>
                                <p className="text-center mt-3">Already have an account?
                                    <span> <Link to="/register" className="text-secondary">Sign up </Link></span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};