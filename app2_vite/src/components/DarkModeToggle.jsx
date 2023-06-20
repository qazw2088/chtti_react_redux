import { Button, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import PropTypes from "prop-types"; // 引入 PropTypes

function DarkModeToggle({ onToggle, mode }) {
    const theme = useTheme();

    const toggleDarkMode = () => {
        onToggle();
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

// 添加属性类型验证
DarkModeToggle.propTypes = {
    onToggle: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default DarkModeToggle;
