import React from 'react'
/* image url */
import DarkImg from '../../public/images/Dark.png';
import WhiteImg from '../../public/images/White.png';

function ImageLogo({mode}) {
  return (
    <div>     
        <img style={{width:'500px',border:'2px solid'}} src={mode == 'dark' ? DarkImg : WhiteImg} alt="Logo" />
    </div>
  )
}

export default ImageLogo