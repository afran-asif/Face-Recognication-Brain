import React from 'react';
import './ImageLinkFrom.css';

const ImageLinkFrom = ({onInputChange , onSubmitButton}) => {
    return(
        <div className=''>
            <p className='f4'>This Magic Brain will detect faces in your picture. Get it a try.</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='pa2 f4 w-70 center' type='text' placeholder='Paste here...' onChange={onInputChange} />
                    <button className='pa2 bg-light-purple w-30 grow f4 link ph3 pv2 dib white' onClick={onSubmitButton}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkFrom;