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

export { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService, getSchemeByDateService};