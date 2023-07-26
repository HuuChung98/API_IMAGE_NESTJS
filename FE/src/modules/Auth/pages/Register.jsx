import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { register as registerAction } from '../slices/authSlices';

const validationSchema = yup.object({
  full_name: yup.string().required("Tên không được để trống"),
  email: yup.string().required("email không được để trống").email("email không đúng định dạng"),
  password: yup.string().required("mật khẩu không được để trống")
})

const Register = () => {

  const { user, isLoading, error } = useSelector((state) => state.auth)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      age: ""

    },
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    // console.log(values);
    dispatch(registerAction(values)).then(() => {
      // sau khi xu ly thanh cong => chuyen ve trang dang nhap
      navigate("/login");
    });
  }

  return (
    <div className='text-center'>
      <h1>Đăng kí</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Họ tên</label>
          <input type="text" {...register("full_name")} />
          { errors.full_name && <span> {errors.full_name.message}</span>}
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="text" {...register("email")} />
          { errors.email && <span> {errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="">Mật khẩu</label>
          <input type="password" {...register("password")} />
          { errors.password && <span> {errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="">Tuổi</label>
          <input type="text" {...register("age")} />
        </div>
        <button className='btn btn-secondary' > Đăng kí </button>
      </form>
    </div>
  )
}

export default Register