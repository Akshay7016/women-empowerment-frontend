import { createSlice } from "@reduxjs/toolkit";
import FeedbackModel from '../model/FeedbackModel';

const FeedbackSlice = createSlice({
    name:'feedback',

    initialState: {

        feedbackState: new FeedbackModel(),
        feedbackList:[],
        feedbackDelete : new FeedbackModel(),
        feedbackAdd : new FeedbackModel()
       
    },

    reducers: {
        getFeedBackById: (state, action) => {
            console.log("FeedbackSlice reducers getFeeBackById");
            state.feedbackState = action.payload;
        },
        getAllFeedback: (state, action) => {
            console.log('FeedbackSlice reducers getAllFeedback');
            state.feedbackList = action.payload;
        },
        deleteFeedbackByID : (state, action) => {
            console.log("FeedbackSlice reducers deleteFeedback");
            state.feedbackDelete = action.payload;
        },
        addFeedback : (state, action) => {
            console.log("FeedbackSlice reducers addFeedback");
            state.feedbackAdd = action.payload;
        },

        updateFeedback:(state,action)=>{
            console.log("FeedbackSlice reducers updateFeedback");
            state.trainingcourseState=action.payload;
        }
        
        
    }
}

);

export const {getFeedBackById,getAllFeedback,deleteFeedbackByID, addFeedback,updateFeedback} = FeedbackSlice.actions;
export default FeedbackSlice.reducer;