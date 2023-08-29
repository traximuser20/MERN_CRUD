import axios from 'axios'

const baseURL = 'http://localhost:8000';

export const addUser = async(user) => {
    try 
    {
        return await axios.post(`${baseURL}/add`, user)
    }
    catch(error)
    {
        console.log("Error while adding user: ",error)
    }
}

export const getUsers = async() => {
    try 
    {
        return await axios.get(`${baseURL}/all`)
    }
    catch(error)
    {
        console.log("Error while getting users: ", error)
    }
}

export const viewUser = async(id) => {
    try 
    {
        return await axios.get(`${baseURL}/view/${id}`)
    }
    catch(error)
    {
        console.log("Error while getting user: ", error)
    }
}

export const getUser = async(id) => {
    try 
    {
        return await axios.get(`${baseURL}/${id}`)
    }
    catch(error)
    {
        console.log("Error while editing user: ", error)
    }
}

export const editUser = async(user, id) => {
    try 
    {
        return await axios.put(`${baseURL}/${id}`, user)
    }
    catch(error)
    {
        console.log("Error while editing user: ", error)
    }
}

export const deleteUser = async(id) => {
    try 
    {
        return await axios.delete(`${baseURL}/${id}`)
    }
    catch(error)
    {
        console.log("Error while deleting user: ", error)
    }
}