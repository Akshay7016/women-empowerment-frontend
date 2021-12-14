import axios from 'axios';

const getSchemeByIdService = (sid) => {
    console.log(`getSchemeByIdService`);
    return axios.get(`/schemebyid/${sid}`);
}

const getAllSchemeService = () =>{
    console.log('getAllSchemeService');
    return axios.get('/viewallschemes');
}

const getSchemeByTypeService = (type) => {
    console.log('getSchemeByTypeService');
    return axios.get('/viewbytype/${type}');
}

export { getSchemeByIdService, getAllSchemeService, getSchemeByTypeService};