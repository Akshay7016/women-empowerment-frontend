import { deleteFeedbackByID, updateFeedback } from "../redux/FeedbackSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteFeedbackService, updateFeedbackService } from "../service/FeedbackService";
import FeedbackModel from "../model/FeedbackModel";
import UserFeedbackCoponent from "./UserFeedbackComponent";

const FeedbackComponent = () => {



  const [feedbackData, setFeedbackData] = useState(new FeedbackModel());
  const [feedback, setFeedback] = useState(new FeedbackModel());

  const dispatch = useDispatch();

  const feedbackDelete = useSelector((state) => state.feedback.feedbackDelete);

  const handleFeedbackData = (e) => {
    console.log(e);
    setFeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value
    });
  }

  const handleUpdate = (e) => {
    console.log("update feedback");

    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  }



  const submitDeleteFeedback = (evt) => {
    evt.preventDefault();
    console.log('submitDeleteFeedback');
    deleteFeedbackService(feedbackData.feedBackId)
      .then((response) => {
        alert(`Feedback deleted successfully.`)
        dispatch(deleteFeedbackByID(response.data));             // Sending data to redux store

      })
      .catch(() => {
        alert(`Feedback with Id ${feedbackData.feedBackId} not found.`);
      });

  }



  const submitUpdateFeedback = (evt) => {
    evt.preventDefault();
    console.log("submitUpdateFeedback");
    updateFeedbackService(feedback)
      .then((response) => {
        dispatch(updateFeedback(response.data));
        alert(`feedback updated sucesfully`);
      })
      .catch(() => {
        alert(`feedback is not found`);
      });

  }




  return (

    <div>
      <UserFeedbackCoponent />
      <div className="container text-center">
        <div class="accordion" id="accordionExample">

          {/* ---------------------------------------Delete feedback by Id------------------------------------------- */}

          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h4>Delete feedback by Id</h4>
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">


                <div className="col-12 border border-light shadow p-3 mb-5 bg-white">
                  {/* <h3>Delete feedback by Id</h3> */}
                  <form className="form form-group form-primary" onSubmit={submitDeleteFeedback}>
                    <input className="form-control mt-3" type="number" min="1" id="feedBackId" name="feedBackId" value={feedbackData.feedBackId} onChange={handleFeedbackData} placeholder="Enter Feedback Id" autoFocus required />
                    <input className="form-control mt-3 btn btn-danger" type="submit" value="Delete Feedback" />
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
                        <td>{feedbackDelete.feedBackId}</td>
                        <td>{feedbackDelete.comments}</td>
                        <td>{feedbackDelete.feedbackdate}</td>
                        <td>{feedbackDelete.overallRating}</td>
                        <td>{feedbackDelete.schemeRating}</td>
                        <td>{feedbackDelete.schemeTrainingRating}</td>

                      </tr>
                    </tbody>
                  </table>

                </div>

                <hr />

              </div>
            </div>
          </div>
          {/* --------------------------------------Add Feedback-------------------------------------------- */}


          {/* --------------------------------------Update Feedback-------------------------------------------- */}

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapselast" aria-expanded="false" aria-controls="collapselast">
                  <h4>Update Feedback</h4>
                </button>
              </h2>
            </div>
            <div id="collapselast" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">


                <div className="col-12 border border-light shadow p-3 mb-5 bg-white ">
                  {/* <h3>Update Feedback</h3> */}

                  <form className="form form-group form-primary" onSubmit={submitUpdateFeedback}>
                    <input className="form-control mt-3" type="number" id="feedBackId" name="feedBackId" value={feedback.feedBackId} onChange={handleUpdate} placeholder="Enter Feedback id to update" autoFocus required />
                    <input className="form-control mt-3" type="text" id="comments" name="comments" value={feedback.comments} onChange={handleUpdate} placeholder="Enter Comments" autoFocus required />
                    <input className="form-control mt-3" type="date" id="feedbackdate" name="feedbackdate" value={feedback.feedbackdate} onChange={handleUpdate} placeholder="Enter Feedbackdate" autoFocus required />
                    <input className="form-control mt-3" type="number" min="1" max="5" id="overallRating" name="overallRating" value={feedback.overallRating} onChange={handleUpdate} placeholder="Enter OverallRating" autoFocus required />
                    <input className="form-control mt-3" type="number" min="1" max="5" id="schemeRating" name="schemeRating" value={feedback.schemeRating} onChange={handleUpdate} placeholder="Enter course  schemeRating" autoFocus required />
                    <input className="form-control mt-3" type="number" min="1" max="5" id="schemeTrainingRating" name="schemeTrainingRating" value={feedback.schemeTrainingRating} onChange={handleUpdate} placeholder="schemeTrainingRating" autoFocus required />
                    <input className="form-control mt-3 btn btn-primary" type="submit" value="update Feedback" />
                  </form>
                </div>

              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

        </div>

      </div>
    </div>
  );
}


export default FeedbackComponent;