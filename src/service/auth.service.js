import api from ".";

export const loginAPI = async (email, password) => {
  try {
    const response = await api.post(`/auth/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
