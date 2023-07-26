import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchImages } from './searchImageSlice'

const ShowSearchImage = () => {

    const { data, isLoading, error } = useSelector((state) => state.search);
    const dispatch = useDispatch();
    let { nameImage } = useParams();

    useEffect(() => {
        dispatch(searchImages(nameImage))
    }, []);

    console.log(data);
    return (
        <div className='row'>
            {
                data.map((image) => {
                    return (
                        <div key={image.image_id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src={image.link} alt={image.image_name} />
                                <div className="card-body">
                                    <h5 className="card-title">{image.image_name}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ShowSearchImage