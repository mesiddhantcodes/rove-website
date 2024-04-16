import api from ".";

export const getRoutesAPI = async () => {
    const response = await api.get(`/route`);
    return response;
}

export const addRouteAPI = async (data) => {
    const response = await api .post(`/route`, data);
    return response;
}

export const getStoppageAPI = async (id) => {
    const response = await api.post(`/${id}/stoppage`);
    return response;
}

