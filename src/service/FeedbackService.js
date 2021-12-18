import axios from 'axios';

const getFeedbackByIdService = (fid) => {
    console.log(`getFeedbackByIdService`);
    return axios.get(`/viewFeedBack/${fid}`);
}

const getAllFeedbackService = () => {
    console.log(`getAllFeedbackService`);
    return axios.get(`/viewAllfeedback`);
}


const deleteFeedbackService = (deleteFeedback) => {
    console.log('deleteFeedbackService');
    return axios.delete(`/deletefeedbackbyid/${deleteFeedback}`);
}

const addFeedbackService = (add) => {
    console.log('addFeedbackService');
    return axios.post(`/feedback`,add);
}

const updateFeedbackService=(add)=>{
    console.log("updateFeedbackService");
    return axios.put(`/updatefeedback`,add);
}

export { getFeedbackByIdService,getAllFeedbackService,deleteFeedbackService,addFeedbackService,updateFeedbackService};