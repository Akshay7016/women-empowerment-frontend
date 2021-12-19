import schemeReducer from './SchemeSlice';
import ngoReducer from './NgoSlice';
import trainingcourseReducer from './TrainingCourseSlice';
import feedbackReducer from './FeedbackSlice';
import traineeReducer from './TraineeSlice';

import { configureStore } from "@reduxjs/toolkit";

console.log('store');
const store = configureStore(
    {
        reducer: {
            scheme : schemeReducer,
            ngo : ngoReducer,
            trainingcourse : trainingcourseReducer,
            feedback : feedbackReducer,
            trainee : traineeReducer,   
        }
    }
);

export default store;