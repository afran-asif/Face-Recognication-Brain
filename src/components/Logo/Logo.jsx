import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './Brain.png';
const Logo = () => {
    return(
        <div className='ma4 mt0 size'>
            <Tilt>
                <div className=' tilt size shadow-2'>
                    <img className="mt2" src={Brain}></img>
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;