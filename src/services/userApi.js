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