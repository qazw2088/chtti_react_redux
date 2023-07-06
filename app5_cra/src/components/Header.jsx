import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    // AppBar 組件創建一個帶有 Toolbar 的頂部應用程式欄。
    <AppBar position="static">
      <Toolbar>
        {/* Typography 組件顯示具有指定變體和樣式的文本。 */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Header
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;