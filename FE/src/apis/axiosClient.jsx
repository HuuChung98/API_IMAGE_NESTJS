// set up cau hinh mac dinh cho axios de su dung cho ung dung
import axios from 'axios';
import store from '../store';

const axiosClient = axios.create({
    //set up url mac dinh
    // baseURL: "http://128.199.223.79:8080/"
    baseURL: "http://localhost:8080/"

    // set up token dung de log in user
    // headers: {
    //     // toke duoc tao ra luc dang nhap
    //     TokenLogin: ""
    // }

});

// axios response intercepter  
axiosClient.interceptors.response.use(
    (response) => {
        // format response trước khi trước khi trả ra data cho nơi gọi request
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response.data.message);
    }
)

// axios request intercepter 
axiosClient.interceptors.request.use(
    (config) => {
        // Thay đổi config của request trước khi gửi lên server
        const { user } = store.getState().auth;

        // lấy accessToken từ BE và gán cho Authorization của req headers 
        if (user) {
            const { token } = user;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
)

export default axiosClient;