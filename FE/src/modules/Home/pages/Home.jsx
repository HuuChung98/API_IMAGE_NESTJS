import React from 'react';
import ImageShowing from '../components/ImageShowing';
import { ImageList } from '@mui/material';

const Home = () => {
  return (
    <div className='row' >   
        {/* < SearchImage /> */}
        < ImageShowing /> 
    </div>
  )
}

export default Home