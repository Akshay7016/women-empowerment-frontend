import { getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate, getSchemeByEligibility, deleteSchemeByID, addScheme } from "../redux/SchemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService, getSchemeByDateService, getSchemeByEligibilityService, deleteSchemeService, addSchemeService } from "../service/SchemeService";
import Scheme from "../model/Scheme";


const SchemeComponent = () => {

    const [training, setTraining] = useState({});
    const [schemeData, setSchemeData] = useState(new Scheme());

    const dispatch = useDispatch();

    const schemeState = useSelector((state) => state.scheme.schemeState);
    const schemeList = useSelector((state) => state.scheme.schemeList);
    const schemeTypeList = useSelector((state) => state.scheme.schemeTypeList);
    const schemeDateList = useSelector((state) => state.scheme.schemeDateList);
    const schemeEligibilityList = useSelector((state) => state.scheme.schemeEligibilityList);
    const schemeDelete = useSelector((state) => state.scheme.schemeDelete);


    const handleSchemeData = (e) => {
        console.log("handleSchemeData");
        setSchemeData({
            ...schemeData,
            [e.target.name]: e.target.value
        });
    }


    // --------------------------------------------------------------------------------

    const submitGetSchemeById = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeById');
        getSchemeByIdService(schemeData.schemeId)
            .then((response) => {
                console.log(response.data);
                setTraining(response.data.trainingCourse);
                dispatch(getSchemeById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with Id ${schemeData.schemeId} not found.`);
            });
    }

    // --------------------------------------------------------------------------------

    const submitGetAllSchemes = (evt) => {
        evt.preventDefault();
        console.log("submitGetAllSchemes")
        getAllSchemeService()
            .then((response) => {
                dispatch(getAllSchemes(response.data));
            })
            .catch(() => {
                alert('Schemes not found.');
            });
    }

    // --------------------------------------------------------------------------------


    const submitGetSchemeByType = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeByType');
        getSchemeByTypeService(schemeData.schemeType)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeByType(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with type ${schemeData.schemeType} not found.`);
            });

    }

    // --------------------------------------------------------------------------------


    const submitGetSchemeByDate = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeByDate');
        getSchemeByDateService(schemeData.schemeLaunchDate)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeByLaunchDate(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with date ${schemeData.schemeLaunchDate} not found.`);
            });

    }

    // --------------------------------------------------------------------------------

    const submitGetSchemeByEligibility = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeByEligibility');
        getSchemeByEligibilityService(schemeData.schemeEligibility)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeByEligibility(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with eligibility ${schemeData.schemeEligibility} not found.`);
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
        <div className="container">
            <br />
            <h1 className="display-3 text-warning mt-3 mb-3 font-weight-bold text-center" >Scheme Component</h1>
            <br /><br />

            <div id="accordion">

                {/* ---------------------Find Scheme By Id------------------------------------- */}
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h4>Find scheme by Id</h4>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">


                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white ">
                                <h3>Find scheme by Id</h3>
                                <form className="form form-group form-primary" onSubmit={submitGetSchemeById}>
                                    <input className="form-control mt-3" type="number" id="schemeId" name="schemeId" value={schemeData.schemeId} onChange={handleSchemeData} placeholder="Enter Scheme Id" required />
                                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
                                </form>

                                <table className="table table-light table-striped">
                                    <thead class="table-warning">
                                        <tr>
                                            <th>Scheme Id</th>
                                            <th>Name</th>
                                            <th>Objective</th>
                                            <th>Eligibility</th>
                                            <th>Launch Date</th>
                                            <th>Type</th>
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{schemeState.schemeId}</td>
                                            <td>{schemeState.schemeName}</td>
                                            <td>{schemeState.schemeObjective}</td>
                                            <td>{schemeState.schemeEligibility}</td>
                                            <td>{schemeState.schemeLaunchDate}</td>
                                            <td>{schemeState.schemeType}</td>
                                            <td>{training.courseName}</td>
                                            <td>{training.courseDurationn}</td>

                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>


                {/* ---------------------Find All Schemes------------------------------------- */}

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>Find all Schemes</h4>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">


                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                <h3>Find all Schemes</h3>
                                <div>
                                    <form className="form form-group form-primary">
                                        <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllSchemes} value="Find All Schemes" />
                                    </form>
                                </div>
                                <table className="table table-light table-striped ">
                                    <thead class="table-warning">
                                        <tr>
                                            <th>Scheme Id</th>
                                            <th>Name</th>
                                            <th>Objective</th>
                                            <th>Eligibility</th>
                                            <th>Launch Date</th>
                                            <th>Type</th>
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schemeList.map((scheme, key) => {
                                            return (
                                                <tr key={key}>  <td>{scheme.schemeId}</td>
                                                    <td>{scheme.schemeName}</td>
                                                    <td>{scheme.schemeObjective}</td>
                                                    <td>{scheme.schemeEligibility}</td>
                                                    <td>{scheme.schemeLaunchDate}</td>
                                                    <td>{scheme.schemeType}</td>
                                                    <td>{scheme.trainingCourse.courseName}</td>
                                                    <td>{scheme.trainingCourse.courseDurationn}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                </div>



                {/* ---------------------Find Scheme By Type------------------------------------- */}


                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4>Find Schemes By Type</h4>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">


                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                <h3>Find Schemes By Type</h3>

                                <form className="form form-group form-primary" onSubmit={submitGetSchemeByType}>
                                    <div class="form-group">
                                        <select class="form-control mb-3" name="schemeType" id="schemeType" value={schemeData.schemeType} onChange={handleSchemeData}>
                                            <option value="Type">Select a Type</option>
                                            <option value="Free">Free</option>
                                            <option value="Paid">Paid</option>
                                        </select>
                                    </div>
                                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
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
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schemeTypeList.map((scheme, key) => {
                                            return (
                                                <tr key={key}>  <td>{scheme.schemeId}</td>
                                                    <td>{scheme.schemeName}</td>
                                                    <td>{scheme.schemeObjective}</td>
                                                    <td>{scheme.schemeEligibility}</td>
                                                    <td>{scheme.schemeLaunchDate}</td>
                                                    <td>{scheme.schemeType}</td>
                                                    <td>{scheme.trainingCourse.courseName}</td>
                                                    <td>{scheme.trainingCourse.courseDurationn}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------------Find Scheme By Launch Date------------------------------------- */}

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h4>Find Scheme By Launch Date</h4>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">


                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                <h3>Find scheme by Launch Date</h3>
                                <form className="form form-group form-primary" onSubmit={submitGetSchemeByDate}>
                                    <input className="form-control mt-3" type="date" id="schemeLaunchDate" name="schemeLaunchDate" value={schemeData.schemeLaunchDate} onChange={handleSchemeData} required />
                                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
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
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schemeDateList.map((scheme, key) => {
                                            return (
                                                <tr key={key}>  <td>{scheme.schemeId}</td>
                                                    <td>{scheme.schemeName}</td>
                                                    <td>{scheme.schemeObjective}</td>
                                                    <td>{scheme.schemeEligibility}</td>
                                                    <td>{scheme.schemeLaunchDate}</td>
                                                    <td>{scheme.schemeType}</td>
                                                    <td>{scheme.trainingCourse.courseName}</td>
                                                    <td>{scheme.trainingCourse.courseDurationn}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>


                {/* ---------------------Find Scheme By Eligibility------------------------------------- */}

                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h4>Find Schemes By Eligibility</h4>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div class="card-body">


                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                <h3>Find Schemes By Eligibility</h3>

                                <form className="form form-group form-primary" onSubmit={submitGetSchemeByEligibility}>
                                    <div class="form-group">
                                        <select class="form-control mb-3" name="schemeEligibility" id="schemeEligibility" value={schemeData.schemeEligibility} onChange={handleSchemeData}>
                                            <option value="eligibility">Select Eligibility</option>
                                            <option value="BE">BE</option>
                                            <option value="ME">ME</option>
                                            <option value="BA">BA</option>
                                            <option value="BCOM">BCOM</option>
                                            <option value="10th Pass">10th Pass</option>
                                            <option value="12th Pass">12th Pass</option>
                                            <option value="Any Qualification">Any Qualification</option>
                                        </select>
                                    </div>
                                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
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
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {schemeEligibilityList.map((scheme, key) => {
                                            return (
                                                <tr key={key}>  <td>{scheme.schemeId}</td>
                                                    <td>{scheme.schemeName}</td>
                                                    <td>{scheme.schemeObjective}</td>
                                                    <td>{scheme.schemeEligibility}</td>
                                                    <td>{scheme.schemeLaunchDate}</td>
                                                    <td>{scheme.schemeType}</td>
                                                    <td>{scheme.trainingCourse.courseName}</td>
                                                    <td>{scheme.trainingCourse.courseDurationn}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

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

                                    {/* <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Course Id</label>
                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="courseId" name="courseId" value={schemeData.trainingCourse} onChange={handleSchemeData} />
                                        </div>
                                    </div> */}



                                    <input className="form-control mt-3 btn btn-success" type="submit" value="Add Scheme" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                {/* -----------------------------Update Scheme------------------------------------- */}



            </div>
        </div>
    );
}


export default SchemeComponent;