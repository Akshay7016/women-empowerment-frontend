import { deleteTraineeByID} from "../redux/TraineeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TraineeModel from "../model/TraineeModel";
import { deleteTraineeService } from "../service/TraineeService";
import UserTraineeComponent from "./UserTraineeComponent";




const TraineeComponent = () => {

    const [traineeData, setTraineeData] = useState(new TraineeModel());

    const dispatch = useDispatch();
    
    const traineeDelete = useSelector((state) => state.trainee.traineeDelete);
    
    const handleTraineeData = (e) => {
        console.log("handleTraineeData");
        setTraineeData({
            ...traineeData,
            [e.target.name]: e.target.value
        });
    }




    // ----------------------------------------------------------------


    const submitDeleteTrainee = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteTrainee');
        deleteTraineeService(traineeData.traineeId)
            .then((response) => {
                alert(`Trainee deleted successfully.`)
                dispatch(deleteTraineeByID(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Trainee with Id ${traineeData.traineeId} not found.`);
            });

    }



    //-----------------------------------------------------------------------------------------------------
    return (
        <div>
            <div>
                <UserTraineeComponent />
                <div className="container">

                    <div class="accordion" id="accordionExample">

                        {/* ---------------------------------------------------Delete Trainee By Trainee ID-------------------------------------------------------- */}

                        <div class="card">
                            <div class="card-header" id="headinFour">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapsFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h5>Delete Trainee By Trainee ID</h5>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapsFour" class="collapse" aria-labelledby="headinFour" data-parent="#accordionExample">
                                <div class="card-body">

                                    <div className="col-12 border border-light shadow p-3 mb-5 bg-white overflow-auto">

                                        <form className="form form-group form-primary" onSubmit={submitDeleteTrainee}>
                                            <input className="form-control mt-3" type="number" id="traineeId" name="traineeId" value={traineeData.traineeId} onChange={handleTraineeData} placeholder="Enter Trainee Id" required />
                                            <input className="form-control mt-3 btn btn-danger" type="submit" value="Delete Trainee" />
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
                                                    <td>{traineeDelete.traineeId}</td>
                                                    <td>{traineeDelete.userName}</td>
                                                    <td>{traineeDelete.password}</td>
                                                    <td>{traineeDelete.firstName}</td>
                                                    <td>{traineeDelete.lastName}</td>
                                                    <td>{traineeDelete.contact}</td>
                                                    <td>{traineeDelete.email}</td>
                                                    <td>{traineeDelete.familyInfo}</td>
                                                    <td>{traineeDelete.aadharNo}</td>
                                                    <td>{traineeDelete.dob}</td>
                                                    <td>{traineeDelete.location}</td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
            </div>

        </div>
    );

}

export default TraineeComponent;