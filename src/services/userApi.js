import axiosInstance from "./axiosInstance"


export const createUser = async (userData) => {
    try{
        const response = await axiosInstance.post("/users/create-user", userData)
        return response.data
    }catch(error){
        console.error("Error creating user:", error)
        throw error
    }

}