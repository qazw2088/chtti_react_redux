import { Button } from "@mui/material"; // 引入Button組件
import { useTheme } from "@mui/material/styles"; // 引入useTheme鉤子
import Brightness4Icon from "@mui/icons-material/Brightness4"; // 引入Brightness4Icon組件
import Brightness7Icon from "@mui/icons-material/Brightness7"; // 引入Brightness7Icon組件
import PropTypes from "prop-types"; // 引入PropTypes庫

function DarkModeToggle({ onToggle, mode }) { // 定義DarkModeToggle組件，接收onToggle和mode兩個屬性
    const theme = useTheme(); // 使用useTheme鉤子獲取當前主題

    const toggleDarkMode = () => { // 定義toggleDarkMode函數
        onToggle(); // 調用onToggle函數
    };

    return (
        <Button
            onClick={toggleDarkMode}
            color="success"
            variant="contained"
            startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
            }
        >
            {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
    );
}

DarkModeToggle.propTypes = { // 驗證DarkModeToggle組件的屬性
    onToggle: PropTypes.func.isRequired, // onToggle屬性是必需的函數類型
    mode: PropTypes.string.isRequired, // mode屬性是必需的字符串類型
};

export default DarkModeToggle; // 導出DarkModeToggle組件