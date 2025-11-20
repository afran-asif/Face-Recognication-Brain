import React from 'react';
import './FaceRecognization.css';

const FaceRecognization = ({imgUrl}) => {
    return(
        <div className='mt2 flex justify-center'>
            <div className='image'>
                <img src={imgUrl}></img>
            </div>
        </div>
    );
}

export default FaceRecognization;