import React from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserInfor from '../components/UserInfor';
import { useSelector } from 'react-redux';


const ManageUser = () => {

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  // Parse the JSON string into a JavaScript object
  // const { user_id, full_name, email, password, age, avatar } = JSON.parse(user);
  // const { data, isLoading, error } = useSelector((state) => state.userInfor)


  // const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className='mt-10'>
      <h3 className='text-center'> Tên người dùng: <p>{user.full_name}</p></h3>
      <h2 className='text-center'>Email:  {user.email}</h2>
      <div>
        <div className='text-center'>
          <button className='d-inline p-2 bg-primary text-white'>Chia sẻ</button>
          <button className='d-inline p-2 bg-dark text-white' onClick={() => navigate("updateUser")}>Chỉnh sửa hồ sơ</button>
          <button className='d-inline p-2 bg-primary text-white' onClick={() => navigate("addImage")}>Đăng hình</button>
        </div>
        <div className='text-center'>
          <button className=' btn btn-secondary' onClick={() => navigate("created")}>Đã tạo</button>
          <button className='btn btn-success' onClick={() => navigate("saved")}>Đã lưu</button>
        </div>

      </div>


    </div>
  )
}

export default ManageUser