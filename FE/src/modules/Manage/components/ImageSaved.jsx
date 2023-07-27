import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageSaved } from '../slices/imageSavedSlice';

const ImageSaved = () => {

  const { user } = useSelector((state) => state.auth);

  const user_id = user.user_id

  const { data, isLoading, error } = useSelector((state) => state.imageSaved);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageSaved(user_id));
  }, []);

  console.log("Line 20", data);

  return (
    <div className='row'>
      {data?.map((item) => {
        return (
          <div  key={item.id} className='col-sm-4'>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={item?.image?.link} alt={item?.image?.image_name} />
              <div className="card-body">
                <h5 className="card-title">{item?.image?.image_name}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ImageSaved