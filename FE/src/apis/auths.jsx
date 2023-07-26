import axiosClient from "./axiosClient";


const authAPI = {
    login: (values) => {
        return axiosClient.post("/auth/login", values);
    },
    register: (values) => {
        return axiosClient.post("/auth/sign-up/", values);
    }
};

export default authAPI;