import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            "API-KEY": "6243de51-8ec8-4a48-80dd-5ca6c2927c02"
        }
    }
)

export const usersAPI = {
    getUsers(activePageNumber, pageSize) {
        return instance.get(`users?page=${activePageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response;
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => {
                return response;
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response;
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response;
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }
}