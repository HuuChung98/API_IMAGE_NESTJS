import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postCmt } from '../slices/postCommentSlice';

const PostComment = ({ image_id }) => {

    const { user } = useSelector((state) => state.auth);
   
    const user_id = user.user_id;

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            cmt: ""
        }
    });

    const dispatch = useDispatch();
    const onSubmit = (values) => {
        const payload = {...values, image_id}
        console.log({payload, user_id});
        dispatch(postCmt({payload, user_id }));
    }

    const { userComment, isLoading, error } = useSelector((state) => state.post);
    // const [ comment, setComment ] = useState(userComment)
    console.log("Line 31", userComment);

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("cmt")}/>
            <button className='btn btn-primary'> Đăng </button>
        </form>
        <div>
            {/* {userComment.map((item) => {
                return (
                    <p>Bình luận: {item.cmt}</p>
                )
            })} */}
            {userComment.cmt}
        </div>
    </>
  )
}

export default PostComment