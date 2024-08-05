import api from ".";

export const getRoutesAPI = async () => {
  const response = await api.get(`/route`);
  return response;
};

export const addRouteAPI = async (data) => {
  const response = await api.post(`/route`, data);
  return response;
};

export const getStoppageAPI = async () => {
  const response = await api.get(`/route/stoppages`);
  return response;
};

export const addStoppageAPI = async (id, data) => {
  const response = await api.post(`/route/${id}/stoppage`, data);
  return response;
};

export const getRouteInfoAPI = async (id) => {
  const response = await api.get(`/route/${id}`);
  return response;
};

export const deleteRouteAPI = async (id) => {
  const response = await api.delete(`/route/${id}`);
  return response;
}
