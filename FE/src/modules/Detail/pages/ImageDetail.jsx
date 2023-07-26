// thông tin ảnh và người tạo ảnh bằng Id
// thông tin bình luận theo id ảnh
// thông tin đã lưu hình này hay chưa theo id ảnh

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getImagesDetail } from '../slices/getDetailSlice';
import { checkImageSaved } from '../slices/checkImageSlice';
import cn from 'classnames';
import styles from "../styles.module.scss"
import PostComment from '../components/PostComment';
import ShowComment from '../components/ShowComment';

const ImageDetail = () => {

  const { image_id } = useParams();

  const { data, isLoading, error } = useSelector((state) => state.imageDetail)

  const { content } = useSelector((state) => state.checkImage);
  console.log(content);

  const dispatch = useDispatch();
  const handleSaved = (image_id) => {
    console.log(image_id);
    dispatch(checkImageSaved(image_id));
  }

  useEffect(() => {
    dispatch(getImagesDetail(image_id));
  }, []);

  console.log(data);
  // const {ommentInfor } = data?.comment;
  // console.log(user);

  return (
    <div>
      <div key={data.image_id} className=' mx-auto  d-flex justify-content-center'>
        <div className="card " style={{ width: '30rem' }}>
          <img className="card-img-top" src={data.link} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title ">Tên: {data.image_name}</h5>
            <h5 className="card-title">Mô tả: {data.description}</h5>

            <button className="btn btn-success" onClick={() => handleSaved(image_id)}>Save</button>
            <div>
              {content.image_id == image_id ? (
                <div className="displayMessage"> Hình đã tồn tại </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className='mx-auto '>
          <p >Đăng bởi: {data?.user?.full_name}</p>
          <p>Email: {data?.user?.email}</p>
          <h3>Bình luận: </h3>
          < ShowComment commentInfor = {data?.comment}/>
          {/* <p>{data?.comment?.map((cmt) => {
            return (
              <div>
                <p>{ }</p>
                <p>{cmt.cmt}</p>
              </div>

            )
          })}</p> */}
          < PostComment image_id={image_id} />
        </div>
      </div>
    </div>
  )

}
// {[styles.displayMessage]: content.image_id == image_id == true}
export default ImageDetail