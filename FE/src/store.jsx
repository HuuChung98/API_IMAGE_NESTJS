//set up store
import { configureStore } from '@reduxjs/toolkit';
import imagesSlice from './modules/Home/slices/imagesSlice';
import searchImageSlice from './modules/Home/slices/searchImageSlice';
import getDetailSlice from './modules/Detail/slices/getDetailSlice';
import authSlices from './modules/Auth/slices/authSlices';
import manageUserSlice from './modules/Manage/slices/manageUserSlice';
import imageSavedSlice from './modules/Manage/slices/imageSavedSlice';
import addImageSlice from './modules/AddImage/slices/addImageSlice';
import editSlice from './modules/EditUser/slices/editSlice';
import checkImageSlice from './modules/Detail/slices/checkImageSlice';
import postCommentSlice from './modules/Detail/slices/postCommentSlice';

const store = configureStore({
    reducer: {
        imageShowing: imagesSlice,
        search: searchImageSlice,
        imageDetail: getDetailSlice,
        auth: authSlices,
        userInfor: manageUserSlice,
        imageSaved: imageSavedSlice,
        image: addImageSlice,
        editUser: editSlice,
        checkImage: checkImageSlice,
        post: postCommentSlice,

    },
});

export default store;