import api from ".";

export const getAllDriversAPI = async () => {
    const response = await api.get(`/driver`);
    return response;
}