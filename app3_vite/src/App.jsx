import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { createContext } from "react";
export const AppContext = createContext(null);
function App() {
    // prepare global state
    const [id, setId] = useState(0);
    const [userName, setUserName] = useState("default username");
    const [count, setCount] = useState(0);

    return (
        <AppContext.Provider value={{ id, setId, userName, setUserName }}>
            <>
                <h1>APP Main</h1>
                <Login />
                <Profile />
            </>
        </AppContext.Provider>
    );
}

export default App;
