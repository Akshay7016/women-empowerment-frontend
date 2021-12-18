import axios from 'axios';

// Create services for other components in this way. 

const getNgoByIdService = (ngoid) => {
    console.log(`getNgoByIdService`);
    return axios.get(`/getbyngoid/${ngoid}`);
}
const getAllNgoService = () => {
    console.log(`getNgoByIdService`);
    return axios.get(`getallngo`);
}

const getNgoByLocationService = (ngolocation) => {
    console.log(`getNgoByLocationService`);
    return axios.get(`/getngobylocation/${ngolocation}`);
}

const getNgoByMotiveService = (ngomotive) => {
    console.log(`getNgoByLocationService`);
    return axios.get(`/getmgobymotive/${ngomotive}`);
}

const deleteNgoService = (deleteNgo) => {
    console.log('deleteNgoService');
    return axios.delete(`/deletengobyngoid/${deleteNgo}`);
}

const addNgoService = (add) => {
    console.log('addNgoService');
    return axios.post(`/addngo`,add);
}

const updateNgoService=(add)=>{
    console.log("updateNgoService");
    return axios.put(`/updatengo`,add);
}



export { getNgoByIdService , getAllNgoService, getNgoByLocationService, getNgoByMotiveService , deleteNgoService , addNgoService , updateNgoService};
