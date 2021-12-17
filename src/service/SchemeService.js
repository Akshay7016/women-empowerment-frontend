import axios from 'axios';

const getSchemeByIdService = (sid) => {
    console.log(`getSchemeByIdService`);
    return axios.get(`/schemebyid/${sid}`);
}

const getAllSchemeService = () =>{
    console.log('getAllSchemeService');
    return axios.get(`/viewallschemes`);
}

const getSchemeByTypeService = (type) => {
    console.log('getSchemeByTypeService');
    return axios.get(`/viewbytype/${type}`);
}

const getSchemeByDateService = (date) => {
    console.log('getSchemeByDateService');
    return axios.get(`/viewbylaunchdate/${date}`);
}

const getSchemeByEligibilityService = (eligibility) => {
    console.log('getSchemeByEligibilityService');
    return axios.get(`/viewbyeligibility/${eligibility}`);
}


const deleteSchemeService = (deleteScheme) => {
    console.log('deleteSchemeService');
    return axios.delete(`/deleteschemebyid/${deleteScheme}`);
}

const addSchemeService = (add) => {
    console.log('addSchemeService');
    return axios.post(`/addscheme`,add);
}

const updateSchemeService = (update) => {
    console.log('updateSchemeService');
    return axios.put(`/updatescheme`,update);
}


export { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService, getSchemeByDateService, getSchemeByEligibilityService, deleteSchemeService, addSchemeService, updateSchemeService};