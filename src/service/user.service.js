import api from "."

export const addUserAPI = async (data) => {
    const response = await api.post(`/auth/register`, data)
    return response

}

export const getUsersAPI = async (role) => {
    const response = await api.get(`/user?role=${role}`)
    return response
}


export const updateUserAPI = async (id, data) => {
    const response = await api.patch(`/user/${id}`, data)
    return response
}

export const deleteUserAPI = async (id) => {
    const response = await api.delete(`/user/${id}`)
    return response
}

