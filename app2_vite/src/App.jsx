import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Counter4 from "./components/Counter4";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
    const [count, setCount] = useState(0);
    const [themeMode, setThemeMode] = useState("light");

    const toggleThemeMode = () => {
        setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeProvider theme={theme}>
            <DarkModeToggle onToggle={toggleThemeMode} mode={themeMode} />
            {/* <Counter1 /> */}
            {/* <Counter2 /> */}
            {/* <Counter3 /> */}
            <Counter4 />
        </ThemeProvider>
    );
}

export default App;
