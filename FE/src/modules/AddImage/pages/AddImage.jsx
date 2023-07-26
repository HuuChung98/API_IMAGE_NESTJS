import React from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../slices/addImageSlice';

import { useForm } from "react-hook-form"

const AddImage = () => {

  const { isLoading, error } = useSelector((state) => state.image);

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        // image_name: "",
        // link: "",
        // description: "",
        file: "",
        // "dateUpload": ""
      },
    }
  )

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const user_id = user.user_id;

  const onSubmit = (values) => {
    console.log(values);
    // console.log("line 32", user_id);

    const payload = { ...values, file: values.file[0] };
    // const payload = { ...values};
    dispatch(addImage({ payload, user_id }));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        < TextField type="file" {...register("file")} />
        {/* <Button variant='contained' color='success'>
          <label htmlFor="imageUpload">
            Hình Ảnh
          </label>
        </Button>
        < input type='file' id="imageUpload" hidden multiple {...register("imageUpload")} /> */}
      </div>
      <div>
        <Button type='submit' variant='contained' color='primary'>Thêm ảnh</Button>
      </div>
    </form>
  )
}

export default AddImage