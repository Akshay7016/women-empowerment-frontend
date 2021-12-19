import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState  } from 'react';
import axios from "axios";
import User from '../model/User';

const Register = (props) => {

    const history = useHistory();

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

        axios.post(`register`, user)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('user', user);
                alert('You are registered successfully. Please login now.');
                history.push('/login'); // check this method to navigate 
            }).catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <div className="container">
            <div className="col-4 mt-3" >
                <h1 className="display-4 text-primary text-center">Register</h1>
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
                            onChange={handleUser} />
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
                            value="Register"
                            onClick={submitUser}
                        />
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link>
            </div>
            <div>
                {/* https://material.io/components/dialogs/web#alert-dialog */}
            </div>
        </div >

    )
}
export default Register;