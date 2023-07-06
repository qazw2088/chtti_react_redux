import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Counter() {
  // 使用 useState hook 創建狀態變量
  const [dishCounter, setDishCounter] = useState(0);
  const [bowCounter, setBowCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [showDishMessage, setShowDishMessage] = useState(false);
  const [showBowMessage, setShowBowMessage] = useState(false);

  // 定義函數來更新狀態變量
  const useADish = () => {
    setDishCounter(dishCounter + 1);
    setShowDishMessage(true);
  };

  const cleanDish = () => {
    setDishCounter(0);
    setShowDishMessage(false);
  };

  const useABow = () => {
    setBowCounter(bowCounter + 1);
    setShowBowMessage(true);
  };

  const cleanBow = () => {
    setBowCounter(0);
    setShowBowMessage(false);
  };

  const changeCounter = () => {
    setCounter(counter + 1);
  };

  // 返回 JSX 元素
  return (
    <div>
      {/* 顯示菜品計數器 */}
      <Typography variant="h3" component="h3">
        Dish={dishCounter}
      </Typography>
      {/* 按鈕用於增加菜品計數器 */}
      <Button variant="contained" onClick={useADish}>
        Use a dish
      </Button>
      {/* 按鈕用於重置菜品計數器 */}
      <Button variant="contained" onClick={cleanDish}>
        Clean all dish
      </Button>
      {/* 顯示清理菜品的消息 */}
      {showDishMessage && (
        <Typography variant="h4" component="h4" color="error">
          Clean dish!
        </Typography>
      )}
      {/* 顯示弓箭計數器 */}
      <Typography variant="h3" component="h3">
        Bow={bowCounter}
      </Typography>
      {/* 按鈕用於增加弓箭計數器 */}
      <Button variant="contained" onClick={useABow}>
        Use a bow
      </Button>
      {/* 按鈕用於重置弓箭計數器 */}
      <Button variant="contained" onClick={cleanBow}>
        Clean all bow
      </Button>
      {/* 顯示清理弓箭的消息 */}
      {showBowMessage && (
        <Typography variant="h4" component="h4" color="error">
          Clean bow!
        </Typography>
      )}
      {/* 顯示計數器 */}
      <Typography variant="h3" component="h3">
        Counter1={counter}
      </Typography>
      {/* 按鈕用於增加計數器 */}
      <Button variant="contained" onClick={changeCounter}>
        Add1
      </Button>
    </div>
  );
}

export default Counter;
