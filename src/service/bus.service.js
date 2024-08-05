import api from ".";

export const getBusesAPI = async () => {
    const response = await api.get(`/bus`);
    console.log("response", response);  
    return response;
}
export const addBusAPI = async (data) => {
    const response = await api.post(`/bus`, data);
    return response;
}

export const getBusByIdAPI = async (id) => {
    const response = await api.get(`/bus/${id}`);
    return response;
}

export const updateBusAPI = async (id, data) => {
    const response = await api.put(`/bus/${id}`, data);
    return response;
}

export const deleteBusAPI = async (id) => {
    const response = await api.delete(`/bus/${id}`);
    return response;
}
