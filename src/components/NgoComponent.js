import { deleteNgoByID, addNgo, updateNgo } from "../redux/NgoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteNgoService, addNgoService, updateNgoService } from "../service/NgoService";
import NgoModel from "../model/NgoModel"
import UserNgoComponent from "./UserNgoComponent";

const NgoComponent = () => {

    const [ngoData, setNgoData] = useState(new NgoModel());
    const dispatch = useDispatch();

    const ngoDelete = useSelector((state) => state.ngo.ngoDelete);

    const handleNgoData = (e) => {
        console.log(e);
        setNgoData({
            ...ngoData,
            [e.target.name]: e.target.value
        });
    }
    // ------------------------------------------------------------

    const submitDeleteNgo = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteNgo');
        deleteNgoService(ngoData.ngoId)
            .then((response) => {
                alert(`Ngo deleted successfully.`)
                dispatch(deleteNgoByID(response.data));

            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} not found.`);
            });
    }

    // -----------------------------------------------------------------------------------------

    const submitAddNgo = (evt) => {
        evt.preventDefault();
        console.log('submitAddNgo');
        addNgoService(ngoData)
            .then((response) => {
                alert(`Ngo Added successfully.`)
                dispatch(addNgo(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} already present.`);
            });

    }

    // -----------------------------------------------------------------------------------------

    const submitUpdateNgo = (evt) => {
        evt.preventDefault();
        console.log("submitUpdateNgo");
        updateNgoService(ngoData)
            .then((response) => {
                dispatch(updateNgo(response.data));
                alert(`ngo updated sucesfully`);
            })
            .catch(() => {
                alert(`Ngo with Id ${ngoData.ngoId} is not present.`);
            });

    }

    // -----------------------------------------------------------------------------------------

    return (

        <div>
        
            <UserNgoComponent />
            <div className="container">
                <div id="accordion">

                    {/* -------------------------- Delete Ngo By Id --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h5>Delete Ngo By Id</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">

                                    <form className="form form-group form-primary" onSubmit={submitDeleteNgo}>
                                        <input min="1" className="form-control mt-3" type="number" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} placeholder="Enter Ngo Id" autoFocus required />
                                        <input className="form-control mt-3 btn btn-danger" type="submit" value="Delete Ngo" />
                                    </form>

                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
                                            <tr>
                                                <th>ngoId</th>
                                                <th>ngoName</th>
                                                <th>ngoLocation</th>
                                                <th>ngoType</th>
                                                <th>ngoMotive</th>
                                                <th>donation</th>
                                                <th>ngoSize</th>
                                                <th>ngoActivities</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{ngoDelete.ngoId}</td>
                                                <td>{ngoDelete.ngoName}</td>
                                                <td>{ngoDelete.ngoLocation}</td>
                                                <td>{ngoDelete.ngoType}</td>
                                                <td>{ngoDelete.ngoMotive}</td>
                                                <td>{ngoDelete.donation}</td>
                                                <td>{ngoDelete.ngoSize}</td>
                                                <td>{ngoDelete.ngoActivities}</td>

                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------- Add Ngo --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapselast1" aria-expanded="false" aria-controls="collapselast1">
                                    <h5>Add Ngo </h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapselast1" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">

                                    <form className="form form-group form-primary" onSubmit={submitAddNgo}>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Id</b></label>
                                            <div class="col-sm-10">
                                                <input type="number" class="form-control" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Name</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoName" name="ngoName" value={ngoData.ngoName} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Location</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoLocation" name="ngoLocation" value={ngoData.ngoLocation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Type</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoType" name="ngoType" value={ngoData.ngoType} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label "><b>Ngo Motive</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoMotive" name="ngoMotive" value={ngoData.ngoMotive} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b> Ngo Donation</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="donation" name="donation" value={ngoData.donation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Size</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoSize" name="ngoSize" value={ngoData.ngoSize} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Activities</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoActivities" name="ngoActivities" value={ngoData.ngoActivities} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <input className="form-control mt-3 btn btn-success" type="submit" value="Add Scheme" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* -------------------------- Update Ngo  --------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapselast2" aria-expanded="false" aria-controls="collapselast2">
                                    <h5>Update Ngo</h5>
                                </button>
                            </h5>
                        </div>
                        <div id="collapselast2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <form className="form form-group form-primary" onSubmit={submitUpdateNgo}>
                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Id</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoId" name="ngoId" value={ngoData.ngoId} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Name</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoName" name="ngoName" value={ngoData.ngoName} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Location</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoLocation" name="ngoLocation" value={ngoData.ngoLocation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Type</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoType" name="ngoType" value={ngoData.ngoType} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label "><b>Ngo Motive</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoMotive" name="ngoMotive" value={ngoData.ngoMotive} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b> Ngo Donation</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="donation" name="donation" value={ngoData.donation} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Size</b></label>
                                            <div class="col-sm-10">
                                                <input min="1" type="number" class="form-control" id="ngoSize" name="ngoSize" value={ngoData.ngoSize} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"><b>Ngo Activities</b></label>
                                            <div class="col-sm-10">
                                                <input pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="ngoActivities" name="ngoActivities" value={ngoData.ngoActivities} onChange={handleNgoData} />
                                            </div>
                                        </div>

                                        <input className="form-control mt-3 btn btn-primary" type="submit" value="update Feedback" />
                                    </form>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default NgoComponent;
