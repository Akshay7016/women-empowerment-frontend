import { getSchemeById, getAllSchemes, getSchemeByType } from "../redux/SchemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService } from "../service/SchemeService";
import SchemeModel from "../model/SchemeModel";



const Scheme = () => {

    const [sid, setSid] = useState(new SchemeModel());
    

    const dispatch = useDispatch();

    const schemeDataFromStore = useSelector((state) => state.scheme.schemeState);
    const schemeList = useSelector((state) => state.scheme.schemeList);

    // const handleScheme = (e) => {
    //     console.log('handleScheme');
    //     setSid(e.target.value);
    // }

    const handleScheme = (e) => {
        console.log('handleScheme');
        setSid({
            ...sid,
            [e.target.name]: e.target.value
        });
    }

    const submitGetSchemeById = (evt) => {
        evt.preventDefault();
        console.log('submitGetSchemeById');
        getSchemeByIdService(sid.schemeId)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with ${sid} not found.`);
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
        getSchemeByIdService(sid.schemeId)
            .then((response) => {
                console.log(response.data);
                dispatch(getSchemeById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Scheme with ${sid} not found.`);
            });

        setSid('');
    }

    // --------------------------------------------------------------------------------



    return (
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3" >Scheme Component</h1>

            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                <h3>Find scheme by id</h3>
                <form className="form form-group form-primary" onSubmit={submitGetSchemeById}>
                    <input className="form-control mt-3" type="number" id="schemeId" name="schemeId" value={sid.schemeId} onChange={handleScheme} placeholder="Enter Scheme Id" autoFocus required />
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
                            <td>{schemeDataFromStore.schemeId}</td>
                            <td>{schemeDataFromStore.schemeName}</td>
                            <td>{schemeDataFromStore.schemeObjective}</td>
                            <td>{schemeDataFromStore.schemeEligibility}</td>
                            <td>{schemeDataFromStore.schemeLaunchDate}</td>
                            <td>{schemeDataFromStore.schemeType}</td>

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

            {/* ---------------------------------------------------------------------------------- */}



        </div>
    );
}


export default Scheme;