import axios from '../axios'
const GetAllCodesApi=(type)=>{
    return axios.get(`/api/allcode2?type=${type}`)

}
const createUserApi=(data)=>{
    return axios.post("/api/create-user-crud",data)
}
export{
   GetAllCodesApi,createUserApi
};