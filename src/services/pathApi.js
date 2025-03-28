import axiosInstance from "./axiosInstance"

export const newPath = async (pathData) => {
    try {
        const response = await axiosInstance.post("/paths/get-path", pathData)
        console.log(response)
        return response.data
    } catch (error) {
        console.error("Error geting new path", error)
        throw error
    }

}