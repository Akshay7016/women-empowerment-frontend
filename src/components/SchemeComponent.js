import { deleteSchemeByID, addScheme } from "../redux/SchemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteSchemeService, addSchemeService } from "../service/SchemeService";
import Scheme from "../model/Scheme";
import UserSchemeComponent from "./UserSchemeComponent";

const SchemeComponent = () => {

    const [schemeData, setSchemeData] = useState(new Scheme());


    const dispatch = useDispatch();

    const schemeDelete = useSelector((state) => state.scheme.schemeDelete);

    const handleSchemeData = (e) => {
        console.log("handleSchemeData");
        setSchemeData({
            ...schemeData,
            [e.target.name]: e.target.value
        });
    }


    // --------------------------------------------------------------------------------

    const submitDeleteScheme = (evt) => {
        evt.preventDefault();
        console.log('submitDeleteSchemey');
        deleteSchemeService(schemeData.schemeId)
            .then((response) => {
                alert(`Scheme deleted successfully.`)
                dispatch(deleteSchemeByID(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with Id ${schemeData.schemeId} not found.`);
            });

    }

    // --------------------------------------------------------------------------------

    const submitAddScheme = (evt) => {
        evt.preventDefault();
        console.log('submitAddScheme');
        addSchemeService(schemeData)
            .then((response) => {
                alert(`Scheme Added successfully.`)
                dispatch(addScheme(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme already present.`);
            });

    }

    // --------------------------------------------------------------------------------


    // --------------------------------------------------------------------------------


    return (
        <div>

            <UserSchemeComponent />

            <div className="container">

                <div id="accordion">
                    {/* ---------------------Delete Scheme By Id------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <h4>Delete scheme by Id</h4>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <h3>Delete scheme by Id</h3>
                                    <form className="form form-group form-primary" onSubmit={submitDeleteScheme}>
                                        <input className="form-control mt-3" type="number" id="schemeId" name="schemeId" value={schemeData.schemeId} onChange={handleSchemeData} placeholder="Enter Scheme Id" required />
                                        <input className="form-control mt-3 btn btn-danger" type="submit" value="Delete Scheme" />
                                    </form>

                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
                                            <tr>
                                                <th>Scheme Id</th>
                                                <th>Name</th>
                                                <th>Objective</th>
                                                <th>Eligibility</th>
                                                <th>Launch Date</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{schemeDelete.schemeId}</td>
                                                <td>{schemeDelete.schemeName}</td>
                                                <td>{schemeDelete.schemeObjective}</td>
                                                <td>{schemeDelete.schemeEligibility}</td>
                                                <td>{schemeDelete.schemeLaunchDate}</td>
                                                <td>{schemeDelete.schemeType}</td>


                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>


                    {/* -----------------------------Add Scheme------------------------------------- */}

                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <h4>Add Scheme</h4>
                                </button>
                            </h5>
                        </div>

                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                            <div class="card-body">

                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    <h3>Add Scheme</h3>

                                    <form className="form form-group form-primary" onSubmit={submitAddScheme}>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Scheme Id</label>
                                            <div class="col-sm-10">
                                                <input type="number" class="form-control" id="schemeId" name="schemeId" value={schemeData.schemeId} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Scheme Name</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="schemeName" name="schemeName" value={schemeData.schemeName} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Scheme Objective</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="schemeObjective" name="schemeObjective" value={schemeData.schemeObjective} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Scheme Eligibility</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="schemeEligibility" name="schemeEligibility" value={schemeData.schemeEligibility} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Launch Date</label>
                                            <div class="col-sm-10">
                                                <input type="date" class="form-control" id="schemeLaunchDate" name="schemeLaunchDate" value={schemeData.schemeLaunchDate} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label">Type</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="schemeType" name="schemeType" value={schemeData.schemeType} onChange={handleSchemeData} />
                                            </div>
                                        </div>

                                        





                                        <input className="form-control mt-3 btn btn-success" type="submit" value="Add Scheme" />
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -----------------------------Update Scheme------------------------------------- */}



                </div>
            </div>
        </div>
    );
}


export default SchemeComponent;