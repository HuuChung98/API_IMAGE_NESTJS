import { lazy, Suspense } from 'react';
import { Routes ,Route } from 'react-router-dom';

// import Home from './modules/Home/pages/Home';
// import ImageDetail from './modules/Detail/pages/ImageDetail'
// import Login from './modules/Auth/pages/Login';
// import Register from './modules/Auth/pages/Register';
// import ManageUser from './modules/Manage/pages/ManageUser';
// import ShowSearchImage from './modules/Home/slices/ShowSearchImage';
// import CreatedImage from "./modules/Manage/components/CreatedImage"
// import ImageSaved from './modules/Manage/components/ImageSaved';
// import AddImage from './modules/AddImage/pages/AddImage';
// import Edit from './modules/EditUser/pages/Edit';

import MainLayout from './layout/MainLayout';

// Dynamic import cho các component 
const Home = lazy(() => import('./modules/Home/pages/Home'));
const ImageDetail = lazy(() => import('./modules/Detail/pages/ImageDetail'));
const Login = lazy(() => import('./modules/Auth/pages/Login')); 
const Register = lazy(() => import( './modules/Auth/pages/Register')); 
const ShowSearchImage = lazy(() => import('./modules/Home/slices/ShowSearchImage'));
const ManageUser = lazy(() => import('./modules/Manage/pages/ManageUser'));
const CreatedImage = lazy(() => import("./modules/Manage/components/CreatedImage"));
const ImageSaved = lazy(() => import('./modules/Manage/components/ImageSaved'));
const AddImage = lazy(() => import('./modules/AddImage/pages/AddImage'));
const Edit = lazy(() => import('./modules/EditUser/pages/Edit'));



function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={ < MainLayout/>}>
          {/* Trang chu (Route den trang chu)  */}
          < Route index element={< Home/>} />
          < Route path='/image/search/:nameImage' element={ < ShowSearchImage />} />
        </Route>
        
        {/* < Route path='/image/manage/:user_id' element={< Manage/>}/> */}
        < Route path='/image/manage' element= {< ManageUser/> } />
        < Route path='/image/manage/created' element= {< CreatedImage />} />
        < Route path='/image/manage/saved' element= {< ImageSaved />} />
        < Route path='/image/:image_id' element={< ImageDetail />} />
        
        {/* Route điều hướng đến trang thêm ảnh */}
        < Route path='/image/manage/addImage' element={< AddImage />}/>

        {/* Route điều hướng đến trang chỉnh sửa người dùng  */}
        < Route path='/image/manage/updateUser' element={< Edit />}/>

        {/* Route tren trang Auth (trang dang nhap, dang ki nguoi dung)  */}
        < Route path='/login' element={< Login/>}/>
        < Route path='/sign-up' element={< Register/>}/>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
