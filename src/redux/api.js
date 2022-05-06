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

const usersAPI = {
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

export default usersAPI;