// Dinh nghia cac function goi API
import axios from "axios";
import axiosClient from "./axiosClient";
import { lightGreen } from "@mui/material/colors";

export const getImages = () => {
    return axiosClient.get("user/get-image", {
        params: {
            id: "",
        }
    });
};

export const searchImages = (value) => {
    return axiosClient.get(`user/get-image/image/${value}`)
};


export const getImagesDetail = (image_id) => {
    return axiosClient.get(`/user/get-image/detail/${image_id}`);
};

export const getImageCreated = (user_id) => {
    return axiosClient.get(`/user/get-user/created/${user_id}`);
}

export const getImageSaved = (user_id) => {
    return axiosClient.get(`/user/get-user/saved/${user_id}`);
}

export const addImage = ({payload, user_id}) => {
    console.log(" Line 32 ",payload);
    // const userId = payload.user_id;
    console.log(user_id);
    // chú ý: khi thêm/ cập nhật dữ liệu có những dữ liệu như file
    // Cần dùng đối tượng form data để làm việc với đối tượng này
    const formData = new FormData();
    // formData.append(key, payload[key])
    for (let key in payload) {
        formData.append(key, payload[key]) 
    }
    
    return axiosClient.post(`user/upload-image/${user_id}`, formData);

    // return axiosClient.post(`user/upload-image/11`, formData);
}

export const editUser = ({ values ,user_id }) => {
    console.log("Line 49", values);
    console.log("Line 50 ", user_id);

    // const formData = new FormData();
    // for (let key in values) {
    //     formData.append(key, values[key])
    // }

    return axiosClient.patch(`user/update-user/${user_id}`, values);
}

export const deleteImage = (image_id) => {
    return axiosClient.delete(`user/remove-image/${image_id}`);
}
export const checkImageSaved = (image_id) => {
    return axiosClient.get(`user/get-image/saved/${image_id}`);
}

export const postCmt =  ({payload, user_id}) => {
    
    console.log("Line 69", user_id ,payload);
    // const formData = new FormData();
    // // formData.append(key, payload[key])
    // for (let key in payload) {
    //     formData.append(key, payload[key]) 
    // }
    
    return axiosClient.post(`user/get-image/give-cmt/${user_id}`, payload );
}
