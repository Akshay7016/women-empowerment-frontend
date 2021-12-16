import { createSlice } from "@reduxjs/toolkit";
import SchemeModel from '../model/SchemeModel'

const SchemeSlice = createSlice({
    name:'scheme',

    initialState: {

        schemeState: new SchemeModel(),
        schemeList : [],
    },

    reducers: {
        getSchemeById: (state, action) => {
            console.log("SchemeSlice reducers getSchemeById");
            state.schemeState = action.payload;
        },

        getAllSchemes : (state, action) => {
            console.log("SchemeSlice reducers getAllSchemes");
            state.schemeList = action.payload;
        },

        getSchemeByType: (state, action) => {
            console.log("SchemeSlice reducers getSchemeByType");
            state.schemeList = action.payload;
        },

        getSchemeByLaunchDate: (state, action) => {
            console.log("SchemeSlice reducers getSchemeByLaunchDate");
            state.schemeList = action.payload;
        },

        getSchemeByEligibility : (state, action) => {
            console.log("SchemeSlice reducers getSchemeByEligibility");
            state.schemeList = action.payload;
        },

        deleteSchemeByID : (state, action) => {
            console.log("SchemeSlice reducers deleteScheme");
            state.schemeState = action.payload;
        },

        addScheme : (state, action) => {
            console.log("SchemeSlice reducers addScheme");
            state.schemeState = action.payload;
        }


    }
}

);

export const {getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate, getSchemeByEligibility, deleteSchemeByID, addScheme} = SchemeSlice.actions;
export default SchemeSlice.reducer;