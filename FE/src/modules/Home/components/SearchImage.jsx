import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchImage = () => {

  // const { data, isLoading, error } = useSelector((state) => state.search);
  const inpRef = useRef();
  // const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSearch = () => {

    const value = inpRef.current.value;
    // console.log(value);
    navigate(`/image/search/${value}`)
    // dispatch(searchImages(value));
  }
  useEffect(() => {

  })

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Tạo
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Tạo ghim ý tưởng</a>
                  <a className="dropdown-item" href="#">Tạo ghim</a>
                </div>
              </li>
            </ul>
            <div className="form-inline mb-4">
              <input ref={inpRef} type="text" className="form-control" />
              <button className="btn btn-primary ml-3" onClick={handleSearch}>
                Search
              </button>
              <button className="btn btn-primary ml-3" onClick={() => navigate(`/image/manage/`)}>
                Hồ sơ
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SearchImage