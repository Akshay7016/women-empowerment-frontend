import { createSlice } from "@reduxjs/toolkit";
import Scheme from '../model/Scheme'

const SchemeSlice = createSlice({
    name:'scheme',

    initialState: {

        schemeState: new Scheme(),
        schemeList : [],
        schemeTypeList : [],
        schemeDateList : [],
        schemeEligibilityList : [],
        schemeDelete : new Scheme(),
        schemeAdd : new Scheme(),
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
        },

        addScheme : (state, action) => {
            console.log("SchemeSlice reducers addScheme");
            state.schemeAdd = action.payload;
        },


    }
}

);

export const {getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate, getSchemeByEligibility, deleteSchemeByID, addScheme} = SchemeSlice.actions;
export default SchemeSlice.reducer;