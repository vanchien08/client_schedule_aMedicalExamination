import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/login',{email,password});
}
const getAllUser =(id)=>{
    return axios.get(`/api/get-all-users?id=${id}`);
}
const creatNewUser=(data)=>{
    return axios.post('/api/create-new-user',data)
}
const deleteUser=(id)=>{
   // return axios.delete('/api/delete-user',{id})
   return axios.delete('/api/delete-user',{
    data:{
        id
    }
   })
}
const updateUser=(data)=>{
    return axios.put('/api/edit-user',data)
}
const getAllCode=(data)=>{
    return axios.get(`/api/allcode?type=${data}`)
}
export { handleLoginApi ,getAllUser,creatNewUser,deleteUser, updateUser,getAllCode};