import React from 'react'; // 引入React庫
import PropTypes from 'prop-types'; // 引入PropTypes庫
import DarkImg from '../../public/images/Dark.png'; // 引入Dark模式圖片
import WhiteImg from '../../public/images/White.png'; // 引入White模式圖片

function ImageLogo({mode}) {
  return (
    <div>
      {/* 根據mode屬性的值，顯示對應的圖片 */}
      <img style={{width:'500px',border:'2px solid'}} src={mode == 'dark' ? DarkImg : WhiteImg} alt="Logo" />
    </div>
  )
}

ImageLogo.propTypes = { // 驗證ImageLogo組件的屬性
  mode: PropTypes.string.isRequired, // mode屬性是必需的字符串類型
};

export default ImageLogo; // 導出ImageLogo組件