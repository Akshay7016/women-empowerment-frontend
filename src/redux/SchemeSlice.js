import { createSlice } from "@reduxjs/toolkit";
import SchemeModel from '../model/SchemeModel'

const SchemeSlice = createSlice({
    name:'scheme',

    initialState: {

        schemeState: new SchemeModel(),
        schemeList : [],
        schemeTypeList : [], 
        schemeDateList : [],
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
        }


    }
}

);

export const {getSchemeById, getAllSchemes, getSchemeByType, getSchemeByLaunchDate} = SchemeSlice.actions;
export default SchemeSlice.reducer;