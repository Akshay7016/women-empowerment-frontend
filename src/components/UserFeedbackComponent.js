import { getAllFeedback, getFeedBackById, addFeedback } from "../redux/FeedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getFeedbackByIdService, getAllFeedbackService, addFeedbackService, } from "../service/FeedbackService";
import FeedbackModel from "../model/FeedbackModel";

const UserFeedbackComponent = () => {



    const [feedbackData, setFeedbackData] = useState(new FeedbackModel());

    const dispatch = useDispatch();

    const feedbackDataFromStore = useSelector((state) => state.feedback.feedbackState);
    const feedbackList = useSelector((state) => state.feedback.feedbackList);

    const handleFeedbackData = (e) => {
        console.log(e);
        setFeedbackData({
            ...feedbackData,
            [e.target.name]: e.target.value
        });
    }



    const submitGetFeedbackById = (evt) => {
        evt.preventDefault();
        console.log('submitGetFeedbackById');
        getFeedbackByIdService(feedbackData.feedBackId)
            .then((response) => {
                dispatch(getFeedBackById(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Feedback with ${feedbackData.feedBackId} not found.`);
            });

    }

    const submitGetAllFeedback = (evt) => {
        evt.preventDefault();
        console.log('submitGetAllFeedback');
        getAllFeedbackService()
            .then((response) => {
                dispatch(getAllFeedback(response.data));
            })
            .catch(() => {
                alert(`Something is wrong!`);
            });
    }

    const submitAddFeedback = (evt) => {
        evt.preventDefault();
        console.log('submitAddFeedback');
        addFeedbackService(feedbackData)
            .then((response) => {
                alert(`feedback Added successfully.`)
                dispatch(addFeedback(response.data));             // Sending data to redux store

            })
            .catch(() => {
                alert(`Feedback with Id ${feedbackData.feedBackId} already present.`);
            });

    }


    return (

        <div className="container text-center">

            <br />
            <h1 className="display-3 text-primary mt-3 mb-3 text-center" ><b>FeedBack Component</b></h1><br />
            <br />

            <div class="accordion" id="accordionExample">

                {/* ----------------------------------------Find feedback by id------------------------------------------ */}

                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h4>Find feedback by id</h4>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">

                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                {/* <h3>Find feedback by id</h3> */}
                                <form className="form form-group form-primary" onSubmit={submitGetFeedbackById}>
                                    <input className="form-control mt-3" type="number" min="1" id="feedBackId" name="feedBackId" value={feedbackData.feedBackId} onChange={handleFeedbackData} placeholder="Enter Feedback Id" autoFocus required />
                                    <input className="form-control mt-3 btn btn-primary" type="submit" value="Find Feedback" />
                                </form>

                                <table className="table table-light table-striped ">
                                    <thead class="table-warning">
                                        <tr>
                                            <th>FeedBack Id</th>
                                            <th>Comments</th>
                                            <th>FeedbackDate</th>
                                            <th>Overall_rating</th>
                                            <th>Scheme_rating</th>
                                            <th>Scheme_training_rating</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{feedbackDataFromStore.feedBackId}</td>
                                            <td>{feedbackDataFromStore.comments}</td>
                                            <td>{feedbackDataFromStore.feedbackdate}</td>
                                            <td>{feedbackDataFromStore.overallRating}</td>
                                            <td>{feedbackDataFromStore.schemeRating}</td>
                                            <td>{feedbackDataFromStore.schemeTrainingRating}</td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            <hr />

                        </div>
                    </div>
                </div>
                {/* ------------------------------------Find all Feedback---------------------------------------------- */}

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4>Find all Feedback</h4>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            ''
                            <div>
                                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                    {/* <h3>Find all Feedback</h3> */}
                                    <div>
                                        <form className="form form-group form-primary">
                                            <input className="mt-3 btn btn-primary btn-block" type="button" onClick={submitGetAllFeedback} value="Find All Feedback" />
                                        </form>
                                    </div>
                                    <table className="table table-light table-striped ">
                                        <thead class="table-warning">
                                            <tr>
                                                <th>FeedBack Id</th>
                                                <th>Comments</th>
                                                <th>FeedbackDate</th>
                                                <th>Overall_rating</th>
                                                <th>Scheme_rating</th>
                                                <th>Scheme_training_rating</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {feedbackList.map((feedback, key) => {
                                                return (
                                                    <tr key={key}>  <td>{feedback.feedBackId}</td>
                                                        <td>{feedback.comments}</td>
                                                        <td>{feedback.feedbackdate}</td>
                                                        <td>{feedback.overallRating}</td>
                                                        <td>{feedback.schemeRating}</td>
                                                        <td>{feedback.schemeTrainingRating}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <hr />

                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">
                                <h4>Add Feedback</h4>
                            </button>
                        </h2>
                    </div>
                    <div id="collapse" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">

                            <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                                {/* <h3>Add Feedback</h3> */}

                                <form className="form form-group form-primary" onSubmit={submitAddFeedback}>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">Feedback Id</label>
                                        <div class="col-sm-10">
                                            <input type="number" min="1" class="form-control" id="feedBackId" name="feedBackId" value={feedbackData.feedBackId} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">comments</label>
                                        <div class="col-sm-10">
                                            <input pattern="^[a-zA-Z]+([\s][a-zA-Z]+)*$" type="text" class="form-control" id="comments" name="comments" value={feedbackData.comments} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">feedbackdate</label>
                                        <div class="col-sm-10">
                                            <input type="date" class="form-control" id="feedbackdate" name="feedbackdate" value={feedbackData.feedbackdate} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">overallRating</label>
                                        <div class="col-sm-10">
                                            <input type="number" min="1" max="5" class="form-control" id="overallRating" name="overallRating" value={feedbackData.overallRating} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">schemeRating</label>
                                        <div class="col-sm-10">
                                            <input type="number" min="1" max="5" class="form-control" id="schemeRating" name="schemeRating" value={feedbackData.schemeRating} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">schemeTrainingRating</label>
                                        <div class="col-sm-10">
                                            <input type="number" min="1" max="5" class="form-control" id="schemeTrainingRating" name="schemeTrainingRating" value={feedbackData.schemeTrainingRating} onChange={handleFeedbackData} />
                                        </div>
                                    </div>

                                    {/* <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Course Id</label>
                        <div class="col-sm-10">
                        <input type="number" class="form-control" id="schemeType" name="schemeType" value={schemeData.} onChange={handleSchemeData} />
                        </div>
                    </div> */}



                                    <input className="form-control mt-3 btn btn-success" type="submit" value="Add Feedback" />
                                    {/* <input class="btn btn-primary" type="reset" value="Reset"></input> */}
                                </form>

                            </div>

                        </div>
                    </div>


                </div>




            </div>

        </div>
    );
}

export default UserFeedbackComponent;



