import React from 'react'
import { useForm } from 'react-hook-form';
// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../slices/authSlices';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },

    mode: "onTouched"
  })

  const dispatch = useDispatch();
  
  let { user, isLoading, error } = useSelector((state) => state.auth);
  

  const onSubmit = (values) => {
    // console.log(values);
    dispatch(login(values))

  }

  const onError = (errors) => {
    console.log(errors);
  }


  console.log(user);
  // localStorage.setItem("user", JSON.stringify(user));
  if(user) {  
    return < Navigate to="/"/>
  }


  return (
    <div className='text-center'>
      <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label htmlFor="">Tài khoản</label>
          <input type="text"
            {...register("email",
              {
                required:
                {
                  value: true,
                  message: "Tài khoản không được để trống"
                }
              })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div >
          <label htmlFor="">Mật khẩu</label>
          <input type="password"
            {...register("password", {
              required:
              {
                value: true,
                message: "Mật khẩu không được để trống"
              }
            })} />
          {errors.password && <span>{errors.password.message} </span>}
        </div>
        <button className='btn btn-success' disabled={isLoading}> Đăng nhập </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login