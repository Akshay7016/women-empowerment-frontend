import axios from 'axios';

const getTraineeByIdService = (tid) => {
    console.log(`getTraineeByIdService`);
    return axios.get(`/viewTraineeByTraineeId/${tid}`);
}

const getAllTraineeService = () =>{
    console.log('getAllTraineeService');
    return axios.get(`/viewAllTrainee`);
}

const getAllTraineeByLocationService = (location) =>{
    console.log('getAllTraineeByLocationService');
    return axios.get(`/viewAllTraineesByLocation/${location}`);
}

const getTraineeByAadharService = (adn) => {
    console.log(`getTraineeByAadharService`);
    return axios.get(`/viewbyaadharno/${adn}`);
}


const deleteTraineeService = (deleteTrainee) => {
    console.log('deleteTraineeService');
    return axios.delete(`deleteTraineeByTraineeId/${deleteTrainee}`);
}


const addTraineeService = (add) => {
    console.log('addTraineeService');
    return axios.post(`/addtrainee`,add);
}

const updateTraineeService=(add)=>{
    console.log("updateTraineeService");
    return axios.put(`/updatetrainee`,add);
}

const getAllTraineeByFirstNameService = (firstName) =>{
    console.log('getAllTraineeByFirstNameService');
    return axios.get(`/viewTraineeByFirstName/${firstName}`);
}


const getAllTraineeByLastNameService = (lastName) =>{
    console.log('getAllTraineeByLastNameService');
    return axios.get(`/viewTraineeByLastName/${lastName}`);
}




export { getTraineeByIdService,getAllTraineeService,getAllTraineeByLocationService,getTraineeByAadharService,deleteTraineeService,addTraineeService,updateTraineeService,getAllTraineeByFirstNameService,getAllTraineeByLastNameService};