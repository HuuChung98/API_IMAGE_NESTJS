import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageSaved } from '../slices/imageSavedSlice';

const ImageSaved = () => {

  const { user } = useSelector((state) => state.auth)

  const { data, isLoading, error } = useSelector((state) => state.imageSaved);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageSaved(user.user_id));
  }, []);

  console.log(data);

  return (
    <div className='row'>
      {data.map((image) => {
        return (
          <div key={image.image_id} className='col-sm-4'>
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src={image.link} alt={image.image_name} />
              <div className="card-body">
                <h5 className="card-title">{image.image_name}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ImageSaved