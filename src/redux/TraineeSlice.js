import { createSlice } from "@reduxjs/toolkit";
import TraineeModel from '../model/TraineeModel'

const TraineeSlice = createSlice({
    name:'trainee',

    initialState: {

        traineeState: new TraineeModel(),
        traineeList : [],
        traineeDelete : new TraineeModel(),
        traineeStateLocation : [],
        TraineeAdd : new TraineeModel(),
        traineeStateAadhar : new TraineeModel(),
        traineeFirstName : [],
        traineeLastName : [],

    },

    reducers: {
        getTraineeById: (state, action) => {
            console.log("TraineeSlice reducers getTraineeById");
            state.traineeState = action.payload;
        },
        
        getAllTrainee : (state, action) => {
            console.log("TraineeSlice reducers getAllTrainees");
            state.traineeList = action.payload;
        },

        getAllTraineeByLocation : (state, action) => {
            console.log("TraineeSlice reducers getAllTraineesByLocation");
            state.traineeStateLocation = action.payload;
        },


        getTraineeByAadhar: (state, action) => {
            console.log("TraineeSlice reducers getTraineeByAadhar");
            state.traineeStateAadhar = action.payload;
        },

        deleteTraineeByID : (state, action) => {
            console.log("TraineeSlice reducers deleteTrainee");
            state.traineeDelete = action.payload;
        },

        getTraineeFirstName : (state, action) => {
            console.log("TraineeSlice reducers getTraineeFirstName");
            state.traineeFirstName = action.payload;
        },

        getTraineeLastName : (state, action) => {
            console.log("TraineeSlice reducers getTraineeLastName");
            state.traineeLastName = action.payload;
        },




    }
}

);

export const {getTraineeById,getAllTrainee,deleteTraineeByID,getAllTraineeByLocation,getTraineeByAadhar, getTraineeFirstName,getTraineeLastName} = TraineeSlice.actions;
export default TraineeSlice.reducer;
