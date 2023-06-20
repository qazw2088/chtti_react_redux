import React, { useContext } from "react";

import { AppContext } from "../App";

function Login() {
    const { userName, setUserName, id, setId } = useContext(AppContext);

    function changeUserName(event) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h1>Login with id={id}</h1>

            <label htmlFor="username">UserName</label>

            {/* read state */}

            <input
                type="text"
                id="username"
                onChange={changeUserName}
                value={userName}
            />

            <button
                onClick={() => {
                    setId(id + 1);
                }}
            >
                addId
            </button>
        </div>
    );
}

export default Login;
