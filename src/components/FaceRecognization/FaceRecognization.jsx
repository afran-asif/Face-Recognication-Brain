import React from 'react';

const FaceRecognization = ({imgUrl}) => {
    return(
        <div className='mt2'>
            <div className=''>
                <img src={imgUrl}></img>
            </div>
        </div>
    );
}

export default FaceRecognization;