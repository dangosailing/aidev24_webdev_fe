import axiosInstance from "./axiosInstance";

export const newPath = async (pathData) => {
  try {
    const response = await axiosInstance.post("/paths/get-path", pathData);
    return response.data;
  } catch (error) {
    console.error("Error geting new path", error);
    throw error;
  }
};

export const getPaths = async () => {
    try {
        const response = await axiosInstance.get(`/users/get-paths`)
        return response.data
    } catch (error) {
        console.error("Error getting paths", error)
        throw error
    }
}
export const savePath = async (pathData) => {
  try {
    const response = await axiosInstance.post("/paths/save-path", pathData);
    return response.data;
  } catch (error) {
    console.error("Error saving path", error);
    throw error;
  }
};

export const deletePath = async (path_id) => {
  try {
    const response = await axiosInstance.delete(`/paths/delete-path/${path_id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting path", error);
    throw error;
  }
};

export const updatePath = async (path_id, pathData) => {
  try {
    const response = await axiosInstance.put(`/paths/update-path/${path_id}`, pathData);
    return response.data;
  } catch (error) {
    console.error("Error deleting path", error);
    throw error;
  }
};

export const getPath = async () => {
  try {
      const response = await axiosInstance.get(`/users/get-path`)
      return response.data.path
  } catch (error) {
      console.error("Error getting path", error)
      throw error
  }
}