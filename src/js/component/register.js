import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
    const { store } = useContext(Context);
    const [register, setRegister] = useState({
        name: "",
        username: "",
        email:"",
        password: ""
});

const handleRegister = async () => {
    const response = await fetch(`${store.URL_BASE}/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(register)  
    })
    if (response.ok) {
        window.alert("You have registered successfully, now you must Login")
    } else {
        window.alert("The User is registered!")
    }
}
    return (
        <div className="container-fluid vh-100 align-content-center mt-5">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div className="text-center">
                            <h3 className="text-secondary">Create Account</h3>
                        </div>
                        <div className="p-4">
                            <form action="">
                            <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-id-card"></i></span>
                                    <input type="text" className="form-control" name='name' placeholder="Name" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-user"></i></span>
                                    <input type="text" className="form-control" name='username' placeholder="Username" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-envelope"></i></span>
                                    <input type="email" className="form-control" name='email' placeholder="Email" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-secondary"><i className="fas fa-lock"></i></span>
                                    <input type="password" className="form-control" name='password' placeholder="password" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })}/>
                                </div>
                                <div className="d-grid col-12 mx-auto">
                                    <Link className="btn btn-secondary" to="/" onClick={() => handleRegister(register)}><span></span> Sign up</Link>
                                </div>
                                <p className="text-center mt-3">Already have an account?
                                <span> <Link to="/" className="text-secondary">Sign in </Link></span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};