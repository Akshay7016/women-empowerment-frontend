import { createSlice } from "@reduxjs/toolkit";
import SchemeModel from '../model/SchemeModel'

const SchemeSlice = createSlice({
    name:'scheme',

    initialState: {

        schemeState: new SchemeModel(),
        schemeList : [],
        schemeTypeList : [], 
        schemeDateList : [],
        schemeEligibilityList : [],
        schemeDelete : new SchemeModel(),
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
            state.schemeTypeList = action.payload;
        },

        getSchemeByLaunchDate: (state, action) => {
            console.log("SchemeSlice reducers getSchemeByLaunchDate");
            state.schemeDateList = action.payload;
        },

        getSchemeByEligibility : (state, action) => {
            console.log("SchemeSlice reducers getSchemeByEligibility");
            state.schemeEligibilityList = action.payload;
        },

        deleteSchemeByID : (state, action) => {
            console.log("SchemeSlice reducers deleteScheme");
            state.schemeDelete = action.payload;
        }


    }
}

);

export const {getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate, getSchemeByEligibility, deleteSchemeByID} = SchemeSlice.actions;
export default SchemeSlice.reducer;