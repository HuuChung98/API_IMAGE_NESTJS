import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { editUser } from '../slices/editSlice';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const validationSchema = yup.object({
  full_name: yup.string().required("Tên không được để trống"),
  email: yup.string().required("email không được để trống").email("email không đúng định dạng"),
  password: yup.string().required("mật khẩu không được để trống")
})

const Edit = () => {

  const { data, isLoading, error } = useSelector((state) => state.editUser);

  const { user } = useSelector((state) => state.auth)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      age: null,
      avatar: ""
    },
    resolver: yupResolver(validationSchema),
    mode: "onTouched"
  });


  const dispatch = useDispatch();
  const user_id = user.user_id;
  const navigate = useNavigate();

  const onSubmit = (values) => {
    // const payload = {...values, age: +values.age }
    dispatch(editUser({ values, user_id }));
  }

  return (
    <div className='text-center'>
      <h1>Chỉnh sửa thông tin người dùng</h1>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
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
          {/* {error && <p>{error}</p>} */}
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
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Edit