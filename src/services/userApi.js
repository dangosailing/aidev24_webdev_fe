import axiosInstance from './axiosInstance';

export const login = async (UserData) => {
    try {
        const response = await axiosInstance.post('/users/login', UserData, {
        })
        const token = response.data.user.token

        if (token)
            sessionStorage.setItem('token', token)
        return response.data
    } catch (error) {
        console.error('could not login', error)
        throw error
    }
}

export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post("/users/create-user", userData)
        return response.data
    } catch (error) {
        console.error("Error creating user:", error)
        throw error
    }
}

export const updateUsername = async (userData) => { 
    try {
        const response = await axiosInstance.post("/users/update-user", userData)
        return response.data
    } catch (error) {
        console.error("Error updating username:", error)
    }
}

export const deleteUsername = async () => { 
    try {
        const response = await axiosInstance.delete("/users/delete-user")
        return response.data;
    } catch (error) {
        console.error("Error deleting username:", error);
        throw error;
    }
}