import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";

// 定義一個名為 CopilotTest 的 React 元件
function CopilotTest() {
  // 使用 useState hook 宣告一個名為 userState 的狀態變數，初始值為 { id: 0, name: "User" }
  const [userState, setUserState] = useState({ id: 0, name: "User" });

  // 定義一個名為 updateUserState 的函式，接受一個新的使用者物件作為參數
  const updateUserState = (newUser) => {
    // 使用 setUserState 函式更新 userState 狀態變數
    setUserState(newUser);
  };

  // 定義一個名為 handleClick 的函式，當按鈕被點擊時更新使用者狀態
  const handleClick = () => {
    updateUserState({ id: 1, name: "New User" });
  };

  // 使用 Material-UI 元件渲染元件
  return (
    <div>
      <Typography variant="h1">Copilot Test</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Update User
      </Button>
      <Typography variant="body1">User ID: {userState.id}</Typography>
      <Typography variant="body1">User Name: {userState.name}</Typography>
    </div>
  );
}

// 將 CopilotTest 元件作為此模組的預設匯出
export default CopilotTest;
