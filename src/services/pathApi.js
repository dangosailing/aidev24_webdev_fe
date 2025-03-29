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

export const getPaths = async () => {
    try {
        const response = await axiosInstance.get(`/paths/get-paths/`)
        console.log(response)
        return response.data
    } catch (error) {
        console.error("Error getting paths", error)
        throw error
    }
}