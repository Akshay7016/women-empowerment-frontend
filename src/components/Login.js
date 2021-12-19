import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import User from "../model/User"

const Login = () => {

    const [user, setUser] = useState(new User());
    const [credentials, setCredentials] = useState('');

    const handleUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitUser = (event) => {
        axios.post(`/login`, user)
            .then((response) => {
                console.log(response.data);
                sessionStorage.setItem('isUserLoggedIn', true);
                sessionStorage.setItem('whoIsLoggedIn', response.data.role);
                alert('Success');
                window.location.assign('/home');
                // history.push('/home');
            }).catch((error) => {
                sessionStorage.setItem('isUserLoggedIn', false);
                sessionStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary text-center">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitUser}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            id="userName"
                            // eslint-disable-next-line
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={user.userName}
                            onChange={handleUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            className="form-control"
                            name="userPassword"
                            id="userPassword"
                            // eslint-disable-next-line
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={user.userPassword}
                            onChange={handleUser}
                            required
                        />
                        <div class="form-group">
                            <select class="form-control mb-3" name="role" id="role" onChange={handleUser}>
                                <option value="Role">Select a role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="USER">USER</option>
                                {/* <option value="MANAGER">MANAGER</option> */}
                            </select>
                        </div>
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-primary mb-3"
                            value="Login"
                            onClick={submitUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
            </div>
        </div >
    )
}
export default Login;
// http://localhost:8082/