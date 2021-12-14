import { getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate } from "../redux/SchemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService, getSchemeByDateService } from "../service/SchemeService";
import SchemeModel from "../model/SchemeModel";



const Scheme = () => {

    const [sid, setSid] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();

    const schemeData = useSelector((state) => state.scheme.schemeState);
    const schemeList = useSelector((state) => state.scheme.schemeList);
    const schemeTypeList = useSelector((state) => state.scheme.schemeTypeList);
    const schemeDateList = useSelector((state) => state.scheme.schemeDateList);


    const handleScheme = (e) => {
        console.log('handleScheme');
        setSid(e.target.value);
    }

    const handleSchemeType = (e) => {
        console.log('handleSchemeType');
        setType(e.target.value);
    }

    const handleSchemeDate = (e) => {
        console.log('handleSchemeDate');
        setDate(e.target.value);
    }

    // const handleScheme = (e) => {
    //     console.log('handleScheme');
    //     setSid({
    //         ...sid,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // const handleSchemeType = (e) => {
    //     console.log('handleSchemeType');
    //     setType({
    //         ...type,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // --------------------------------------------------------------------------------

    const submitGetSchemeById = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeById');
        getSchemeByIdService(sid)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with Id ${sid} not found.`);
            });

        setSid('');
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
        getSchemeByTypeService(type)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeByType(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with type ${type} not found.`);
            });

        setType('Select a Type');
    }

    // --------------------------------------------------------------------------------


    const submitGetSchemeByDate = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeByDate');
        getSchemeByDateService(date)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeByLaunchDate(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with date ${date} not found.`);
            });

    }

    // --------------------------------------------------------------------------------


    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Scheme Component</h1>

            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Find scheme by Id</h3>
                <form className="form form-group form-primary" onSubmit={submitGetSchemeById}>
                    <input className="form-control mt-3" type="number" id="sid" name="sid" value={sid} onChange={handleScheme} placeholder="Enter Scheme Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
                </form>

                <table className="table table-light table-striped ">
                    <thead>
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
                            <td>{schemeData.schemeId}</td>
                            <td>{schemeData.schemeName}</td>
                            <td>{schemeData.schemeObjective}</td>
                            <td>{schemeData.schemeEligibility}</td>
                            <td>{schemeData.schemeLaunchDate}</td>
                            <td>{schemeData.schemeType}</td>

                        </tr>
                    </tbody>
                </table>

            </div>


            <hr />
            {/* ---------------------------------------------------------------------------------- */}

            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h3>Find all Schemes</h3>
                    <div>
                        <form className="form form-group form-primary">
                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllSchemes} value="Find All Schemes" />
                        </form>
                    </div>
                    <table className="table table-light table-striped ">
                        <thead>
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
                            {schemeList.map((scheme, key) => {
                                return (
                                    <tr key={key}>  <td>{scheme.schemeId}</td>
                                        <td>{scheme.schemeName}</td>
                                        <td>{scheme.schemeObjective}</td>
                                        <td>{scheme.schemeEligibility}</td>
                                        <td>{scheme.schemeLaunchDate}</td>
                                        <td>{scheme.schemeType}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


            <hr />
            {/* ---------------------------------------------------------------------------------- */}


            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h3>Find Schemes By Type</h3>
                    {/* <div class="form-group">
                        <select class="form-control mb-3" name="schemeType" id="schemeType" value={type.schemeType} onChange={handleSchemeType}>
                            <option value="Type">Select a Type</option>
                            <option value="Free">Free</option>
                            <option value="Paid">Paid</option>
                        </select>
                    </div> */}


                    <form className="form form-group form-primary" onSubmit={submitGetSchemeByType}>
                        <div class="form-group">
                            <select class="form-control mb-3" name="type" id="type" value={type} onChange={handleSchemeType}>
                                <option value="Type">Select a Type</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
                    </form>

                    <table className="table table-light table-striped ">
                        <thead>
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
                            {schemeTypeList.map((scheme, key) => {
                                return (
                                    <tr key={key}>  <td>{scheme.schemeId}</td>
                                        <td>{scheme.schemeName}</td>
                                        <td>{scheme.schemeObjective}</td>
                                        <td>{scheme.schemeEligibility}</td>
                                        <td>{scheme.schemeLaunchDate}</td>
                                        <td>{scheme.schemeType}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


            <hr />
            {/* ---------------------------------------------------------------------------------- */}


            <div>
                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                    <h3>Find scheme by Launch Date</h3>
                    <form className="form form-group form-primary" onSubmit={submitGetSchemeByDate}>
                        <input className="form-control mt-3" type="date" id="date" name="date" value={date} onChange={handleSchemeDate} autoFocus required />
                        <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Scheme" />
                    </form>

                    <table className="table table-light table-striped ">
                        <thead>
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
                            {schemeDateList.map((scheme, key) => {
                                return (
                                    <tr key={key}>  <td>{scheme.schemeId}</td>
                                        <td>{scheme.schemeName}</td>
                                        <td>{scheme.schemeObjective}</td>
                                        <td>{scheme.schemeEligibility}</td>
                                        <td>{scheme.schemeLaunchDate}</td>
                                        <td>{scheme.schemeType}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    );
}


export default Scheme;