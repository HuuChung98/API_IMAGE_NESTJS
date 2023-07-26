import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageCreated } from '../slices/manageUserSlice';
import { deleteImage } from '../slices/deleteImageSlice';
import { useState } from 'react';

const CreatedImage = () => {

  const { data, isLoading, error } = useSelector((state) => state.userInfor);
  const dispatch = useDispatch();

  const handleDelete = (image_id) => {
    dispatch(deleteImage(image_id));
    // setImages((state) => state.filter((images) => data.image_id !== images.image_id));

  }

  const { user } = useSelector((state) => state.auth);
  const user_id = user.user_id;

  useEffect(() => {
    dispatch(getImageCreated(user_id));
  }, []);

  if (data.length === 0) {
    //  console.log("object"); 
    return (<h1> Không có ảnh đươc tạo</h1>)


  }

  return (
    <div className='row'>
      {data?.map((image) => {
        return (
          <div key={image.image_id} className='col-sm-4'>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={image.link} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{image.image_name}</h5>
              </div>
            </div>
            <button className='btn btn-secondary' onClick={() => handleDelete(image.image_id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default CreatedImage