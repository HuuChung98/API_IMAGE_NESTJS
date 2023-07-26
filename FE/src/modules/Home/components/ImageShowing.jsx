import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getImages } from '../slices/imagesSlice';
import { ImageListItem } from '@mui/material';

const ImageShowing = () => {

    const { data, isLoading, error } = useSelector((state) => state.imageShowing);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getImages());
    }, []);
    // console.log(data);

    return (
        
        <div className='row text-center mr-30'>
            {data.map((image) => {
                return (
                    <ImageListItem key={image.image_id} className='col-sm-4'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={image.link} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{image.image_name}</h5>
                                <button className="btn btn-primary" onClick={() => navigate(`/image/${image.image_id}`)}>Detail</button>
                            </div>
                        </div>
                    </ImageListItem>
                )
            })}
        </div>
    )
}

export default ImageShowing