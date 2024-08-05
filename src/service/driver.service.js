import api from ".";

export const getAllDriversAPI = async () => {
  const response = await api.get(`/driver`);
  return response;
};

export const updateDriverAPI = async (id, data) => {
  const response = await api.patch(`/driver/${id}`, data);
  return response;
};

export const getDriverInfoAPI = async (id) => {
  const response = await api.get(`/driver/${id}`);
  console.log("response", id);
  return response;
};
