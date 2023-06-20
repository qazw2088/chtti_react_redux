import React from "react";
import { useSelector } from "react-redux";

function CokeContainer() {
    const numberOfCokes = useSelector((state) => state.numberOfCokes);
    return (
        <div>
            <h1>CokeContainer</h1>
            <h3>{numberOfCokes}</h3>
            <button>Buy Coke</button>
        </div>
    );
}

export default CokeContainer;
