import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { editUser } from '../slices/editSlice';
import { number } from 'yup';

const Edit = () => {

  const { data, isLoading, error } = useSelector((state) => state.editUser);

  const { user } = useSelector((state) => state.auth)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      age : null,
      avatar: ""
    }
  });


  const dispatch = useDispatch();
  const user_id = user.user_id;

  const onSubmit = (values) => {
    console.log("Line 33", values);
    // const payload = {...values, age: +values.age }

    dispatch(editUser({ values, user_id }));
  }

  // console.log(data);

  return (
    <div className='text-center'>
      <h1>Chỉnh sửa thông tin người dùng</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Họ tên</label>
          <input type="text" {...register("full_name")} />
          {errors.full_name && <span> {errors.full_name.message}</span>}
        </div>
        <br />
        <div>
          <label htmlFor="">email</label>
          <input type="text" {...register("email")} />
          {errors.email && <span> {errors.email.message}</span>}
        </div>
        <br />
        <div>
          <label htmlFor="">Mật khẩu</label>
          <input type="password" {...register("password")} />
          {errors.password && <span> {errors.password.message}</span>}
        </div>
        <br />
        <div>
          <label htmlFor="">Tuổi</label>
          <input type="number"  {...register("age")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Avatar</label>
          <input  {...register("avatar")} />
        </div>
        <button className='btn btn-secondary' > Cập nhật </button>
      </form>
    </div>
  )
}

export default Edit