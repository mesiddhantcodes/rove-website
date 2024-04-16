import api from ".";

export const getBusesAPI = async () => {
    const response = await api.get(`/bus`);
    return response;
}
export const addBusAPI = async (data) => {
    const response = await api.post(`/bus`, data);
    return response;
}

