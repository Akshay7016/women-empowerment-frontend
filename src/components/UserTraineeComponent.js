import { getTraineeById, getAllTrainee, getAllTraineeByLocation, getTraineeByAadhar, getTraineeFirstName, getTraineeLastName } from "../redux/TraineeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TraineeModel from "../model/TraineeModel";
import { getTraineeByIdService, getAllTraineeService, getAllTraineeByLocationService, getTraineeByAadharService, getAllTraineeByFirstNameService, getAllTraineeByLastNameService } from "../service/TraineeService";





const UserTraineeComponent = () => {

    const [traineeData, setTraineeData] = useState(new TraineeModel());

    const dispatch = useDispatch();

    const traineeDataFromStore = useSelector((state) => state.trainee.traineeState);
    const traineeList = useSelector((state) => state.trainee.traineeList);
    const traineeLocationList = useSelector((state) => state.trainee.traineeStateLocation);
    const traineeDataFromStoreByAadhar = useSelector((state) => state.trainee.traineeStateAadhar);
    const traineeFirstNameList = useSelector((state) => state.trainee.traineeFirstName);
    const traineeLastNameList = useSelector((state) => state.trainee.traineeLastName);

    const handleTraineeData = (e) => {
        console.log("handleTraineeData");
        setTraineeData({
            ...traineeData,
            [e.target.name]: e.target.value
        });
    }


    const submitGetAllTrainee = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllTrainee');
        getAllTraineeService()
            .then((response) => {
                dispatch(getAllTrainee(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }


    // ----------------------------------------------------------------

    const submitGetTraineeByLocation = (evt) => {
        evt.preventDefault();
        console.log('submitGetTraineeByLocation');
        getAllTraineeByLocationService(traineeData.location)
            .then((response) => {
                dispatch(getAllTraineeByLocation(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with ${traineeData.location} location not found.`);
            });

    }

    // ----------------------------------------------------------------

    const submitGetTraineeById = (evt) => {
        evt.preventDefault();
        console.log('submitGetTraineeById');
        getTraineeByIdService(traineeData.traineeId)
            .then((response) => {
                dispatch(getTraineeById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with ${traineeData.traineeId} not found.`);
            });

    }

    

    // ----------------------------------------------------------------


    const submitGetTraineeByAadhar = (evt) => {
        evt.preventDefault();
        console.log('submitGetTraineeByAadhar');
        getTraineeByAadharService(traineeData.aadharNo)
            .then((response) => {
                dispatch(getTraineeByAadhar(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with ${traineeData.aadharNo} not found.`);
            });
    }

    // ----------------------------------------------------------------



    const submitGetTraineeByFirstName = (evt) => {
        evt.preventDefault();
        console.log('submitGetTraineeByFirstName');
        getAllTraineeByFirstNameService(traineeData.firstName)
            .then((response) => {
                dispatch(getTraineeFirstName(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with ${traineeData.firstName} name not found.`);
            });

    }

    // ----------------------------------------------------------------


    const submitGetTraineeByLastName = (evt) => {
        evt.preventDefault();
        console.log('submitGetTraineeByLastName');
        getAllTraineeByLastNameService(traineeData.lastName)
            .then((response) => {
                dispatch(getTraineeLastName(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with last name ${traineeData.lastName} not found.`);
            });

    }




    //-----------------------------------------------------------------------------------------------------
    return (
        <div>
            <div className="container">
            <br />
            <h1 className="display-3 text-primary mt-3 mb-3 font-weight-bold text-center" >Trainee Component</h1>
            <br /><br />

                <div class="accordion" id="accordionExample">

                    {/* ---------------------------------------------------Trainee By Location-------------------------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <h5>Find Trainee By Location</h5>
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">


                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white overflow-auto">
                                    <form className="form form-group form-primary" onSubmit={submitGetTraineeByLocation}>
                                        <input className="form-control mt-3" type="text" id="location" name="location" value={traineeData.location} onChange={handleTraineeData} placeholder="Enter Trainee location" required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Trainee" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {traineeLocationList.map((trainee, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{trainee.traineeId}</td>
                                                        <td>{trainee.userName}</td>
                                                        <td>{trainee.password}</td>
                                                        <td>{trainee.firstName}</td>
                                                        <td>{trainee.lastName}</td>
                                                        <td>{trainee.contact}</td>
                                                        <td>{trainee.email}</td>
                                                        <td>{trainee.familyInfo}</td>
                                                        <td>{trainee.aadharNo}</td>
                                                        <td>{trainee.dob}</td>
                                                        <td>{trainee.location}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* ---------------------------------------------------Find All Trainee-------------------------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h5>Find All Trainee</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white overflow-auto">

                                    <div>
                                        <form className="form form-group form-primary">
                                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllTrainee} value="Find All Trainee" />
                                        </form>
                                    </div>
                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {traineeList.map((trainee, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{trainee.traineeId}</td>
                                                        <td>{trainee.userName}</td>
                                                        <td>{trainee.password}</td>
                                                        <td>{trainee.firstName}</td>
                                                        <td>{trainee.lastName}</td>
                                                        <td>{trainee.contact}</td>
                                                        <td>{trainee.email}</td>
                                                        <td>{trainee.familyInfo}</td>
                                                        <td>{trainee.aadharNo}</td>
                                                        <td>{trainee.dob}</td>
                                                        <td>{trainee.location}</td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------Find Trainee By Trainee ID-------------------------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5>Find Trainee By Trainee ID</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white  overflow-auto" >
                                    <form className="form form-group form-primary" onSubmit={submitGetTraineeById}>
                                        <input className="form-control mt-3" type="number" id="traineeId" name="traineeId" value={traineeData.traineeId} onChange={handleTraineeData} placeholder="Enter Trainee Id" required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Trainee" />
                                    </form>

                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{traineeDataFromStore.traineeId}</td>
                                                <td>{traineeDataFromStore.userName}</td>
                                                <td>{traineeDataFromStore.password}</td>
                                                <td>{traineeDataFromStore.firstName}</td>
                                                <td>{traineeDataFromStore.lastName}</td>
                                                <td>{traineeDataFromStore.contact}</td>
                                                <td>{traineeDataFromStore.email}</td>
                                                <td>{traineeDataFromStore.familyInfo}</td>
                                                <td>{traineeDataFromStore.aadharNo}</td>
                                                <td>{traineeDataFromStore.dob}</td>
                                                <td>{traineeDataFromStore.location}</td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ---------------------------------------------------Find Trainee By Aadhar------------------------------------------------------- */}
                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <h5>Find Trainee By Aadhar</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white  overflow-auto" >
                                    <form className="form form-group form-primary" onSubmit={submitGetTraineeByAadhar}>
                                        <input className="form-control mt-3" type="number" id="aadharNo" name="aadharNo" value={traineeData.aadharNo} onChange={handleTraineeData} placeholder="Enter Trainee Aadhar" required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Trainee" />
                                    </form>

                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{traineeDataFromStoreByAadhar.traineeId}</td>
                                                <td>{traineeDataFromStoreByAadhar.userName}</td>
                                                <td>{traineeDataFromStoreByAadhar.password}</td>
                                                <td>{traineeDataFromStoreByAadhar.firstName}</td>
                                                <td>{traineeDataFromStoreByAadhar.lastName}</td>
                                                <td>{traineeDataFromStoreByAadhar.contact}</td>
                                                <td>{traineeDataFromStoreByAadhar.email}</td>
                                                <td>{traineeDataFromStoreByAadhar.familyInfo}</td>
                                                <td>{traineeDataFromStoreByAadhar.aadharNo}</td>
                                                <td>{traineeDataFromStoreByAadhar.dob}</td>
                                                <td>{traineeDataFromStoreByAadhar.location}</td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------Find Trainee By First Name------------------------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <h5>Find Trainee By First Name</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white overflow-auto">
                                    <form className="form form-group form-primary" onSubmit={submitGetTraineeByFirstName}>
                                        <input className="form-control mt-3" type="text" id="firstName" name="firstName" value={traineeData.firstName} onChange={handleTraineeData} placeholder="Enter Trainee First Name" required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Trainee" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {traineeFirstNameList.map((trainee, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{trainee.traineeId}</td>
                                                        <td>{trainee.userName}</td>
                                                        <td>{trainee.password}</td>
                                                        <td>{trainee.firstName}</td>
                                                        <td>{trainee.lastName}</td>
                                                        <td>{trainee.contact}</td>
                                                        <td>{trainee.email}</td>
                                                        <td>{trainee.familyInfo}</td>
                                                        <td>{trainee.aadharNo}</td>
                                                        <td>{trainee.dob}</td>
                                                        <td>{trainee.location}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------Find Trainee By Last Name------------------------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <h5>Find Trainee By Last Name</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white overflow-auto">
                                    <form className="form form-group form-primary" onSubmit={submitGetTraineeByLastName}>
                                        <input className="form-control mt-3" type="text" id="lastName" name="lastName" value={traineeData.lastName} onChange={handleTraineeData} placeholder="Enter Trainee Last Name" required />
                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Trainee" />
                                    </form>
                                    <table className="table table-light table-striped ">
                                        <thead>
                                            <tr>
                                                <th>traineeId</th>
                                                <th>userName</th>
                                                <th>password</th>
                                                <th>firstName</th>
                                                <th>lastName</th>
                                                <th>contact</th>
                                                <th>email</th>
                                                <th>familyInfo</th>
                                                <th>aadharNo</th>
                                                <th>dob</th>
                                                <th>location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {traineeLastNameList.map((trainee, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td>{trainee.traineeId}</td>
                                                        <td>{trainee.userName}</td>
                                                        <td>{trainee.password}</td>
                                                        <td>{trainee.firstName}</td>
                                                        <td>{trainee.lastName}</td>
                                                        <td>{trainee.contact}</td>
                                                        <td>{trainee.email}</td>
                                                        <td>{trainee.familyInfo}</td>
                                                        <td>{trainee.aadharNo}</td>
                                                        <td>{trainee.dob}</td>
                                                        <td>{trainee.location}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );

}

export default UserTraineeComponent;